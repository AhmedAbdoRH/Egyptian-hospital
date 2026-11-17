import React, { useEffect, useRef, useState } from 'react';
import { Building2, X, Maximize2 } from 'lucide-react';
import { FACILITY_GALLERY } from '../data/cairoHospitalData';
import { HospitalFacilityItem } from '../types/hospital';
import { Reveal } from './ScrollReveal';

// Slow, unobtrusive scroll speed used for the automatic gallery tour.
const AUTO_SCROLL_SPEED_PX_PER_SECOND = 58;

type TypewriterCaptionProps = {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
};

// Reveals caption text one character at a time as the tile reaches the viewport.
const TypewriterCaption: React.FC<TypewriterCaptionProps> = ({
  text,
  className = '',
  speed = 30,
  delay = 0,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleCount(text.length);
      return;
    }

    const host: Element = node.closest('.sr-element') ?? node;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -160px 0px', threshold: 0.25 }
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [text]);

  useEffect(() => {
    if (!started) return;

    let intervalId = 0;
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setVisibleCount((current) => {
          if (current >= text.length) {
            window.clearInterval(intervalId);
            return current;
          }
          return current + 1;
        });
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [started, text, speed, delay]);

  return (
    <span ref={ref} className={`${className} ${started ? 'caption-typing' : ''}`.trim()} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, visibleCount)}</span>
      {visibleCount < text.length && <span className="typing-caret" aria-hidden="true" />}
    </span>
  );
};

// Inside Cairo Hospital — responsive masonry gallery with a click-to-zoom lightbox.
export const FacilityGallery: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<HospitalFacilityItem | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const selectedFacilityRef = useRef<HospitalFacilityItem | null>(null);
  const stopAutoScrollRef = useRef<() => void>(() => {});

  useEffect(() => {
    selectedFacilityRef.current = selectedFacility;
    if (selectedFacility) stopAutoScrollRef.current();
  }, [selectedFacility]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const galleryHeading: Element = section.querySelector('h2') ?? section;
    const nextBlock: Element | null = section.nextElementSibling;
    const nextHeading: Element | null =
      nextBlock?.querySelector('h2, h3') ?? nextBlock ?? null;

    let animationFrame = 0;
    let isAutoScrolling = false;
    let hasCompleted = false;
    let lastScrollY = window.scrollY;
    let lastFrameTime = 0;
    let pendingPixels = 0;

    const stop = () => {
      if (!isAutoScrolling) return;
      isAutoScrolling = false;
      cancelAnimationFrame(animationFrame);
      section.dataset.autoScrolling = 'false';
    };
    stopAutoScrollRef.current = stop;

    const step = (time: number) => {
      if (!isAutoScrolling) return;
      if (selectedFacilityRef.current) {
        stop();
        return;
      }

      if (!lastFrameTime) lastFrameTime = time;
      const elapsed = Math.min(time - lastFrameTime, 64);
      lastFrameTime = time;

      const rect = section.getBoundingClientRect();
      const nextRect = nextHeading?.getBoundingClientRect();
      const reachedNextHeading = nextRect
        ? nextRect.top <= window.innerHeight * 0.5
        : rect.bottom <= window.innerHeight - 8;
      const reachedPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (reachedNextHeading || reachedPageEnd) {
        hasCompleted = true;
        stop();
        return;
      }

      pendingPixels += (AUTO_SCROLL_SPEED_PX_PER_SECOND * elapsed) / 1000;
      const wholePixels = Math.floor(pendingPixels);
      if (wholePixels > 0) {
        pendingPixels -= wholePixels;
        window.scrollTo({ top: window.scrollY + wholePixels, behavior: 'instant' });
      }

      animationFrame = requestAnimationFrame(step);
    };

    const start = () => {
      if (isAutoScrolling || hasCompleted || selectedFacilityRef.current) return;
      isAutoScrolling = true;
      lastFrameTime = 0;
      pendingPixels = 0;
      section.dataset.autoScrolling = 'true';
      animationFrame = requestAnimationFrame(step);
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      const rect = section.getBoundingClientRect();
      const headingRect = galleryHeading.getBoundingClientRect();
      const enteredGallery =
        headingRect.top <= window.innerHeight * 0.82 && rect.bottom > window.innerHeight * 0.2;

      // Any real user scroll takes control back. Auto-scroll only moves <1px per frame.
      if (isAutoScrolling && (delta < -0.5 || delta > 8 || headingRect.top > window.innerHeight * 0.92)) {
        stop();
      }
      if (!hasCompleted && !isAutoScrolling && delta > 0.5 && enteredGallery) {
        start();
      }
      if (headingRect.top > window.innerHeight * 0.92) {
        hasCompleted = false;
      }

      lastScrollY = currentY;
    };

    const cancelByUser = () => stop();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', cancelByUser, { passive: true });
    window.addEventListener('touchstart', cancelByUser, { passive: true });
    window.addEventListener('keydown', cancelByUser);
    window.addEventListener('pointerdown', cancelByUser, { passive: true });

    return () => {
      stop();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', cancelByUser);
      window.removeEventListener('touchstart', cancelByUser);
      window.removeEventListener('keydown', cancelByUser);
      window.removeEventListener('pointerdown', cancelByUser);
      stopAutoScrollRef.current = () => {};
    };
  }, []);

  useEffect(() => {
    if (!selectedFacility) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedFacility(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedFacility]);

  return (
    <section
      id="facilities"
      ref={sectionRef}
      data-auto-scrolling="false"
      className="py-10 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="ambient-glow-cyan bottom-10 right-10 pointer-events-none" />
      <div className="ambient-glow-navy top-10 left-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-14">
        {/* Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#013777]" />
              <span>Inside Cairo Hospital</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
              A Look Inside Our Hospital
            </h2>
            <p className="text-sm sm:text-base text-[#2d435e] leading-relaxed">
              Explore the reception, operating theatre, inpatient rooms, on-site pharmacy, and
              rehabilitation facilities that support care at Cairo Hospital, Abuja.
            </p>
          </div>
        </Reveal>

        {/* Masonry grid (CSS columns => natural masonry, no gaps) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 [column-fill:_balance]">
          {FACILITY_GALLERY.map((item, idx) => (
            <Reveal key={item.id} variant="scale" delay={(idx % 3) * 45} duration={620} threshold={0.02} className="mb-4 sm:mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setSelectedFacility(item)}
                aria-label={`Enlarge photo: ${item.title}`}
                className="group relative block w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 ring-1 ring-slate-200/70 shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-[#013777]/50"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block object-cover gallery-photo"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#012654]/75 via-[#012654]/5 to-transparent opacity-90" />
                <span className="pointer-events-none absolute inset-0 flex items-start justify-end p-3">
                  <span className="p-1.5 rounded-full bg-white/85 text-[#013777] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </span>
                <span className="photo-caption pointer-events-none absolute bottom-0 inset-x-0 p-4 text-left">
                  <TypewriterCaption
                    text={item.category}
                    className="gallery-caption-line gallery-caption-kicker block text-[10px] font-bold !text-white/85 uppercase tracking-wider"
                    speed={22}
                    delay={0}
                  />
                  <TypewriterCaption
                    text={item.title}
                    className="gallery-caption-line gallery-caption-title block text-sm sm:text-base font-black !text-white leading-snug mt-0.5"
                    speed={26}
                    delay={100}
                  />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox: full photo with caption */}
      {selectedFacility && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedFacility.title}
          onClick={() => setSelectedFacility(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#011633]/85 backdrop-blur-md"
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedFacility(null)}
              aria-label="Close photo"
              className="absolute -top-2 -right-2 sm:top-3 sm:right-3 z-10 p-2 rounded-full bg-white/95 text-[#013777] shadow-lg hover:bg-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <img
              src={selectedFacility.image}
              alt={selectedFacility.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl sm:rounded-3xl shadow-2xl"
            />
            <div className="photo-caption mt-3 text-center">
              <p className="text-[11px] font-bold !text-white/80 uppercase tracking-wider">
                {selectedFacility.category}
              </p>
              <h3 className="text-lg sm:text-xl font-black !text-white">{selectedFacility.title}</h3>
              <p className="text-xs !text-slate-300 mt-1 max-w-2xl mx-auto">
                {selectedFacility.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

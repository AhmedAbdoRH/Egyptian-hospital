import React, { useEffect, useRef } from 'react';
import {
  History,
  Target,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  Activity,
  Award,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Building2,
  Microscope,
  BadgeCheck,
} from 'lucide-react';
import { PILLARS_OF_CARE, HOSPITAL_CONTACT } from '../data/cairoHospitalData';
import { Reveal } from './ScrollReveal';

interface AboutUsProps {
  onOpenWhatsAppBooking: () => void;
}

const normalizeLoopOffset = (val: number, width: number): number => {
  if (width <= 0) return 0;
  return ((((val + width) % width) + width) % width) - width;
};

const renderPillarIcon = (title: string) => {
  switch (title) {
    case 'PATIENT COMPLIANCE & SATISFACTION':
      return <Users className="w-5 h-5" />;
    case 'ACCURATE DIAGNOSIS & EFFECTIVE TREATMENT':
      return <Microscope className="w-5 h-5" />;
    case 'HYGIENE':
      return <ShieldCheck className="w-5 h-5" />;
    case 'COMFORT':
      return <HeartHandshake className="w-5 h-5" />;
    case 'CARE':
      return <Stethoscope className="w-5 h-5" />;
    case 'REASSURANCE':
    default:
      return <Activity className="w-5 h-5" />;
  }
};

const FundamentalAimScroller: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstGroupRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef<number>(0);
  const groupWidthRef = useRef<number>(0);
  const initializedRef = useRef<boolean>(false);
  const isHoveredRef = useRef<boolean>(false);
  const isPointerDownRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const activePointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef<number>(0);
  const dragStartOffsetRef = useRef<number>(0);
  const resumeAtRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = reducedMotionQuery.matches;
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      reducedMotion = e.matches;
    };
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    const applyTransform = () => {
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
    };

    const measureGroup = () => {
      const groupEl = firstGroupRef.current;
      if (!groupEl) return;
      const width = groupEl.getBoundingClientRect().width;
      if (width <= 0) return;

      groupWidthRef.current = width;
      if (!initializedRef.current) {
        offsetRef.current = -width;
        initializedRef.current = true;
      } else {
        offsetRef.current = normalizeLoopOffset(offsetRef.current, width);
      }
      applyTransform();
    };

    measureGroup();

    let resizeObserver: ResizeObserver | null = null;
    if ('ResizeObserver' in window && firstGroupRef.current) {
      resizeObserver = new ResizeObserver(() => {
        measureGroup();
      });
      resizeObserver.observe(firstGroupRef.current);
    } else {
      window.addEventListener('resize', measureGroup);
    }

    let rafId = 0;
    let lastTime = performance.now();
    const SPEED_PX_PER_SEC = 44; // Negative X -> smooth glide from Right to Left

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const width = groupWidthRef.current;
      if (
        width > 0 &&
        !reducedMotion &&
        !isHoveredRef.current &&
        !isPointerDownRef.current &&
        now >= resumeAtRef.current
      ) {
        offsetRef.current = normalizeLoopOffset(
          offsetRef.current - SPEED_PX_PER_SEC * dt,
          width
        );
        applyTransform();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', measureGroup);
      }
    };
  }, []);

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse') {
      isHoveredRef.current = true;
    }
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse') {
      isHoveredRef.current = false;
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    isPointerDownRef.current = true;
    isDraggingRef.current = false;
    activePointerIdRef.current = e.pointerId;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current || e.pointerId !== activePointerIdRef.current) return;

    const dx = e.clientX - dragStartXRef.current;
    if (!isDraggingRef.current && Math.abs(dx) > 5) {
      isDraggingRef.current = true;
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Ignore capture errors on unsupported devices
      }
    }

    if (isDraggingRef.current && groupWidthRef.current > 0) {
      offsetRef.current = normalizeLoopOffset(
        dragStartOffsetRef.current + dx,
        groupWidthRef.current
      );
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
    }
  };

  const endPointerInteraction = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerId !== activePointerIdRef.current) return;
    if (isDraggingRef.current) {
      resumeAtRef.current = performance.now() + 450;
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Ignore release errors
      }
    }
    isPointerDownRef.current = false;
    isDraggingRef.current = false;
    activePointerIdRef.current = null;
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 1 && groupWidthRef.current > 0) {
      offsetRef.current = normalizeLoopOffset(
        offsetRef.current - e.deltaX,
        groupWidthRef.current
      );
      resumeAtRef.current = performance.now() + 600;
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
    }
  };

  return (
    <div
      dir="ltr"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endPointerInteraction}
      onPointerCancel={endPointerInteraction}
      onWheel={handleWheel}
      className="relative overflow-hidden py-3 -my-3 touch-pan-y select-none cursor-grab active:cursor-grabbing [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      aria-label="Our Fundamental Aim Pillars"
    >
      <div
        ref={trackRef}
        className="flex flex-nowrap items-stretch w-max will-change-transform"
      >
        {[0, 1, 2].map((groupIndex) => (
          <div
            key={groupIndex}
            ref={groupIndex === 0 ? firstGroupRef : undefined}
            aria-hidden={groupIndex > 0}
            className="flex flex-nowrap items-stretch shrink-0 gap-4 sm:gap-5 pr-4 sm:pr-5"
          >
            {PILLARS_OF_CARE.map((pillar, idx) => (
              <div
                key={`${groupIndex}-${pillar.title}`}
                className="w-[260px] sm:w-[295px] md:w-[310px] shrink-0 glass-panel glass-panel-hover p-5 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white flex flex-col justify-between gap-2.5 shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#013777]/10 border border-[#013777]/20 text-[#013777] flex items-center justify-center shrink-0">
                      {renderPillarIcon(pillar.title)}
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200/80 text-[10px] font-black text-[#013777] tracking-wider">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-black text-[#092545] tracking-wide leading-tight">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-[#1e293b] font-medium leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenWhatsAppBooking }) => {
  return (
    <section id="about" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-navy top-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-16">
        {/* Section Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#013777]" />
              <span>About Cairo Hospital Abuja</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
              A Beacon of Quality Healthcare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#013777] via-[#0b5599] to-[#0284c7]">
                In Nigeria & West Africa
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              Founded in 2019 by visionary Egyptian medical professionals with deep roots in Nigerian healthcare dating back to 1970, Cairo Hospital unites international surgical excellence, advanced orthobiologics, and compassionate care in the Federal Capital Territory.
            </p>
          </div>
        </Reveal>

        {/* Narrative & History Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Narrative Cards */}
          <div className="lg:col-span-7 space-y-7">
            {/* Card 1: 2019 - Founding & Inception */}
            <Reveal variant="left">
              <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white via-white/95 to-sky-50/25 p-7 sm:p-9 shadow-md hover:shadow-2xl hover:border-sky-400/50 transition-all duration-300 hover:-translate-y-1.5">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#013777] via-[#0b5599] to-[#0284c7]" />
              
              {/* Subtle Luminous Ambient Glow */}
              <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-sky-200/40 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              <div className="relative z-10 space-y-5">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#013777] via-[#0b5599] to-[#0284c7] text-white flex flex-col items-center justify-center font-black shadow-lg shadow-[#013777]/25 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-[10px] font-bold text-sky-200 tracking-widest leading-none">EST.</span>
                      <span className="text-xl leading-none mt-0.5">2019</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sky-50 text-[11px] font-bold text-[#013777] border border-sky-200/80 mb-1">
                        <Building2 className="w-3.5 h-3.5 text-[#0284c7]" />
                        <span>Abuja Tertiary Inception</span>
                      </div>
                      <h3 className="text-2xl sm:text-[1.7rem] font-black text-[#061a33] tracking-tight leading-tight">
                        Our Founding & Inception
                      </h3>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-xl bg-sky-50 text-xs font-bold text-[#013777] border border-sky-200/80 shadow-xs">
                    Garki 2 · Abuja FCT
                  </span>
                </div>

                {/* Subtitle with emblem */}
                <div className="flex items-center gap-2 text-xs font-bold text-[#013777]">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7] ring-4 ring-sky-100 shrink-0" />
                  <span>Established under the umbrella of Cairo Rehabilitation Centre (CRC)</span>
                </div>

                {/* Highlighted Quote Callout */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-sky-50/60 border-l-4 border-[#013777] border-y border-r border-sky-100/80">
                  <p className="text-xs sm:text-sm font-semibold text-[#092545] leading-relaxed italic">
                    "The first Egyptian-led hospital founded in Abuja, bridging renowned surgical heritage with comprehensive multidisciplinary clinical care."
                  </p>
                </div>

                {/* Narrative Paragraph */}
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
                  Cairo Hospital was founded in 2019 by dedicated Egyptian medical professionals and administrators. Commencing operations as an outpatient orthopedic and physical rehabilitation clinic, the center continuously expanded into an advanced tertiary facility equipped with fully digital radiology, sterile theaters, and pathology diagnostics.
                </p>

                {/* 3 Executive Pillar Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#013777] flex items-center justify-center mb-2">
                      <Activity className="w-4 h-4 text-[#0284c7]" />
                    </div>
                    <div className="text-xs font-bold text-[#092545]">Outpatient to Tertiary</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Full-spectrum orthopedic & rehabilitation hospital</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#013777] flex items-center justify-center mb-2">
                      <Microscope className="w-4 h-4 text-[#0284c7]" />
                    </div>
                    <div className="text-xs font-bold text-[#092545]">Diagnostic Radiology</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">High-resolution digital X-ray & automated lab</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#013777] flex items-center justify-center mb-2">
                      <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
                    </div>
                    <div className="text-xs font-bold text-[#092545]">CRC Heritage</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Specialist physician and orthopedic team in Abuja</div>
                  </div>
                </div>
              </div>
              </div>
            </Reveal>

            {/* Card 2: 1970 - Over 5 Decades */}
            <Reveal variant="left" delay={120}>
              <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white via-white/95 to-teal-50/25 p-7 sm:p-9 shadow-md hover:shadow-2xl hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1.5">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-800 via-emerald-600 to-teal-500" />
              
              {/* Subtle Luminous Ambient Glow */}
              <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-teal-200/40 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              <div className="relative z-10 space-y-5">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-700 text-white flex flex-col items-center justify-center font-black shadow-lg shadow-teal-900/25 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-[10px] font-bold text-teal-200 tracking-widest leading-none">SINCE</span>
                      <span className="text-xl leading-none mt-0.5">1970</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#fdc33e]/15 text-[11px] font-bold text-[#8c6000] border border-[#fdc33e]/40 mb-1">
                        <Award className="w-3.5 h-3.5 text-[#b87c08]" />
                        <span>Work in Nigeria</span>
                      </div>
                      <h3 className="text-2xl sm:text-[1.7rem] font-black text-[#061a33] tracking-tight leading-tight">
                        Work in Nigeria Since 1970
                      </h3>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#fdc33e]/15 text-xs font-bold text-[#8c6000] border border-[#fdc33e]/40 shadow-xs">
                    NEPA Medical Director · 1970–1991
                  </span>
                </div>

                {/* Subtitle with emblem */}
                <div className="flex items-center gap-2 text-xs font-bold text-teal-800">
                  <span className="w-2 h-2 rounded-full bg-teal-600 ring-4 ring-teal-100 shrink-0" />
                  <span>Career detail listed in the supplied hospital profile</span>
                </div>

                {/* Highlighted Quote Callout */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-teal-50/60 border-l-4 border-teal-700 border-y border-r border-teal-100/80">
                  <p className="text-xs sm:text-sm font-semibold text-teal-950 leading-relaxed italic">
                    "Dr. Ahmed Shaker’s healthcare leadership in Nigeria began in 1970. Cairo Hospital was established in Abuja in 2019 and expanded its hospital services in 2021."
                  </p>
                </div>

                {/* Narrative Paragraph */}
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
                  Dr. Ahmed Shaker began working in Nigeria in 1970 and served as NEPA Medical Director until 1991, directing medical services across more than 130 hospitals. Cairo Hospital was established in Abuja in 2019; its 2021 expansion added a fully equipped surgery room, inpatient department, and pharmacy department.
                </p>

                {/* 3 Executive Pillar Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center mb-2">
                      <History className="w-4 h-4 text-teal-600" />
                    </div>
                    <div className="text-xs font-bold text-[#092545]">Work in Nigeria since 1970</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Dr. Ahmed Shaker has worked in Nigeria since 1970</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center mb-2">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                    </div>
                    <div className="text-xs font-bold text-[#092545]">2021 Major Expansion</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Fully equipped surgery room, inpatient department & pharmacy</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center mb-2">
                      <BadgeCheck className="w-4 h-4 text-teal-600" />
                    </div>
                    <div className="text-xs font-bold text-[#092545]">Pharmacy Department</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Hospital pharmacy service listed in the profile</div>
                  </div>
                </div>
              </div>
              </div>
            </Reveal>
          </div>

          {/* Right Photographic Mosaic of Leadership & Facilities */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal variant="right" delay={140}>
              <div className="glass-panel p-4 rounded-3xl border border-white/80 overflow-hidden space-y-4 bg-white/90">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                  <img
                    src="/images/delegation/cairo-hospital-leadership.jpg"
                      alt="Cairo Hospital representatives standing in front of the hospital logo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012654] via-transparent to-transparent opacity-90" />
                  <div className="photo-caption absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-[11px] font-bold !text-[#fdc33e] uppercase tracking-wider">Hospital Governance</div>
                    <div className="text-sm font-bold !text-white">Cairo Hospital Representatives</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="relative h-36 rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                    <img
                      src="/images/delegation/cairo-hospital-partnership-handshake.jpg"
                      alt="Cairo Hospital representatives at a formal institutional event"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/30" />
                    <div className="absolute bottom-2 left-2 text-[10px] text-white font-bold bg-slate-950/60 px-2 py-0.5 rounded-md">
                      Institutional Engagement
                    </div>
                  </div>

                  <div className="relative h-36 rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                    <img
                      src="/images/delegation/cairo-hospital-team-visit.jpg"
                      alt="Cairo Hospital clinical team with visiting delegates"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/30" />
                    <div className="absolute bottom-2 left-2 text-[10px] text-white font-bold bg-slate-950/60 px-2 py-0.5 rounded-md">
                      Hospital Visit
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* The 4 Core Pillars of Aim - Single-Row Left-to-Right Horizontal Scroller */}
        <div className="space-y-5 sm:space-y-6">
          <Reveal variant="up">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="text-xs font-bold text-[#013777] uppercase tracking-wider">
                Our Fundamental Aim
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#092545]">
                Patient Compliance, Accurate Diagnosis & Effective Treatment
              </h3>
            </div>
          </Reveal>

          <Reveal variant="fade" delay={80}>
            <FundamentalAimScroller />
          </Reveal>
        </div>

        {/* Mission & Motive Comparison Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <Reveal variant="left" className="h-full">
            <div className="h-full glass-panel p-8 rounded-3xl border border-teal-300/60 space-y-5 bg-gradient-to-br from-white via-teal-50/40 to-white shadow-lg">
              <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
                <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-teal-800">Our Vision</h3>
                  <div className="text-xs text-teal-800 font-bold">Our direction for multispecialty care</div>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#2d435e]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-teal-900">International-Standard Multispecialty Hospital:</strong> Cairo Hospital’s stated aim is to provide multispecialty care to patients in Abuja.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-teal-900">Referral Hospital in Nigeria & West Africa:</strong> Building a regional referral destination for patients who need specialist care.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[#092545]">Cutting-Edge Technology:</strong> Applying technology across diagnostic, medical, and surgical services.</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Motive */}
          <Reveal variant="right" delay={120} className="h-full">
            <div className="h-full glass-panel p-8 rounded-3xl border border-teal-300/60 space-y-5 bg-gradient-to-br from-white via-teal-50/40 to-white shadow-lg">
              <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
                <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-teal-800">Our Motive</h3>
                  <div className="text-xs text-teal-800 font-bold">Dedicated to regional patient well-being</div>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#2d435e]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-teal-900">Solving Health Challenges Across Nigeria & West Africa:</strong> Contributing to better access to healthcare across the region.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-teal-900">Accurate Diagnosis & Prompt Treatment:</strong> Emphasizing accurate diagnosis and timely treatment for every patient.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-teal-900">Healthcare Optimization in West Africa:</strong> Supporting the improvement of healthcare delivery across the region.</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Activity,
  MapPin,
  BadgeCheck,
  Plane,
  Stethoscope,
} from 'lucide-react';
import { HOSPITAL_STATS } from '../data/cairoHospitalData';
import { RevealReadyContext } from './ScrollReveal';

interface HeroProps {
  onOpenWhatsAppBooking: () => void;
  onExploreServices: () => void;
  onExploreTourism: () => void;
}

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */
const SPECIALTIES = [
  'Orthopedic Surgery',
  'Orthobiologics',
  'Physiotherapy',
  '24/7 Emergency Care',
  'Medical Tourism',
];

const TRUST_PARTNERS = [
  'United Nations',
  'African Union',
  'UNICEF',
  'NNPC',
  'NHIS Accredited',
  'FCDA Licensed',
  'Alexandria Pharmacy Ltd.',
];

/* ------------------------------------------------------------------ */
/*  Hooks                                                              */
/* ------------------------------------------------------------------ */
const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
};

const useInView = <T extends Element>(threshold = 0.3) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
};

const useAbujaTime = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Africa/Lagos',
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
};

/* ------------------------------------------------------------------ */
/*  Small components                                                   */
/* ------------------------------------------------------------------ */
const CountUp: React.FC<{ value: string; start: boolean; reduced: boolean }> = ({
  value,
  start,
  reduced,
}) => {
  const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!match || !start) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const raw = match[2];
    const target = parseFloat(raw.replace(/,/g, ''));
    const decimals = (raw.split('.')[1] || '').length;
    const useGrouping = raw.includes(',');
    const duration = 1800;
    const t0 = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      const current = (target * eased).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping,
      });
      setDisplay(`${match[1]}${current}${match[3]}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, value, reduced]);

  return <>{display}</>;
};

const RotatingSpecialty: React.FC<{ reduced: boolean }> = ({ reduced }) => {
  const [index, setIndex] = useState(0);
  const len = SPECIALTIES.length;

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % len), 2600);
    return () => clearInterval(id);
  }, [reduced, len]);

  return (
    <>
      <span className="sr-only">{SPECIALTIES.join(', ')}</span>
      <span aria-hidden="true" className="relative inline-grid overflow-hidden align-bottom h-[1.45em]">
        {SPECIALTIES.map((word, i) => {
          const state =
            i === index
              ? 'translate-y-0 opacity-100 blur-0'
              : i === (index - 1 + len) % len
              ? '-translate-y-full opacity-0 blur-sm'
              : 'translate-y-full opacity-0 blur-sm';
          return (
            <span
              key={word}
              className={`col-start-1 row-start-1 whitespace-nowrap font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-sky-400 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${state}`}
            >
              {word}
            </span>
          );
        })}
      </span>
    </>
  );
};

const EcgLine: React.FC<{ className?: string }> = ({ className = '' }) => {
  const d =
    'M0 30 H70 L80 30 L88 12 L96 48 L104 4 L112 40 L120 30 H210 L220 30 L228 14 L236 46 L244 6 L252 38 L260 30 H350 L360 30 L368 12 L376 48 L384 4 L392 40 L400 30';
  return (
    <svg viewBox="0 0 400 52" preserveAspectRatio="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ch-ecg-grad" x1="0" x2="1">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="rgba(56,189,248,0.15)" strokeWidth="1.5" />
      <path
        d={d}
        fill="none"
        stroke="url(#ch-ecg-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ch-ecg-trace"
        style={{ filter: 'drop-shadow(0 0 6px rgba(56,189,248,.8))' }}
      />
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
export const Hero: React.FC<HeroProps> = ({
  onOpenWhatsAppBooking,
  onExploreServices,
  onExploreTourism,
}) => {
  const isReady = useContext(RevealReadyContext);
  const reduced = useReducedMotion();
  const abujaTime = useAbujaTime();
  const sectionRef = useRef<HTMLElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>(0.2);
  const statsShouldReveal = statsInView && isReady;

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy handled gracefully
      });
    }
  }, []);

  const handleSectionMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced || !sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    sectionRef.current.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !tiltRef.current) return;
    const r = tiltRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    tiltRef.current.style.transform = `perspective(1200px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg)`;
  };

  const resetTilt = () => {
    if (tiltRef.current) tiltRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  };

  const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleSectionMove}
      aria-labelledby="hero-heading"
      className="contrast-dark hero-shell relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28"
    >
      <style>{HERO_CSS}</style>

      {/* ---------- Background Video & Seamless Visual Layers ---------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
          className="w-full h-full object-cover opacity-40 filter contrast-105 brightness-95"
        >
          <source
            src="https://res.cloudinary.com/dvikey3wc/video/upload/v1792926627/6998173-hd_1080_1920_25fps_abd3nd.mp4"
            type="video/mp4"
          />
        </video>
        {/* Soft transparent overlays blending video smoothly into the navy background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061a33]/70 via-transparent to-[#061a33]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a33]/60 via-transparent to-[#013777]/50" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(6, 26, 51, 0.65) 100%)',
          }}
        />
      </div>

      <div className="ambient-glow-navy top-10 -left-20" aria-hidden="true" />
      <div className="ambient-glow-cyan top-40 -right-20" aria-hidden="true" />
      <div aria-hidden="true" className="ch-orb absolute -top-32 left-1/3 w-[28rem] h-[28rem] rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="ch-orb absolute bottom-0 -right-24 w-[24rem] h-[24rem] rounded-full bg-teal-400/10 blur-3xl pointer-events-none" style={{ animationDelay: '-6s' }} />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
      />
      {/* Cursor spotlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(650px circle at var(--mx, 70%) var(--my, 30%), rgba(56,189,248,0.09), transparent 45%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* =================== LEFT: Message =================== */}
          <div className="lg:col-span-7 space-y-7">
            {/* Kicker */}
            <div className="ch-reveal flex flex-wrap items-center gap-2" style={delay(0)}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fdc33e]/15 border border-[#fdc33e]/40 text-xs font-bold text-[#fdc33e]">
                <BadgeCheck className="w-3.5 h-3.5 text-[#fdc33e]" aria-hidden="true" />
                NHIS Accredited
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-xs font-semibold text-sky-200">
                <span className="relative flex w-2 h-2">
                  <span className="ch-ring absolute inset-0 rounded-full bg-emerald-400" />
                  <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
                </span>
                Egyptian medical heritage since 1971 · Abuja since 2019
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="ch-reveal text-[2.4rem] leading-[1.08] sm:text-6xl lg:text-[4.25rem] font-black text-white tracking-tight"
              style={delay(120)}
            >
              Exemplary Healthcare
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-blue-400 ch-gradient-text">
                From Cairo to Abuja
              </span>
            </h1>

            {/* Rotating specialty line */}
            <p className="ch-reveal flex flex-wrap items-baseline gap-x-2 text-lg sm:text-2xl text-slate-200 font-medium" style={delay(240)}>
              <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-teal-300 self-center" aria-hidden="true" />
              <span>International excellence in</span>
              <RotatingSpecialty reduced={reduced} />
            </p>

            {/* Description */}
            <p className="ch-reveal text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed" style={delay(340)}>
              Abuja's multi-specialty referral centre, founded by dedicated Egyptian medical
              professionals and trusted by international organisations for advanced orthopaedics,
              rehabilitation and coordinated care abroad.
            </p>

            {/* CTAs */}
            <div className="ch-reveal flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-1" style={delay(460)}>
              <button
                onClick={onOpenWhatsAppBooking}
                className="group relative overflow-hidden ch-shimmer inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-base shadow-[0_10px_40px_-10px_rgba(16,185,129,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgba(16,185,129,0.85)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                <span>Book via WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </button>

              <button
                onClick={onExploreServices}
                className="hero-explore group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl glass-panel border border-white/15 text-white font-bold text-base transition-all duration-300 hover:bg-white/10 hover:border-sky-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
              >
                <Activity className="w-4 h-4 text-sky-400 transition-transform group-hover:scale-110" aria-hidden="true" />
                <span>Explore Specialties</span>
              </button>
            </div>

            {/* Trust marquee */}
            <div className="ch-reveal pt-3" style={delay(660)}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
                Trusted & enrolled by
              </p>
              <div className="ch-marquee-wrap relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
                <ul className="ch-marquee flex w-max gap-3">
                  {[...TRUST_PARTNERS, ...TRUST_PARTNERS].map((p, i) => (
                    <li
                      key={`${p}-${i}`}
                      aria-hidden={i >= TRUST_PARTNERS.length}
                      className="flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-semibold text-slate-200"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* =================== RIGHT: Visual =================== */}
          <div className="lg:col-span-5 relative ch-reveal" style={delay(300)}>
            <div
              ref={tiltRef}
              onMouseMove={handleTiltMove}
              onMouseLeave={resetTilt}
              className="relative transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d]"
            >
              {/* Rotating light border */}
              <div className="ch-conic relative rounded-[1.75rem] p-[1.5px] shadow-[0_30px_80px_-20px_rgba(14,165,233,0.45)]">
                <div className="relative z-10 rounded-[1.7rem] overflow-hidden bg-slate-950">
                  <div className="relative h-[22rem] sm:h-[26rem]">
                    <img
                      src="/images/facility/building-2026.jpg"
                      alt="Cairo Hospital & Rehabilitation Centre campus in Garki 2, Abuja"
                      width={800}
                      height={1000}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover scale-105 transition-transform duration-[2000ms] hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10" />
                    {/* scanning light */}
                    <div aria-hidden="true" className="ch-scan absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-transparent via-sky-300/10 to-transparent" />

                    {/* Live status */}
                    {abujaTime && (
                      <div className="absolute top-4 right-4 flex items-center justify-end">
                        <div className="px-3 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/10 text-xs font-mono text-sky-300">
                          Abuja {abujaTime} WAT
                        </div>
                      </div>
                    )}

                    {/* Bottom caption + ECG */}
                    <div className="photo-caption absolute bottom-0 inset-x-0 p-5 text-white">
                      <EcgLine className="w-full h-10 mb-2" />
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-300 uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        Garki 2 · Federal Capital Territory
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                        Cairo Hospital & Rehabilitation Centre
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">On-site medical team available around the clock</p>
                    </div>
                  </div>

                  {/* Action tile */}
                  <div className="bg-white/10 border-t border-white/10">
                    <button
                      onClick={onExploreTourism}
                      className="w-full group p-4 flex items-center justify-between text-left bg-slate-950 hover:bg-sky-500/10 transition-colors focus-visible:outline-none focus-visible:bg-sky-500/10 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center shrink-0">
                          <Plane className="w-5 h-5 text-sky-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Medical Tourism Office</div>
                          <div className="text-xs text-slate-400">Referrals & Specialized Care Abroad · Egypt · UK · UAE · USA</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =================== Stats =================== */}
        <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {HOSPITAL_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`hero-stat-card group relative overflow-hidden glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 transition-all duration-500 hover:border-sky-400/40 hover:-translate-y-1 ${
                statsShouldReveal ? 'ch-reveal' : 'opacity-0'
              }`}
              style={delay(idx * 120)}
            >
              <div aria-hidden="true" className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-sky-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div aria-hidden="true" className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
              <div className="hero-stat-value text-3xl sm:text-5xl font-black tabular-nums">
                <CountUp value={String(stat.value)} start={statsShouldReveal} reduced={reduced} />
              </div>
              <div className="hero-stat-label mt-2 text-sm sm:text-base font-bold text-[#092545]">{stat.label}</div>
              <div className="hero-stat-sublabel text-xs sm:text-sm font-medium text-[#475569]">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Scoped animation CSS (move to index.css if preferred)              */
/* ------------------------------------------------------------------ */
const HERO_CSS = `
@keyframes ch-fade-up { from { opacity: 0; transform: translateY(28px); filter: blur(8px); } to { opacity: 1; transform: none; filter: blur(0); } }
.ch-reveal { opacity: 0; animation: ch-fade-up .9s cubic-bezier(.22,1,.36,1) forwards; }

@keyframes ch-float { 0%,100% { translate: 0 0; } 50% { translate: 0 -12px; } }
.ch-float { animation: ch-float 6s ease-in-out infinite; }
.ch-float-delayed { animation: ch-float 7s ease-in-out 1.5s infinite; }

@keyframes ch-ecg { from { stroke-dashoffset: 1100; } to { stroke-dashoffset: 0; } }
.ch-ecg-trace { stroke-dasharray: 160 940; animation: ch-ecg 3.2s linear infinite; }

@keyframes ch-shimmer { from { transform: translateX(-150%) skewX(-20deg); } to { transform: translateX(350%) skewX(-20deg); } }
.ch-shimmer::after { content: ''; position: absolute; inset: 0; width: 35%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent); animation: ch-shimmer 3.8s ease-in-out infinite; pointer-events: none; }

@keyframes ch-heartbeat { 0%,100% { transform: scale(1); } 14% { transform: scale(1.22); } 28% { transform: scale(1); } 42% { transform: scale(1.14); } 70% { transform: scale(1); } }
.ch-heartbeat { animation: ch-heartbeat 1.5s ease-in-out infinite; }

@keyframes ch-ring { 0% { transform: scale(.9); opacity: .75; } 100% { transform: scale(2); opacity: 0; } }
.ch-ring { animation: ch-ring 2s cubic-bezier(0,0,.2,1) infinite; }

@keyframes ch-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.ch-marquee { animation: ch-marquee 32s linear infinite; }
.ch-marquee-wrap:hover .ch-marquee { animation-play-state: paused; }

@keyframes ch-gradient-pan { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
.ch-gradient-text { background-size: 200% auto; animation: ch-gradient-pan 6s ease-in-out infinite; }

@keyframes ch-orb { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(40px,-30px) scale(1.1); } 66% { transform: translate(-30px,20px) scale(.95); } }
.ch-orb { animation: ch-orb 18s ease-in-out infinite; }

@keyframes ch-scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(500%); } }
.ch-scan { animation: ch-scan 6s ease-in-out infinite; }

@keyframes ch-spin { to { transform: rotate(360deg); } }
.ch-conic { overflow: hidden; background: rgba(255,255,255,.08); }
.ch-conic::before { content: ''; position: absolute; inset: -60%; background: conic-gradient(from 0deg, transparent 0 65%, #38bdf8 78%, #2dd4bf 88%, transparent 100%); animation: ch-spin 7s linear infinite; }

@media (prefers-reduced-motion: reduce) {
  .ch-reveal, .ch-float, .ch-float-delayed, .ch-ecg-trace, .ch-heartbeat, .ch-ring,
  .ch-marquee, .ch-gradient-text, .ch-orb, .ch-scan, .ch-conic::before {
    animation: none !important; opacity: 1 !important; filter: none !important; translate: none !important;
  }
  .ch-shimmer::after { display: none; }
  .ch-ecg-trace { stroke-dasharray: none; }
}
`;

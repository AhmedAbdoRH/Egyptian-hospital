import React, { useState } from 'react';
import {
  Dna,
  Zap,
  Bone,
  CheckCircle,
  MessageCircle,
  Activity,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { ORTHOBIOLOGICS_DATA } from '../data/cairoHospitalData';

interface OrthobiologicsHighlightProps {
  onOpenWhatsAppBooking: () => void;
}

export const OrthobiologicsHighlight: React.FC<OrthobiologicsHighlightProps> = ({
  onOpenWhatsAppBooking,
}) => {
  const [selectedProcIndex, setSelectedProcIndex] = useState(0);
  const activeProc = ORTHOBIOLOGICS_DATA[selectedProcIndex];

  return (
    <section id="orthobiologics" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="ambient-glow-navy top-20 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
            <Dna className="w-4 h-4 text-[#013777]" />
            <span>Pioneering Regenerative Orthopedics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
            Orthobiologics & BEMER Therapy
          </h2>
          <p className="text-sm sm:text-base text-[#2d435e] leading-relaxed">
            Leading the paradigm shift from invasive joint replacement to biological joint preservation. Cairo Hospital offers cutting-edge Stem Cell Therapy, Prolotherapy, PRP, and BMAC under Senior Egyptian Orthopedic Surgeons.
          </p>
        </div>

        {/* Orthopedic Surgeries Banner */}
        <div className="glass-panel-dark p-6 sm:p-8 rounded-3xl border border-sky-400/40 shadow-xl bg-gradient-to-r from-[#012f66] via-[#013777] to-[#08284d]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-wider">
                <Bone className="w-4 h-4" />
                <span>Specialized Surgical Division</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Orthopedic Surgeries & Joint Arthroplasty
              </h3>
            </div>
            <button
              onClick={onOpenWhatsAppBooking}
              className="glass-button-whatsapp px-5 py-3 rounded-xl text-white font-extrabold text-xs inline-flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consult Chief Surgeon on WhatsApp</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1">
              <div className="text-sm font-black text-white">Arthroplasty</div>
              <div className="text-xs text-sky-100">Total knee & hip joint reconstruction</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1">
              <div className="text-sm font-black text-white">Hand Surgeries</div>
              <div className="text-xs text-sky-100">Carpal tunnel, tendon repair & microsurgery</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1">
              <div className="text-sm font-black text-white">Foot & Ankle</div>
              <div className="text-xs text-sky-100">Deformity correction & ankle stabilization</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1">
              <div className="text-sm font-black text-white">External Fixation</div>
              <div className="text-xs text-sky-100">Complex fracture union & realignment</div>
            </div>
          </div>
        </div>

        {/* Orthobiologics Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Procedure Navigation Selector */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-2">
              Select Regenerative Modality:
            </div>
            {ORTHOBIOLOGICS_DATA.map((proc, idx) => (
              <button
                key={proc.abbr}
                onClick={() => setSelectedProcIndex(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer border ${
                  selectedProcIndex === idx
                    ? 'bg-white border-[#013777] shadow-lg ring-2 ring-[#013777]/20 scale-102'
                    : 'glass-panel border-white/80 text-[#2d435e] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#013777]">
                    {proc.abbr}
                  </span>
                  <span className="text-[10px] text-emerald-700 font-bold px-2 py-0.5 rounded-md bg-emerald-50">
                    Non-Surgical
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-black text-[#092545] mt-1">
                  {proc.title}
                </h4>
              </button>
            ))}

            {/* BEMER Highlight Card */}
            <div className="p-5 rounded-2xl glass-panel border border-amber-300 bg-amber-50/60 mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>BEMER Physical Vascular Therapy</span>
              </div>
              <p className="text-xs text-[#2d435e] leading-relaxed">
                Bio-Electro-Magnetic Energy Regulation technology stimulates microcirculation in capillary vessels, accelerating post-injury cellular repair and mobility.
              </p>
            </div>
          </div>

          {/* Procedure Detail & Clinical Photo Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/80 shadow-xl space-y-6 bg-white/90">
              {/* Clinical procedure image from presentation */}
              <div className="relative h-60 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <img
                  src="/images/facility/prolotherapy.png"
                  alt="Prolotherapy Injections at Cairo Hospital"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012654] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-4 right-4 text-white flex items-end justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                      Clinical In-House Procedure
                    </div>
                    <h3 className="text-base sm:text-lg font-bold">
                      {activeProc.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-200 border border-sky-400/40">
                    {activeProc.abbr}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#2d435e] leading-relaxed">
                {activeProc.description}
              </p>

              {/* Indications & Benefits Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs font-black text-[#013777] uppercase tracking-wider">
                    Target Indications
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#334155]">
                    {activeProc.indications.map((ind, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0b5599] flex-shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 space-y-2">
                  <div className="text-xs font-black text-teal-800 uppercase tracking-wider">
                    Clinical Benefits
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#334155]">
                    {activeProc.benefits.map((ben, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-700 flex-shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <div className="text-xs text-[#64748b]">
                  Outpatient Procedure · Zero Hospital Stay
                </div>
                <button
                  onClick={onOpenWhatsAppBooking}
                  className="glass-button-whatsapp px-5 py-2.5 rounded-xl text-white font-bold text-xs inline-flex items-center gap-2 hover:scale-105 transition-all cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

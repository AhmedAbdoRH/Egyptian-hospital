import React from 'react';
import {
  Dna,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Reveal } from './ScrollReveal';

interface OrthobiologicsHighlightProps {
  onOpenWhatsAppBooking: () => void;
  onNavigateServices?: () => void;
}

export const OrthobiologicsHighlight: React.FC<OrthobiologicsHighlightProps> = ({
  onOpenWhatsAppBooking,
  onNavigateServices,
}) => {
  const highlightProcedures = [
    'Stem Cell Therapy for joint regeneration',
    'Platelet-Rich Plasma (PRP) injections',
    'Bone Marrow Aspirate Concentrate (BMAC)',
    'BEMER Therapy for enhanced microcirculation',
  ];

  return (
    <section id="orthobiologics" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-navy top-20 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
              <Dna className="w-4 h-4 text-[#013777]" />
              <span>Regenerative Medicine Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
              Orthobiologics & Stem Cell Therapy
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              Advanced regenerative treatments using stem cells, PRP, and biologics for musculoskeletal conditions, sports medicine, and spinal care.
            </p>
          </div>
        </Reveal>

        {/* Highlight Banner Card */}
        <Reveal variant="scale">
          <div className="contrast-dark glass-panel-dark p-8 sm:p-10 rounded-3xl border border-teal-400/40 shadow-xl bg-gradient-to-r from-[#012f66] via-[#013777] to-[#08284d]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black !text-white leading-tight">
                  Cutting-Edge Regenerative Care
                </h3>
                <p className="text-sm !text-teal-200 font-semibold">
                  Stem-cell based therapies for joint & tissue repair
                </p>
              </div>
            </div>

            {/* 4 Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {highlightProcedures.map((proc, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 !text-teal-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm !text-white font-medium leading-snug">{proc}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
              {onNavigateServices && (
                <button
                  onClick={onNavigateServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 !text-white font-bold text-sm hover:bg-white/20 transition-all group cursor-pointer"
                >
                  <span>Learn About Orthobiologics</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
              <button
                onClick={onOpenWhatsAppBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 !text-white font-bold text-sm transition-all shadow-lg shadow-teal-500/30 cursor-pointer"
              >
                <Dna className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

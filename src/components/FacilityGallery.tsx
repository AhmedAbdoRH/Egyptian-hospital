import React, { useEffect, useState } from 'react';
import { Building2, X } from 'lucide-react';
import { FACILITY_GALLERY } from '../data/cairoHospitalData';
import { HospitalFacilityItem } from '../types/hospital';
import { Reveal } from './ScrollReveal';

// Curated photo collage: one large feature tile plus two smaller ones stacked beside it.
// 2 columns on mobile, 3 columns from md up — both layouts fill the grid with no gaps.
const COLLAGE_TILES = [
  'col-span-2 row-span-2 md:col-span-2 md:row-span-2',
  'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
  'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
];

// Keep faces in frame when a portrait photo is cropped into a square tile.
const COLLAGE_FOCUS = ['object-center', 'object-top', 'object-center'];

export const FacilityGallery: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<HospitalFacilityItem | null>(null);

  useEffect(() => {
    if (!selectedFacility) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedFacility(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedFacility]);

  return (
    <section id="facilities" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-cyan bottom-10 right-10 pointer-events-none" />
      <div className="ambient-glow-navy top-10 left-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-14">
        {/* Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#013777]" />
              <span>People & Clinical Practice</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
              Images from the Hospital Profile
            </h2>
            <p className="text-sm sm:text-base text-[#2d435e] leading-relaxed">
              These photographs were extracted from the supplied Cairo Hospital profile. They show hospital representatives, the team, and the clinical scope featured in the profile; they are not a facilities or equipment inventory.
            </p>
          </div>
        </Reveal>

        {/* Photo Collage */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[210px]">
          {FACILITY_GALLERY.map((item, idx) => (
            <Reveal
              key={item.id}
              variant="scale"
              delay={(idx % 3) * 80}
              className={COLLAGE_TILES[idx] ?? 'col-span-1 row-span-1'}
            >
              <button
                type="button"
                onClick={() => setSelectedFacility(item)}
                aria-label={`Enlarge photo: ${item.title}`}
                className="group relative block w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 ring-1 ring-slate-200/70 shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-[#013777]/50"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={`w-full h-full object-cover ${
                    COLLAGE_FOCUS[idx] ?? 'object-center'
                  } transition-transform duration-700 ease-out group-hover:scale-105`}
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#012654]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox: photo only, no captions or info */}
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
              className="w-full max-h-[82vh] object-contain rounded-2xl sm:rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

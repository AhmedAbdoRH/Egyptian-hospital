import React, { useState } from 'react';
import {
  Building2,
  X,
  Maximize2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { FACILITY_GALLERY } from '../data/cairoHospitalData';
import { HospitalFacilityItem } from '../types/hospital';

export const FacilityGallery: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<HospitalFacilityItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Facility', 'Surgical', 'Rehabilitation', 'Inpatient', 'Emergency'];

  const filteredItems = FACILITY_GALLERY.filter((item) => {
    if (filterCategory === 'All') return true;
    return item.category === filterCategory;
  });

  return (
    <section id="facilities" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-cyan bottom-10 right-10 pointer-events-none" />
      <div className="ambient-glow-navy top-10 left-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-[#013777]" />
            <span>Campus & Clinical Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
            Our Hospital Facilities & Advanced Equipment
          </h2>
          <p className="text-sm sm:text-base text-[#2d435e] leading-relaxed">
            Take a visual tour inside Cairo Hospital and Cairo Rehabilitation Centre (CRC) in Garki 2, Abuja. Modern operating suites, private inpatient recovery rooms, physical therapy gyms, digital imaging, and rapid emergency units.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 text-xs font-bold scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                filterCategory === cat
                  ? 'bg-[#013777] text-white font-black shadow-md shadow-[#013777]/25 scale-105'
                  : 'bg-white/80 border border-slate-200 text-[#2d435e] hover:text-[#013777] hover:bg-white shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedFacility(item)}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-200/90 group cursor-pointer glass-panel-hover flex flex-col justify-between bg-white/90 shadow-sm"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012654]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <span className="absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded-lg bg-white/95 text-[#013777] border border-slate-200 shadow-xs">
                  {item.category}
                </span>
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#013777] opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4.5 space-y-1.5">
                <h4 className="text-sm font-black text-[#092545] group-hover:text-[#013777] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#2d435e] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#011633]/70 backdrop-blur-md">
          <div className="relative max-w-4xl w-full rounded-3xl border border-slate-200 overflow-hidden shadow-2xl space-y-4 p-6 sm:p-7 bg-white text-[#2d435e]">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-black text-[#013777] uppercase tracking-wider">
                  {selectedFacility.category}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#092545] mt-0.5">
                  {selectedFacility.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedFacility(null)}
                className="p-2 text-slate-400 hover:text-slate-800 rounded-xl bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#2d435e] leading-relaxed">
              {selectedFacility.description}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
              <span className="font-semibold text-[#013777]">16 Oke Agbe Street, Garki 2, Abuja</span>
              <button
                onClick={() => setSelectedFacility(null)}
                className="px-5 py-2.5 rounded-xl bg-[#013777] text-white font-bold cursor-pointer hover:bg-[#0b5599] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

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
    <section id="facilities" className="py-24 relative overflow-hidden bg-slate-950 border-t border-white/10">
      <div className="ambient-glow-cyan bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-sky-400" />
            <span>Campus & Clinical Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Hospital Facilities & Equipment
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Take a visual tour inside Cairo Hospital and Cairo Rehabilitation Centre (CRC) in Abuja. Modern operating suites, private recovery rooms, physical therapy gyms, and rapid emergency units.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 text-xs font-bold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                filterCategory === cat
                  ? 'bg-sky-500 text-slate-950 font-black shadow-lg shadow-sky-500/25'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-white/10'
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
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 group cursor-pointer glass-panel-hover flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-md glass-panel text-sky-300 border border-white/20">
                  {item.category}
                </span>
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full glass-panel rounded-3xl border border-white/20 overflow-hidden shadow-2xl space-y-4 p-6 bg-slate-900/95">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  {selectedFacility.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {selectedFacility.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedFacility(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-white/10">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300">
              {selectedFacility.description}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400">
              <span>16 Oke Agbe Street, Garki 2, Abuja</span>
              <button
                onClick={() => setSelectedFacility(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold cursor-pointer"
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

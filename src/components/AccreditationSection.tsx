import React from 'react';
import { ShieldCheck, Award, Globe, Building2, CheckCircle2 } from 'lucide-react';
import { ACCREDITATIONS_DATA } from '../data/cairoHospitalData';

export const AccreditationSection: React.FC = () => {
  const accreditedBy = ACCREDITATIONS_DATA.filter((a) => a.type === 'accreditation');
  const enrolledOrgs = ACCREDITATIONS_DATA.filter((a) => a.type === 'enrolled');

  return (
    <section className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-navy top-10 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdc33e]/15 border border-[#fdc33e]/40 text-xs font-bold text-[#8c6000] uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#b87c08]" />
            <span>Official Recognition & Regulatory Trust</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
            Accreditations & Enrolled Global Organizations
          </h2>
          <p className="text-xs sm:text-sm text-[#2d435e]">
            Cairo Hospital meets rigorous national regulatory health standards and is the medical partner of choice for diplomatic missions, global organizations, and international corporate groups in Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Accredited By */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-5 bg-white/90 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#013777] border border-sky-100 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#013777]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#092545]">Accredited By</h3>
                <div className="text-xs text-[#013777] font-bold">National Healthcare Authorities</div>
              </div>
            </div>

            <div className="space-y-3">
              {accreditedBy.map((acc, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-1"
                >
                  <div className="text-sm font-black text-[#013777] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{acc.name}</span>
                  </div>
                  <p className="text-xs text-[#2d435e] pl-6 leading-relaxed">
                    {acc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Enrolled Organizations */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-5 bg-white/90 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center">
                <Globe className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#092545]">Enrolled Organizations</h3>
                <div className="text-xs text-teal-700 font-bold">International Agencies & Public Sector</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {enrolledOrgs.map((org, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-1"
                >
                  <div className="text-sm font-black text-[#013777] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span>{org.name}</span>
                  </div>
                  <p className="text-[11px] text-[#2d435e] pl-6 leading-relaxed">
                    {org.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

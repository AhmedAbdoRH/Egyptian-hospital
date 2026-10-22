import React from 'react';
import { ShieldCheck, Award, Globe, Building2, CheckCircle2 } from 'lucide-react';
import { ACCREDITATIONS_DATA } from '../data/cairoHospitalData';

export const AccreditationSection: React.FC = () => {
  const accreditedBy = ACCREDITATIONS_DATA.filter((a) => a.type === 'accreditation');
  const enrolledOrgs = ACCREDITATIONS_DATA.filter((a) => a.type === 'enrolled');

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Award className="w-4 h-4 text-sky-400" />
            <span>Official Recognition</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Accreditations & Enrolled Organizations
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Cairo Hospital meets rigorous national regulatory health standards and is the medical partner of choice for diplomatic missions and global organizations in Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Accredited By */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-sky-500/20 space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Accredited By</h3>
                <div className="text-xs text-sky-400">National Healthcare Authorities</div>
              </div>
            </div>

            <div className="space-y-3">
              {accreditedBy.map((acc, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1"
                >
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{acc.name}</span>
                  </div>
                  <p className="text-xs text-slate-300 pl-6">
                    {acc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Enrolled Organizations */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-teal-500/20 space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Enrolled Organizations</h3>
                <div className="text-xs text-teal-300">International Agencies & Public Sector</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {enrolledOrgs.map((org, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1"
                >
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>{org.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 pl-6 leading-relaxed">
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

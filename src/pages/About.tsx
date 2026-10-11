import React from 'react';
import { MetaTags } from '../components/MetaTags';
import { Breadcrumb } from '../components/Breadcrumb';
import { HOSPITAL_INFO, MILESTONES, ACHIEVEMENTS } from '../data/hospitalData';
import { Award, ShieldCheck, Heart, Sparkles, Building2, CheckCircle2, UserCheck, Stethoscope, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
      <MetaTags
        title="About Us - Hospital Journey & History Since 1998"
        description="Learn about Ezhil Hospital & Fertility Centre's journey from 1998, founded by Dr. Senthilvadivu in Dharmapuri. Discover our milestones, facilities, multispeciality surgical care, and fertility treatment legacy."
        canonicalPath="/about"
      />

      <div className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} />

          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-[#B51B83] px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Established 4th June 1998</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#1538B8] tracking-tight">
              About Ezhil Hospital & Fertility Centre
            </h1>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Our Journey of Care, Commitment & Growth in Dharmapuri. Dedicated to compassionate healthcare, advanced fertility care, and patient trust for over 25 years.
            </p>
          </div>

          {/* Founder Section */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-pink-100 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-extrabold text-[#B51B83] uppercase tracking-wider">
                  Leadership & Vision
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1538B8]">
                  Founder of Ezhil Hospital
                </h2>
                <div className="text-xl font-bold text-[#B51B83]">
                  {HOSPITAL_INFO.founder}
                </div>
                <p className="text-slate-600 text-base leading-relaxed">
                  The vision and dedication of our founder, <strong>{HOSPITAL_INFO.founder}</strong>, have been the foundation of Ezhil Hospital's journey since 1998. From a small clinic to an expanding multispeciality healthcare centre and fertility care facility, the institution continues to move forward with a commitment to quality healthcare and patient well-being.
                </p>
                <div className="p-4 bg-pink-50 rounded-2xl border-l-4 border-[#B51B83] text-sm text-[#30323A] font-semibold italic">
                  "Our Promise: Your Trust. Our Teamwork. Better Healthcare."
                </div>
              </div>

              <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-lg border border-pink-200 group">
                <img
                  src="/images/maternity-care.jpg"
                  alt="Compassionate Maternity and Patient Care at Ezhil Hospital"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="w-10 h-10 rounded-full bg-[#B51B83] text-white flex items-center justify-center font-black text-sm mb-2 shadow-md">
                    EH
                  </div>
                  <h3 className="font-extrabold text-white text-base">25+ Years of Care</h3>
                  <p className="text-xs text-pink-200 mt-0.5">Providing ethical, compassionate medical care in Dharmapuri since 1998.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Timeline Milestones */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-[#1538B8] mb-2">
                Our Journey & Milestones
              </h2>
              <p className="text-slate-600 text-sm">
                Tracing our growth from a small clinic in 1998 to a modern fertility & multispeciality hospital.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {MILESTONES.map((milestone, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:border-pink-300 transition-all flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-[#B51B83] text-white px-4 py-2 rounded-xl font-extrabold text-sm flex-shrink-0 shadow-sm">
                    {milestone.year}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#1538B8]">{milestone.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Medical & Surgical Services Offered */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 mb-16 space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-extrabold text-[#B51B83] uppercase tracking-wider bg-pink-100 px-3 py-1 rounded-full">
                Surgical & Clinical Expertise
              </span>
              <h2 className="text-3xl font-extrabold text-[#1538B8]">
                Multispeciality Medical & Surgical Care
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                In addition to our dedicated fertility centre, Ezhil Hospital provides comprehensive general, laparoscopic, gynaecological, and oncological surgical procedures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-[#1538B8] text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#B51B83]" />
                  <span>24-Hour Maternity</span>
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  24-hour maternity services, sterilisation procedures, normal & caesarean delivery care with newborn support.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-[#1538B8] text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#B51B83]" />
                  <span>General Surgery</span>
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Surgical repair for conditions such as hernia, appendicitis, and general abdominal surgical procedures.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-[#1538B8] text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#B51B83]" />
                  <span>Laparoscopic Hysterectomy</span>
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Minimally invasive laparoscopic hysterectomy, diagnostic laparoscopy, and hysteroscopy for infertility evaluation.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-[#1538B8] text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#B51B83]" />
                  <span>Oncology Surgeries</span>
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Advanced surgical care for breast cancer, cervical cancer, and uterine cancers, along with thyroidectomy procedures.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-[#1538B8] text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#B51B83]" />
                  <span>Infertility & Seed Bank</span>
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Supported by a dedicated seed bank offering Ovulation Induction, IUI, IVF, ICSI, PGD, and ERA analysis.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-[#1538B8] text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#B51B83]" />
                  <span>Diagnostics & Pharmacy</span>
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Senthil Scans ultrasound imaging, in-house laboratory, 24/7 pharmacy, and ECG diagnostic services.
                </p>
              </div>
            </div>
          </div>

          {/* Looking Towards the Future */}
          <div className="bg-gradient-to-r from-[#1538B8] via-[#0E2685] to-[#B51B83] rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-16">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-pink-200">
                <Compass className="w-4 h-4 text-pink-300" />
                <span>Our Vision</span>
              </div>
              <h2 className="text-3xl font-extrabold">Looking Towards the Future</h2>
              <p className="text-blue-100 text-base leading-relaxed">
                Our journey continues to grow like a seed that was planted with a vision and nurtured with dedication, teamwork, and the trust of our patients. We are preparing to introduce specialized services in:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="bg-white/10 p-3 rounded-xl text-center font-bold text-sm">Orthopaedic Surgery</div>
                <div className="bg-white/10 p-3 rounded-xl text-center font-bold text-sm">Eye Care & Surgery</div>
                <div className="bg-white/10 p-3 rounded-xl text-center font-bold text-sm">Cardiac Care</div>
                <div className="bg-white/10 p-3 rounded-xl text-center font-bold text-sm">Neurosurgery</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

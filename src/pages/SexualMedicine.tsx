import React from 'react';
import { MetaTags } from '../components/MetaTags';
import { Breadcrumb } from '../components/Breadcrumb';
import { Shield, CheckCircle2, Activity, Heart, UserCheck, Lock } from 'lucide-react';

export const SexualMedicine: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Male Sexual Health & Sexual Medicine - Confidential Evaluation"
        description="Confidential clinical evaluation for male sexual health concerns at Ezhil Hospital & Fertility Centre, Dharmapuri. Addressing Erectile Dysfunction (ED), premature ejaculation, testosterone, prolactin, and penile Doppler."
        canonicalPath="/sexual-medicine"
      />

      <div className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Male Sexual Health & Sexual Medicine' }]} />

          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#1538B8] px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Confidential Male Health Care</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#1538B8] tracking-tight">
              Male Sexual Health & Sexual Medicine
            </h1>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Comprehensive and confidential evaluation for men experiencing sexual health concerns, hormonal imbalances, and related reproductive difficulties.
            </p>
          </div>

          {/* Confidential Notice Card with Image */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-blue-100 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1538B8] flex items-center justify-center flex-shrink-0 font-bold">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1538B8]">
                    Confidential &amp; Personalised Care
                  </h2>
                </div>
                <p className="text-slate-600 text-base leading-relaxed">
                  Sexual health can have an important impact on physical well-being, confidence, relationships, and quality of life. At <strong>Ezhil Hospital &amp; Fertility Centre</strong>, we provide a respectful, confidential, and supportive environment where patients can discuss their concerns openly and receive evidence-based medical evaluation.
                </p>
                <div className="p-3 bg-blue-50 rounded-xl text-xs font-semibold text-[#1538B8] border-l-4 border-[#1538B8]">
                  All consultations and investigations are conducted under strict medical confidentiality.
                </div>
              </div>

              <div className="lg:col-span-5 h-64 lg:h-full min-h-[260px] relative overflow-hidden group">
                <img
                  src="/images/sexual-medicine.jpg"
                  alt="Confidential Male Sexual Health Consultation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Private &amp; Dignified</span>
                  <p className="text-xs font-semibold text-white">Specialized clinical evaluation and personalized therapies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Medical Topics Grid */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 mb-12 space-y-10">
            <div>
              <h2 className="text-2xl font-extrabold text-[#1538B8] mb-4">
                Common Male Sexual Health Concerns Evaluated
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Erectile Dysfunction (ED)</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Premature Ejaculation</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Delayed or Difficult Ejaculation</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Reduced Sexual Desire</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Orgasm-Related Problems</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Penile Curvature / Peyronie's</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Genital or Sexual Pain</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Testosterone Deficiency</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">High Prolactin Levels</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Thyroid-Related Sexual Problems</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Diabetes & Metabolic Factors</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Medication-Induced Concerns</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Post-Cancer Treatment Care</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Pelvic & Perineal Injury</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Venous Leak & Vascular Factors</span>
                </div>
              </div>
            </div>

            {/* Deep Breakdown of ED & Evaluation */}
            <div className="border-t border-slate-200 pt-8 space-y-6">
              <h3 className="text-xl font-bold text-[#1538B8]">
                Evaluation of Erectile Dysfunction (ED) & Vascular Factors
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                ED may be associated with vascular conditions, diabetes, blood pressure, hormonal abnormalities, or previous perineal pressure/injury. Diagnostic evaluation at our hospital may include medical history, physical examination, hormone assays (Testosterone, Prolactin, TSH), metabolic screening, and <strong>Penile Doppler ultrasound assessment</strong> when clinically indicated.
              </p>

              <div className="p-5 bg-blue-50/70 rounded-2xl border border-blue-200 text-xs text-slate-700 space-y-2">
                <strong className="text-[#1538B8] font-bold block text-sm">Cycling & Perineal Pressure Notice:</strong>
                Long-duration cycling with an improperly fitted bicycle saddle can place pressure on the perineal nerves and blood vessels, leading to temporary numbness. Proper fit, saddle padding, and regular breaks are recommended. If numbness or erectile difficulties persist, medical evaluation is advised.
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

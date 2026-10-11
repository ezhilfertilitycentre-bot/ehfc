import React from 'react';
import { MetaTags } from '../components/MetaTags';
import { Breadcrumb } from '../components/Breadcrumb';
import { Activity, Microscope, CheckCircle2, User, Heart, AlertCircle } from 'lucide-react';

export const FertilityEvaluation: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Fertility Evaluation & Diagnostic Tests - Male & Female Testing"
        description="Comprehensive fertility diagnostic testing at Ezhil Hospital & Fertility Centre, Dharmapuri. Male semen analysis (count, motility, morphology) and female evaluation (AMH, hormone panel, pelvic ultrasound, HSG)."
        canonicalPath="/fertility-evaluation"
      />

      <div className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Fertility Evaluation & Diagnostic Tests' }]} />

          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-[#B51B83] px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>Evidence-Based Diagnostics</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#1538B8] tracking-tight">
              Fertility Evaluation & Diagnostic Tests
            </h1>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Fertility evaluation helps identify possible factors affecting conception in both men and women. Appropriate tests are recommended based on the couple's medical history and clinical needs.
            </p>
          </div>

          {/* Diagnostic Spotlight Banner with Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-pink-100 mb-10 group">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center bg-white">
              <div className="md:col-span-5 h-56 sm:h-64 md:h-full min-h-[220px] relative overflow-hidden">
                <img
                  src="/images/fertility-evaluation.jpg"
                  alt="Fertility Evaluation and Ultrasound Imaging at Ezhil Hospital"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
                <span className="text-xs font-bold text-[#B51B83] uppercase tracking-wider bg-pink-50 px-3 py-1 rounded-full">
                  Advanced Diagnostics & Senthil Scans
                </span>
                <h2 className="text-2xl font-extrabold text-[#1538B8]">
                  Precision Fertility Testing & Imaging
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our hospital is equipped with high-resolution pelvic ultrasound, in-house laboratory hormone profiling, and dedicated semen analysis facilities to accurately assess reproductive health for both partners.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Male Evaluation Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 space-y-6">
              <div className="flex items-center gap-3 border-b border-blue-200 pb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1538B8] flex items-center justify-center font-bold">
                  <Microscope className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-[#1538B8]">
                    Male Fertility Evaluation
                  </h2>
                  <p className="text-xs text-slate-500">Initial diagnostic investigation for male reproductive health.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 border-l-4 border-[#1538B8] pl-3">
                  Semen Analysis
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Semen analysis is one of the most important initial tests for evaluating male fertility. It assesses key parameters required for natural or assisted fertilisation:
                </p>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-3 bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-[#1538B8] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-sm font-bold block">Sperm Count</strong>
                      <span className="text-xs text-slate-600">Measures total number of sperm present in the ejaculate sample.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-[#1538B8] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-sm font-bold block">Motility</strong>
                      <span className="text-xs text-slate-600">Evaluates the percentage of sperm capable of moving forward effectively.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-[#1538B8] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-sm font-bold block">Morphology</strong>
                      <span className="text-xs text-slate-600">Assesses the size, head shape, and structural integrity of sperm cells.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-[#1538B8] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-sm font-bold block">Semen Characteristics</strong>
                      <span className="text-xs text-slate-600">Evaluates volume, pH level, liquefaction time, and presence of white blood cells.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Female Evaluation Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 space-y-6">
              <div className="flex items-center gap-3 border-b border-pink-200 pb-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 text-[#B51B83] flex items-center justify-center font-bold">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-[#B51B83]">
                    Female Fertility Evaluation
                  </h2>
                  <p className="text-xs text-slate-500">Diagnostic investigations for ovulation, hormones, and organs.</p>
                </div>
              </div>

              <div className="space-y-3">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 bg-pink-50/60 p-3.5 rounded-xl border border-pink-100">
                    <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-sm font-bold block">Ovulation Assessment</strong>
                      <span className="text-xs text-slate-600">Monitoring cycles and follicular tracking to confirm egg release.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-pink-50/60 p-3.5 rounded-xl border border-pink-100">
                    <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-sm font-bold block">Hormonal Profile Tests</strong>
                      <span className="text-xs text-slate-600">Testing FSH, LH, Estradiol, Progesterone, AMH (Anti-Müllerian Hormone), and Prolactin.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-pink-50/60 p-3.5 rounded-xl border border-pink-100">
                    <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-sm font-bold block">Ultrasound Scan (Senthil Scans)</strong>
                      <span className="text-xs text-slate-600">Pelvic ultrasound to evaluate ovarian reserve, antral follicle count, and uterine lining.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 bg-pink-50/60 p-3.5 rounded-xl border border-pink-100">
                    <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 text-sm font-bold block">HSG (Hysterosalpingography)</strong>
                      <span className="text-xs text-slate-600">X-ray dye procedure to check uterine cavity shape and ensure fallopian tubes are open.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Personalised Fertility Assessment Box */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-pink-100 mb-12">
            <h2 className="text-2xl font-bold text-[#1538B8] mb-3 flex items-center gap-2">
              <Heart className="w-6 h-6 text-[#B51B83]" />
              <span>Personalised Fertility Assessment</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Every couple's fertility journey is different. Our fertility specialists evaluate both partners together and recommend only the investigations that are clinically appropriate for their individual situation.
            </p>
            <div className="p-4 bg-blue-50 rounded-2xl border-l-4 border-[#1538B8] text-sm text-[#1538B8] font-bold">
              Understand the Cause. Explore Your Options. Take the Next Step.
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

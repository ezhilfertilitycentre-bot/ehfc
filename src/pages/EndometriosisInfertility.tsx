import React from 'react';
import { MetaTags } from '../components/MetaTags';
import { Breadcrumb } from '../components/Breadcrumb';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { Stethoscope, CheckCircle2, Heart, ShieldAlert, Sparkles } from 'lucide-react';

export const EndometriosisInfertility: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Endometriosis & Infertility - Symptoms, Diagnosis & Treatment"
        description="Learn about Endometriosis and its impact on fertility at Ezhil Hospital & Fertility Centre, Dharmapuri. Comprehensive diagnosis, pelvic pain management, laparoscopic surgery, and tailored fertility care."
        canonicalPath="/endometriosis-infertility"
      />

      <div className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Endometriosis & Infertility' }]} />

          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-[#B51B83] px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Stethoscope className="w-4 h-4" />
              <span>Women's Reproductive Health</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#1538B8] tracking-tight">
              Endometriosis & Infertility
            </h1>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Understanding Endometriosis, its effects on pelvic organs, and specialized fertility management at Ezhil Hospital & Fertility Centre.
            </p>
          </div>

          {/* Detailed Content Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 mb-12 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1538B8] mb-4">
                What is Endometriosis?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Endometriosis is a common gynaecological condition that can affect women during their reproductive years. It occurs when tissue similar to the lining of the uterus (endometrium) grows outside the uterus, commonly involving areas such as the ovaries, fallopian tubes, and other tissues within the pelvis.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                The condition may be associated with chronic inflammation, scar tissue formation, and pelvic adhesions. Depending on its location and severity, endometriosis can cause symptoms such as <strong>severe pelvic pain, painful periods, pain during intercourse, and difficulties with fertility.</strong>
              </p>
            </div>

            {/* Impact on Fertility */}
            <div className="bg-pink-50/70 p-6 rounded-2xl border border-pink-200">
              <h3 className="text-xl font-bold text-[#B51B83] mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>How Endometriosis Affects Fertility</span>
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Endometriosis can affect fertility by causing anatomical distortion, pelvic adhesions, tubal blockages, or inflammatory changes in the pelvic fluid that interfere with egg quality, fertilisation, or embryo implantation.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                The impact on fertility varies from person to person depending on factors such as the stage of endometriosis, ovarian reserve, fallopian tube condition, and individual reproductive goals.
              </p>
            </div>

            {/* Diagnosis & Treatment Approaches */}
            <div>
              <h3 className="text-xl font-bold text-[#1538B8] mb-4">
                Diagnosis & Individualised Evaluation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                At Ezhil Hospital & Fertility Centre, women experiencing pelvic pain or difficulty conceiving undergo thorough gynaecological and fertility evaluation. Depending on your symptoms, our specialists may recommend:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700">
                    <strong className="block text-slate-900 font-bold">Detailed Medical History</strong>
                    Evaluating menstrual cycles, pain patterns, and previous treatments.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700">
                    <strong className="block text-slate-900 font-bold">Gynaecological Ultrasound</strong>
                    Imaging via Senthil Scans to check for endometriomas (chocolate cysts).
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700">
                    <strong className="block text-slate-900 font-bold">Diagnostic Laparoscopy</strong>
                    Minimally invasive keyhole visualization to assess pelvic adhesions and tubal patency.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700">
                    <strong className="block text-slate-900 font-bold">Fertility Management</strong>
                    Medical symptom control or assisted reproductive options (IUI, IVF) based on needs.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call To Action Banner */}
          <CallToActionBanner
            title="Suffer From Severe Period Pain or Pelvic Discomfort?"
            subtitle="Consult our experienced gynaecologists and fertility specialists at Ezhil Hospital for compassionate, confidential evaluation."
          />
        </div>
      </div>
    </>
  );
};

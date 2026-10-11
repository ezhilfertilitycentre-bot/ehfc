import React from 'react';
import { MetaTags } from '../components/MetaTags';
import { Breadcrumb } from '../components/Breadcrumb';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { Smile, CheckCircle2, Heart, Shield, Sparkles } from 'lucide-react';

export const CosmeticGynaecology: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Cosmetic Gynaecology - Women's Intimate Health & Wellness"
        description="Personalised and discreet intimate wellness care at Ezhil Hospital & Fertility Centre, Dharmapuri. Addressing urinary leakage, vaginal laxity, dryness, post-childbirth changes, and minimally invasive options."
        canonicalPath="/cosmetic-gynaecology"
      />

      <div className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Cosmetic Gynaecology' }]} />

          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-[#B51B83] px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Smile className="w-4 h-4" />
              <span>Intimate Wellness & Rejuvenation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#1538B8] tracking-tight">
              Cosmetic Gynaecology
            </h1>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Personalised care for women's intimate health, wellness, and post-childbirth comfort in a private, respectful, and supportive clinical environment.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 mb-12 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1538B8] mb-4">
                Personalised Care for Women's Intimate Wellness
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                A woman's body naturally changes through different stages of life. Childbirth, hormonal changes, ageing, and other physical factors may sometimes lead to concerns such as urinary leakage, vaginal laxity, dryness, recurrent infections, or changes in sexual comfort.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                These concerns can affect physical comfort, confidence, intimate relationships, and overall quality of life. At <strong>Ezhil Hospital & Fertility Centre</strong>, we provide discreet clinical evaluation and appropriate treatment options tailored to each woman's individual needs.
              </p>
            </div>

            {/* Conditions We Help Evaluate */}
            <div className="bg-pink-50/60 rounded-2xl p-6 border border-pink-200">
              <h3 className="text-xl font-bold text-[#B51B83] mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Conditions We Can Help Evaluate</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-pink-100 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Urinary Leakage</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-pink-100 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Vaginal Laxity</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-pink-100 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Vaginal Dryness</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-pink-100 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Recurrent Infections</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-pink-100 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Sexual Discomfort</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-pink-100 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Desire Changes</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-pink-100 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Pelvic Health Concerns</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-pink-100 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B51B83] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Post-Childbirth Changes</span>
                </div>
              </div>
            </div>

            {/* Treatment Options */}
            <div>
              <h3 className="text-xl font-bold text-[#1538B8] mb-3">
                Personalised & Minimally Invasive Treatment Options
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Depending on the condition, appropriate minimally invasive or outpatient treatment options may be considered. Treatment is planned based on symptoms, medical history, and clinical evaluation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                  <div className="font-bold text-[#1538B8] text-sm mb-1">Laser Vaginal Rejuvenation</div>
                  <div className="text-xs text-slate-500">Non-surgical thermal tissue toning & collagen stimulation.</div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                  <div className="font-bold text-[#1538B8] text-sm mb-1">G-Shot Therapy</div>
                  <div className="text-xs text-slate-500">Outpatient intimate enhancement protocol.</div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                  <div className="font-bold text-[#1538B8] text-sm mb-1">O-Shot Therapy</div>
                  <div className="text-xs text-slate-500">PRP-based tissue revitalization procedure.</div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                  <div className="font-bold text-[#1538B8] text-sm mb-1">Breast Enhancement</div>
                  <div className="text-xs text-slate-500">Clinical aesthetic consultation and management.</div>
                </div>
              </div>
            </div>

            {/* Respectful Environment Guarantee */}
            <div className="bg-blue-50/70 rounded-2xl p-6 border border-blue-200 flex items-start gap-4">
              <Shield className="w-6 h-6 text-[#1538B8] flex-shrink-0 mt-1" />
              <div>
                <strong className="text-[#1538B8] font-bold block text-base mb-1">Your Comfort Matters</strong>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  We understand that intimate health concerns can be difficult to discuss. Our team provides a private, respectful, and supportive environment where women can openly discuss their concerns and receive appropriate medical guidance.
                </p>
                <div className="mt-2 text-xs font-bold text-[#B51B83]">
                  Your Well-being. Your Confidence. Your Care.
                </div>
              </div>
            </div>
          </div>

          {/* Call To Action Banner */}
          <CallToActionBanner />
        </div>
      </div>
    </>
  );
};

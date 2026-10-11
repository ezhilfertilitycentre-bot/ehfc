import React from 'react';
import { Link } from 'react-router-dom';
import { MetaTags } from '../components/MetaTags';
import { Breadcrumb } from '../components/Breadcrumb';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { FEMALE_INFERTILITY_CAUSES, MALE_INFERTILITY_CAUSES } from '../data/hospitalData';
import { HelpCircle, User, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export const CausesOfInfertility: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Causes of Infertility - Female & Male Fertility Factors"
        description="Detailed guide on female and male causes of infertility from Ezhil Hospital & Fertility Centre. Learn about PCOS, ovulatory dysfunction, semen quality, azoospermia, varicocele, and unexplained infertility."
        canonicalPath="/causes-of-infertility"
      />

      <div className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Causes of Infertility' }]} />

          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-[#B51B83] px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Medical Education & Guidance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#1538B8] tracking-tight">
              Causes of Infertility
            </h1>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              Understanding the possible factors affecting fertility in both men and women. Infertility can involve female factors, male factors, or a combination of both.
            </p>
          </div>

          {/* Intro Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-pink-100 mb-12">
            <h2 className="text-2xl font-bold text-[#1538B8] mb-3">
              Understanding the Possible Causes of Infertility
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Infertility can affect both men and women, and in some couples, more than one factor may contribute to difficulty in achieving pregnancy. A detailed medical history, clinical evaluation, and appropriate fertility investigations can help identify the possible cause. At <strong>Ezhil Hospital & Fertility Centre</strong>, we evaluate both partners to understand their individual needs and develop a personalized treatment approach.
            </p>
          </div>

          {/* Female Causes Section */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 mb-12">
            <div className="flex items-center gap-3 border-b border-pink-200 pb-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-pink-100 text-[#B51B83] flex items-center justify-center font-bold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#B51B83]">
                  Female Causes of Infertility
                </h2>
                <p className="text-xs text-slate-500">Factors affecting ovulation, egg quality, hormonal balance, or reproductive organs.</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Ovulatory Dysfunction */}
              <div className="p-6 bg-pink-50/50 rounded-2xl border border-pink-100">
                <h3 className="text-xl font-bold text-[#1538B8] mb-2">1. Ovulatory Dysfunction</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  Regular ovulation is important for natural conception. Problems with ovulation can result in irregular periods or difficulty releasing an egg. Common factors associated with ovulatory problems include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B51B83]" /> Polycystic Ovary Syndrome (PCOS)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B51B83]" /> Hormonal Imbalance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B51B83]" /> Thyroid Disorders</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B51B83]" /> Elevated Prolactin Levels</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B51B83]" /> Significant Weight Changes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B51B83]" /> Physical or Emotional Stress</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B51B83]" /> Reduced Ovarian Reserve</li>
                </ul>
              </div>

              {/* PCOS */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-[#1538B8] mb-2">2. PCOS (Polycystic Ovary Syndrome)</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  PCOS is a common hormonal condition that can affect menstrual cycles and ovulation. Some women with PCOS may experience irregular periods, acne, increased hair growth, or difficulty conceiving. With appropriate evaluation and treatment, ovulation and fertility can be managed according to individual needs.
                </p>
              </div>

              {/* Ovarian Reserve & Age */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-[#1538B8] mb-2">3. Ovarian Reserve & Age-Related Changes</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  As a woman gets older, ovarian reserve and egg quality may gradually change. This can influence the chances of natural conception and may also affect fertility treatment outcomes. Tests such as AMH, FSH, Estradiol, and ultrasound assessment may be recommended to evaluate ovarian reserve.
                </p>
              </div>

              {/* Thyroid & Prolactin */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-[#1538B8] mb-2">4. Thyroid & Prolactin Disorders</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Thyroid abnormalities and elevated prolactin levels can sometimes interfere with normal ovulation and menstrual cycles. Appropriate blood tests help identify these hormonal conditions, which can then be managed accordingly.
                </p>
              </div>

              {/* Endometriosis */}
              <div className="p-6 bg-pink-50/50 rounded-2xl border border-pink-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[#1538B8] mb-2">5. Endometriosis</h3>
                    <p className="text-slate-700 text-sm leading-relaxed mb-3">
                      Endometriosis occurs when tissue similar to the uterine lining grows outside the uterus. It may affect the ovaries, fallopian tubes, and pelvic tissues, contributing to pelvic pain and difficulty conceiving.
                    </p>
                  </div>
                </div>
                <Link to="/endometriosis-infertility" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B51B83] hover:underline uppercase tracking-wider">
                  <span>Read Detailed Endometriosis Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Male Causes Section */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 mb-12">
            <div className="flex items-center gap-3 border-b border-blue-200 pb-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1538B8] flex items-center justify-center font-bold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1538B8]">
                  Male Causes of Infertility
                </h2>
                <p className="text-xs text-slate-500">Problems involving sperm production, movement, structure, or reproductive tract blockages.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-[#1538B8] text-base mb-1">Reduced Sperm Quality</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Evaluated via initial semen analysis assessing sperm count, motility (movement ability), morphology (shape), and semen fluid characteristics.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-[#1538B8] text-base mb-1">Azoospermia</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Refers to the absence of sperm in the semen sample due to sperm production failure or blockages in the male reproductive tract.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-[#1538B8] text-base mb-1">Low Sperm Count & Motility</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Reduced sperm concentration or impaired swimming motility makes it more difficult for sperm to reach and fertilize the egg.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-[#1538B8] text-base mb-1">Varicocele</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Enlarged veins around the testicle that can elevate scrotal temperature and reduce sperm quality or production.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-[#1538B8] text-base mb-1">Hormonal & Blockages</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Abnormalities in FSH, LH, or Testosterone, reproductive tract blockages, or retrograde ejaculation.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-[#1538B8] text-base mb-1">Genetic & Congenital Factors</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Chromosomal or congenital variations affecting testicular development or sperm production.
                </p>
              </div>
            </div>
          </div>

          {/* Joint Factors & Unexplained Infertility */}
          <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 rounded-3xl p-8 sm:p-10 border border-pink-200 shadow-md mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#1538B8] flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-[#B51B83]" />
                  <span>When Both Partners Are Involved</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  In many couples, fertility difficulties are related to factors affecting both partners. Evaluating only one partner may not provide a complete picture. A comprehensive assessment of both partners helps guide effective care.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1538B8] flex items-center gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-[#B51B83]" />
                  <span>Unexplained Infertility</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sometimes, even after thorough testing, a specific cause may not be identified. Even in unexplained infertility, specialists can discuss effective treatment options based on age, duration, and clinical history.
                </p>
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

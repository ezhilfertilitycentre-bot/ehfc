import React from 'react';
import { Link } from 'react-router-dom';
import { MetaTags } from '../components/MetaTags';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES } from '../data/hospitalData';
import { Sparkles, ShieldCheck, Heart, AlertCircle, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Fertility & Infertility Services - IVF, IUI, ICSI, PGD, ERA"
        description="Comprehensive fertility treatment options at Ezhil Fertility Centre, Dharmapuri. Offering Infertility Consultation, Ovulation Induction, IUI, IVF, ICSI, PGD, ERA, and seed bank services."
        canonicalPath="/services"
      />

      <div className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Fertility Services' }]} />

          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-[#B51B83] px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Advanced Reproductive Technology</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#1538B8] tracking-tight">
              Fertility & Infertility Services
            </h1>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              At Ezhil Hospital & Fertility Centre, we offer a comprehensive range of fertility evaluation and treatment options tailored to each couple's individual requirements.
            </p>
          </div>

          {/* Clinical Disclaimer Box */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-2xl p-5 mb-12 text-amber-900 text-sm flex items-start gap-3 shadow-sm">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block mb-1">Ethical & Honest Medical Guidance:</strong>
              Every couple's fertility journey is unique. Treatment decisions are based on clinical evidence, age factors, and detailed diagnostics. We do not promise guaranteed pregnancy or treatment success.
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service) => (
              <div key={service.id} id={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Deep Dive Feature Sections */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 mb-16 space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1538B8] mb-4">
                Assisted Reproductive Technology (ART) Overview
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Our fertility centre introduced dedicated assisted reproductive services in 2021, supported by an in-house seed bank and advanced laboratory equipment. Over 200 IVF procedures have been conducted with successful singleton and twin pregnancies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-pink-50/70 rounded-2xl border border-pink-200">
                  <h3 className="font-bold text-[#B51B83] text-lg mb-2">In Vitro Fertilisation (IVF)</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Involves controlled ovarian stimulation, monitoring egg maturation, retrieval under ultrasound guidance, fertilisation in our embryology lab, and transfer of selected blastocysts.
                  </p>
                  <Link to="/contact" className="text-xs font-bold text-[#B51B83] uppercase tracking-wider hover:underline inline-flex items-center gap-1">
                    <span>Inquire About IVF</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="p-6 bg-blue-50/70 rounded-2xl border border-blue-200">
                  <h3 className="font-bold text-[#1538B8] text-lg mb-2">Intracytoplasmic Sperm Injection (ICSI)</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    A high-precision micromanipulation technique where a single high-quality sperm cell is injected directly into the cytoplasm of an egg. Particularly effective for severe male factor infertility.
                  </p>
                  <Link to="/contact" className="text-xs font-bold text-[#1538B8] uppercase tracking-wider hover:underline inline-flex items-center gap-1">
                    <span>Inquire About ICSI</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-xl font-bold text-[#1538B8] mb-4">
                Specialized Diagnostic & Implantation Testing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-1">Preimplantation Genetic Diagnosis (PGD)</strong>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Evaluates embryos for specific chromosomal or genetic conditions before transfer to help select healthy embryos.
                  </p>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-1">Endometrial Receptivity Analysis (ERA)</strong>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Determines the personalized window of implantation for women experiencing recurrent implantation failure.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

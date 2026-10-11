import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Award, Users, Activity, Sparkles, Phone, ArrowRight, CheckCircle2, Clock, MapPin, Building, ChevronRight } from 'lucide-react';
import { MetaTags } from '../components/MetaTags';
import { ServiceCard } from '../components/ServiceCard';
import { AppointmentForm } from '../components/AppointmentForm';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { HOSPITAL_INFO, SERVICES, ACHIEVEMENTS } from '../data/hospitalData';

export const Home: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Best Fertility & Multispeciality Care in Dharmapuri"
        description="Welcome to Ezhil Hospital & Fertility Centre in Dharmapuri. Providing compassionate fertility treatment, IVF, IUI, ICSI, gynaecology, and 24-hour maternity care since 1998."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero pt-8 pb-16 lg:py-20 border-b border-pink-100">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-pink-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-pink-100/80 border border-pink-200 text-[#B51B83] px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-4 h-4 text-[#B51B83]" />
                <span>Trusted Healthcare Destination in Dharmapuri</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1538B8] tracking-tight leading-tight">
                Compassionate Care.<br />
                <span className="text-[#B51B83]">Personalised Treatment.</span>
              </h1>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Welcome to <strong className="text-slate-900 font-bold">Ezhil Hospital & Fertility Centre</strong>. We provide patient-focused healthcare, fertility services and personalised medical guidance to support individuals and families.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#enquiry-form"
                  className="w-full sm:w-auto bg-[#B51B83] hover:bg-[#9B146E] text-white px-8 py-4 rounded-xl font-black text-base shadow-xl hover:shadow-2xl transition-all duration-200 text-center transform hover:-translate-y-0.5"
                >
                  Book an Appointment
                </a>

                <a
                  href={`tel:${HOSPITAL_INFO.actionPhone}`}
                  className="w-full sm:w-auto bg-white border-2 border-[#1538B8] text-[#1538B8] hover:bg-blue-50 px-7 py-3.5 rounded-xl font-extrabold text-base transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {HOSPITAL_INFO.actionPhone}</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-pink-200/60 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-black text-[#1538B8]">1998</div>
                  <div className="text-xs font-semibold text-slate-600">Established Journey</div>
                </div>
                <div className="text-center lg:text-left border-x border-pink-200/60 px-2">
                  <div className="text-2xl font-black text-[#B51B83]">5,000+</div>
                  <div className="text-xs font-semibold text-slate-600">Infertility Cases</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-black text-[#1538B8]">24/7</div>
                  <div className="text-xs font-semibold text-slate-600">Maternity Care</div>
                </div>
              </div>

            </div>

            {/* Right Column: Embedded Appointment Form */}
            <div id="enquiry-form" className="lg:col-span-5">
              <AppointmentForm compact={true} className="shadow-2xl border-2 border-pink-100" />
            </div>

          </div>
        </div>
      </section>

      {/* Hospital Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1538B8] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <Building className="w-3.5 h-3.5" />
                <span>Our Heritage of Excellence</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1538B8] leading-tight">
                Welcome to Ezhil Hospital & Fertility Centre
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                At <strong>Ezhil Hospital & Fertility Centre</strong>, we understand that the journey to parenthood can be deeply personal and challenging. Our aim is to provide compassionate care, personalised treatment and advanced fertility services to help couples move forward with confidence.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                Founded by <strong>{HOSPITAL_INFO.founder}</strong>, our journey began on 4th June 1998 as a small clinic. Over two decades of dedicated care, we expanded into a full-fledged hospital providing comprehensive fertility evaluations, IVF, ICSI, IUI, 24-hour maternity services, and advanced surgical procedures.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[#B51B83] font-extrabold text-base hover:text-[#1538B8] transition-colors group"
                >
                  <span>Explore Our Full Story & History</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 p-8 rounded-3xl border border-pink-100 shadow-xl space-y-6">
                <h3 className="text-xl font-bold text-[#1538B8] flex items-center gap-2 border-b border-pink-200 pb-3">
                  <ShieldCheck className="w-6 h-6 text-[#B51B83]" />
                  <span>Why Families Choose Ezhil</span>
                </h3>

                <ul className="space-y-4 text-slate-700 text-sm font-medium">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 text-[#B51B83] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">1</div>
                    <div>
                      <strong className="text-slate-900 block font-bold">Personalised Treatment Planning</strong>
                      Care tailored to each couple's unique clinical history and reproductive needs.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1538B8] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">2</div>
                    <div>
                      <strong className="text-slate-900 block font-bold">Advanced Fertility Laboratory</strong>
                      Equipped with dedicated seed bank, micromanipulators for ICSI, PGD, and ERA testing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 text-[#B51B83] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">3</div>
                    <div>
                      <strong className="text-slate-900 block font-bold">Comprehensive Women's Healthcare</strong>
                      24-hour maternity care, laparoscopic surgery, cosmetic gynaecology, and male sexual medicine under one roof.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Verified Key Services Cards */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-extrabold text-[#B51B83] uppercase tracking-wider bg-pink-100 px-3 py-1 rounded-full">
              Verified Medical Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1538B8]">
              Our Comprehensive Services
            </h2>
            <p className="text-slate-600 text-base">
              From advanced assisted reproductive technology (IVF, ICSI, IUI) to specialized gynaecological and male health evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#1538B8] hover:bg-[#0E2685] text-white px-8 py-3.5 rounded-xl font-extrabold shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>View All Fertility & Medical Services</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hospital Achievements Counter Section */}
      <section className="py-16 bg-gradient-to-r from-[#1538B8] via-[#0E2685] to-[#B51B83] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-pink-200">
              <Award className="w-4 h-4 text-pink-300" />
              <span>Verified Hospital Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">
              Milestones Built on Trust & Dedicated Care
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {ACHIEVEMENTS.slice(0, 4).map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-3xl sm:text-5xl font-black text-pink-300 mb-2">
                  {item.number}
                </div>
                <div className="text-base font-extrabold text-white mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-blue-100 font-medium">
                  {item.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief Consultant Overview Section (Approved PDF Info - NO standalone Doctors Page) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-extrabold text-[#B51B83] uppercase tracking-wider bg-pink-100 px-3 py-1 rounded-full">
              Clinical Team & Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1538B8]">
              Multispeciality Medical Consultants
            </h2>
            <p className="text-slate-600 text-base">
              Our hospital brings together qualified medical consultants across reproductive medicine, gynaecology, surgery, and general health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-pink-200 transition-colors">
              <div className="w-10 h-10 rounded-full bg-pink-100 text-[#B51B83] flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1538B8] mb-1">Obstetrics & IVF Consultants</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-3">
                Focusing on fertility evaluation, IVF treatment, pregnancy management, and general gynaecological care.
              </p>
              <div className="text-xs font-semibold text-[#B51B83]">
                Including IVF Consultants & Gynaecologists
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-200 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1538B8] flex items-center justify-center font-bold mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1538B8] mb-1">General & Surgical Consultants</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-3">
                Expert surgical care for laparoscopic procedures, appendicitis, hernia, hysterectomy, and oncology care.
              </p>
              <div className="text-xs font-semibold text-[#1538B8]">
                Senior Surgical & Anaesthesia Consultants
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-pink-200 transition-colors">
              <div className="w-10 h-10 rounded-full bg-pink-100 text-[#B51B83] flex items-center justify-center font-bold mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1538B8] mb-1">Specialist Support Care</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-3">
                Paediatric medicine, cardiology evaluation, orthopaedics, ENT, and physical rehabilitation specialists.
              </p>
              <div className="text-xs font-semibold text-[#B51B83]">
                Multispeciality Medical Network
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-extrabold text-[#B51B83] uppercase tracking-wider">
                  Location & Contact
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1538B8]">
                  Serving Families in Dharmapuri & Surrounding Regions
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We are conveniently located in Dharmapuri, providing a clean, calm, and supportive environment for consultation, diagnostics, maternity care, and fertility treatment.
                </p>

                <div className="space-y-3 pt-2 text-sm text-slate-700">
                  <div className="flex items-center gap-3 font-semibold">
                    <MapPin className="w-5 h-5 text-[#B51B83]" />
                    <span>Dharmapuri, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-3 font-semibold">
                    <Phone className="w-5 h-5 text-[#1538B8]" />
                    <span>Call Action Button: <a href={`tel:${HOSPITAL_INFO.actionPhone}`} className="text-[#1538B8] font-bold underline">{HOSPITAL_INFO.actionPhone}</a> / {HOSPITAL_INFO.primaryPhone}</span>
                  </div>
                  <div className="flex items-center gap-3 font-semibold">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <span>24-Hour Emergency & Maternity Services</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
                <Link
                  to="/contact"
                  className="w-full text-center bg-[#B51B83] hover:bg-[#9B146E] text-white py-4 rounded-xl font-extrabold shadow-lg transition-all"
                >
                  Contact & Book Appointment
                </Link>
                <a
                  href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(HOSPITAL_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-extrabold shadow transition-all flex items-center justify-center gap-2"
                >
                  <span>Quick WhatsApp Enquiry</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Global Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CallToActionBanner />
      </div>
    </>
  );
};

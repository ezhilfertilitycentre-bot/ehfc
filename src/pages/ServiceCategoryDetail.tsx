import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MetaTags } from '../components/MetaTags';
import { Breadcrumb } from '../components/Breadcrumb';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { getCategoryBySlug, SERVICE_CATEGORIES } from '../data/servicesData';
import {
  Sparkles,
  ShieldCheck,
  Heart,
  AlertCircle,
  ArrowRight,
  Baby,
  Microscope,
  Activity,
  HeartPulse,
  Stethoscope,
  Pill,
  Syringe,
  Bed,
  Building2,
  Users,
  CheckCircle2,
  Phone,
  Clock,
  Check,
  ChevronLeft,
  Calendar,
  MessageCircle,
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface Props {
  forcedSlug?: string;
}

export const ServiceCategoryDetail: React.FC<Props> = ({ forcedSlug }) => {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const activeSlug = forcedSlug || routeSlug;

  const category = activeSlug ? getCategoryBySlug(activeSlug) : undefined;

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  // Icon mapping
  const renderIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case "Sparkles": return <Sparkles className={className} />;
      case "Heart": return <Heart className={className} />;
      case "Baby": return <Baby className={className} />;
      case "Activity": return <Activity className={className} />;
      case "Users": return <Users className={className} />;
      case "HeartPulse": return <HeartPulse className={className} />;
      case "Microscope": return <Microscope className={className} />;
      case "Building2": return <Building2 className={className} />;
      case "Bed": return <Bed className={className} />;
      case "Pill": return <Pill className={className} />;
      case "Syringe": return <Syringe className={className} />;
      case "Stethoscope": return <Stethoscope className={className} />;
      default: return <Activity className={className} />;
    }
  };

  const relatedCategories = category.relatedCategorySlugs
    .map((s) => getCategoryBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <MetaTags
        title={`${category.title} - Ezhil Hospital & Fertility Centre`}
        description={`${category.shortDesc} Explore full services, clinical procedures, and specialist consultations at Ezhil Hospital, Dharmapuri.`}
        canonicalPath={`/services/${category.slug}`}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1B61] via-[#1538B8] to-[#B51B83] text-white py-14 sm:py-20 border-b border-pink-200">
        {/* Subtle Decorative Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 animate-fade-up">
              <div className="flex flex-wrap items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md text-pink-200 font-black text-sm flex items-center justify-center border border-white/20">
                  {category.number < 10 ? `0${category.number}` : category.number}
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20 text-pink-200">
                  {category.badge}
                </span>
                <span className="text-xs font-semibold text-blue-200 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Dharmapuri, Tamil Nadu</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-md">
                {category.title}
              </h1>

              <p className="text-pink-200 font-semibold text-base sm:text-lg">
                {category.tagline}
              </p>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                {category.shortDesc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#B51B83] hover:bg-[#9B146E] text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Department Appointment</span>
                </Link>

                <a
                  href={`tel:${HOSPITAL_INFO.actionPhone}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-pink-300" />
                  <span>Call {HOSPITAL_INFO.actionPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Showcase: Image or Styled Clinical Card */}
            <div className="lg:col-span-5">
              {category.image ? (
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30 group">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">
                      Ezhil Hospital &amp; Fertility Centre
                    </span>
                    <span className="text-white font-extrabold text-sm sm:text-base mt-0.5">
                      {category.title}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#1538B8] flex items-center justify-center shadow-md">
                    {renderIcon(category.iconName, "w-8 h-8")}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">
                      Clinical Department
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                    Supervised by dedicated medical consultants and registered nurses, committed to quality healthcare and patient well-being in Dharmapuri.
                  </p>
                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs text-pink-200 font-semibold">
                    <span>Clinical Wing {category.number < 10 ? `0${category.number}` : category.number} of 15</span>
                    <span>Confidential Care</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="bg-slate-50/70 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumb & Back Link */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Breadcrumb
              items={[
                { label: 'Services & Specialities', path: '/services' },
                { label: category.title }
              ]}
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#B51B83] hover:text-[#1538B8] transition-colors self-start"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to All 15 Services &amp; Specialities</span>
            </Link>
          </div>

          {/* Department Overview */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-200 space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
              <div className="w-8 h-8 rounded-lg bg-pink-100 text-[#B51B83] flex items-center justify-center">
                {renderIcon(category.iconName, "w-4 h-4")}
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1538B8]">
                Department Overview &amp; Clinical Scope
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              {category.fullOverview.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {category.verificationNote && (
              <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3 mt-4">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Important Clinical Note:</strong>
                  <span>{category.verificationNote}</span>
                </div>
              </div>
            )}
          </div>

          {/* Speciality Deep Guides Callout (Causes of Infertility, Fertility Evaluation, Endometriosis, Cosmetic Gyn, Sexual Med) */}
          {category.clinicalDetailGuides && category.clinicalDetailGuides.length > 0 && (
            <div className="bg-gradient-to-r from-pink-50 via-white to-blue-50 rounded-3xl p-6 sm:p-8 border-2 border-pink-200/80 shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B51B83]" />
                <h3 className="text-lg sm:text-xl font-extrabold text-[#1538B8]">
                  Explore In-Depth Clinical Guides &amp; Educational Resources
                </h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm max-w-3xl">
                We provide comprehensive dedicated medical guides to help patients understand causes, clinical diagnostics, and therapeutic options in detail:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {category.clinicalDetailGuides.map((guide, gIdx) => (
                  <Link
                    key={gIdx}
                    to={guide.path}
                    className="p-5 bg-white rounded-2xl border border-pink-200 hover:border-[#B51B83] shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-1.5 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#B51B83] bg-pink-50 px-2.5 py-0.5 rounded-full inline-block">
                        Clinical Speciality Guide
                      </span>
                      <h4 className="text-base font-extrabold text-[#1538B8] group-hover:text-[#B51B83] transition-colors flex items-center justify-between">
                        <span>{guide.title}</span>
                        <ArrowRight className="w-4 h-4 text-[#B51B83] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {guide.desc}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#B51B83] inline-flex items-center gap-1 group-hover:underline">
                      <span>Read Complete Guide</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Complete Client Service Offerings Grid */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-extrabold text-[#B51B83] uppercase tracking-wider bg-pink-100 px-3 py-1 rounded-full">
                Authoritative Client Inventory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1538B8] mt-2">
                Included Services &amp; Medical Procedures
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Every service item listed under this department at Ezhil Hospital &amp; Fertility Centre:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.services.map((service, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-pink-200 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 text-[#B51B83] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {service.name}
                      </h3>
                      {service.note && (
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {service.note}
                        </p>
                      )}
                    </div>
                  </div>

                  {service.isSubjectToConfirmation && (
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md font-semibold">
                        Consult Doctor
                      </span>
                      <span className="text-slate-400">Subject to schedule</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Department Infrastructure & Clinical Highlights */}
          {category.clinicalHighlights && category.clinicalHighlights.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1538B8]">
                Key Clinical Facilities &amp; Standards
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.clinicalHighlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft space-y-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1538B8] text-white flex items-center justify-center font-bold text-sm">
                      0{hIdx + 1}
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      {highlight.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {highlight.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Departments Wing Navigation */}
          {relatedCategories.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Related Hospital Departments &amp; Specialities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedCategories.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/services/${rel.slug}`}
                    className="p-4 rounded-xl bg-slate-50 hover:bg-pink-50 border border-slate-200 hover:border-pink-200 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#B51B83] uppercase tracking-wider block">
                        Wing 0{rel.number}
                      </span>
                      <span className="text-sm font-bold text-slate-800 group-hover:text-[#1538B8] transition-colors">
                        {rel.title}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#B51B83] group-hover:translate-x-1 transition-transform ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Appointment CTA Banner */}
          <div className="bg-gradient-to-r from-[#1538B8] via-[#0E2685] to-[#B51B83] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-pink-200 mx-auto">
              <ShieldCheck className="w-4 h-4 text-pink-300" />
              <span>Compassionate Healthcare Since 1998</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Have Questions About {category.title}?
            </h2>

            <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our patient coordination desk is available to assist you with appointment bookings, specialist consultation hours, and procedure preparations.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-[#B51B83] hover:bg-[#9B146E] text-white px-8 py-3.5 rounded-xl font-extrabold text-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Book Consultation
              </Link>

              <a
                href={`tel:${HOSPITAL_INFO.actionPhone}`}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-3 rounded-xl font-extrabold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-pink-300" />
                <span>Call {HOSPITAL_INFO.actionPhone}</span>
              </a>

              <a
                href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hello, I would like to enquire about ${category.title} at Ezhil Hospital.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-xl font-extrabold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServiceCategoryDetail;

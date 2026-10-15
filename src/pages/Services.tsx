import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MetaTags } from '../components/MetaTags';
import { Breadcrumb } from '../components/Breadcrumb';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Baby,
  Activity,
  Users,
  HeartPulse,
  Microscope,
  Building2,
  Bed,
  Pill,
  Syringe,
  Stethoscope,
  Filter,
  ArrowRight,
  ChevronRight,
  Phone,
  Clock
} from 'lucide-react';

const DEPARTMENT_TABS = [
  { id: 'all', label: 'All 15 Departments' },
  { id: 'fertility', label: 'Fertility & Reproductive' },
  { id: 'womens', label: "Women's & Maternity" },
  { id: 'surgical', label: 'Surgical & Laparoscopy' },
  { id: 'diagnostics', label: 'Diagnostics, Labs & USG' },
  { id: 'facilities', label: 'Hospital Facilities & Pharmacy' }
];

export const Services: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('all');

  const filteredCategories = selectedTab === 'all'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter((c) => c.departmentGroup === selectedTab);

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

  return (
    <>
      <MetaTags
        title="Services & Specialities Directory - Ezhil Hospital & Fertility Centre"
        description="Explore the complete master directory of all 15 clinical departments at Ezhil Hospital & Fertility Centre, Dharmapuri. Click through to individual pages for IVF, Gynaecology, Maternity, Surgery, Ultrasound, and Facilities."
        canonicalPath="/services"
      />

      {/* Directory Hero Banner */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#0B1B61] via-[#1538B8] to-[#B51B83] text-white border-b border-pink-100">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fertility-hero.jpg"
            alt="Ezhil Hospital & Fertility Centre Services Directory"
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B61]/95 via-[#1538B8]/90 to-[#B51B83]/85" />
          <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-pink-200">
              <Sparkles className="w-4 h-4 text-pink-300" />
              <span>Hospital Master Directory</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-md">
              Services &amp; Specialities
            </h1>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed drop-shadow-sm">
              Discover our 15 dedicated clinical departments. Select any category card below to view its full services list, specialized procedures, and clinical guides.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/90">
              <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                <ShieldCheck className="w-4 h-4 text-pink-300" />
                <span>15 Individual Department Pages</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                <Clock className="w-4 h-4 text-pink-300" />
                <span>24/7 Maternity &amp; Emergency Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Directory Body */}
      <div className="bg-slate-50/70 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services & Specialities Directory' }]} />

          {/* Department Filter Tabs */}
          <div className="my-8 sm:my-10">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-[#B51B83]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#30323A]">
                Filter by Department Wing:
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {DEPARTMENT_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs ${
                    selectedTab === tab.id
                      ? 'bg-[#B51B83] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:text-[#1538B8] hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 15 Individual Department Directory Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <div
                key={category.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-200/80 hover:border-pink-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Visual Header */}
                  {category.image ? (
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                        <span className="text-xs font-bold text-pink-200">
                          {category.badge}
                        </span>
                      </div>
                      <span className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md text-[#B51B83] font-black text-xs flex items-center justify-center shadow-md">
                        {category.number < 10 ? `0${category.number}` : category.number}
                      </span>
                    </div>
                  ) : (
                    <div className="h-48 w-full bg-gradient-to-br from-[#0B1B61] via-[#1538B8] to-[#B51B83] border-b border-slate-100 p-5 flex flex-col justify-between relative text-white">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white text-[#1538B8] flex items-center justify-center shadow-md">
                          {renderIcon(category.iconName, "w-5 h-5")}
                        </div>
                        <span className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md text-pink-200 font-black text-xs flex items-center justify-center">
                          {category.number < 10 ? `0${category.number}` : category.number}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-pink-200 uppercase tracking-wider bg-white/15 px-2.5 py-0.5 rounded-full inline-block mb-1">
                          {category.badge}
                        </span>
                        <div className="text-xs font-bold text-white line-clamp-1">
                          {category.customVisualTitle || category.title}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <h2 className="text-xl font-extrabold text-[#1538B8] group-hover:text-[#B51B83] transition-colors leading-snug">
                      <Link to={`/services/${category.slug}`}>
                        {category.title}
                      </Link>
                    </h2>

                    <p className="text-xs font-semibold text-[#B51B83]">
                      {category.tagline}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {category.shortDesc}
                    </p>

                    {/* Preview of Services */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Included Clinical Offerings ({category.services.length}):
                      </span>
                      <ul className="text-xs text-slate-700 space-y-1">
                        {category.services.slice(0, 3).map((s, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B51B83] flex-shrink-0" />
                            <span className="truncate">{s.name}</span>
                          </li>
                        ))}
                        {category.services.length > 3 && (
                          <li className="text-[11px] font-bold text-[#1538B8] pt-0.5">
                            +{category.services.length - 3} more services on dedicated page...
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/services/${category.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 hover:bg-[#B51B83] text-[#1538B8] hover:text-white font-extrabold text-xs uppercase tracking-wider border border-slate-200/80 hover:border-[#B51B83] shadow-2xs hover:shadow-md transition-all duration-200 group/btn"
                  >
                    <span>Explore Department Page</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Directory Enquiry & Consultation CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#1538B8] via-[#0E2685] to-[#B51B83] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-pink-200 mx-auto">
              <ShieldCheck className="w-4 h-4 text-pink-300" />
              <span>Comprehensive Healthcare in Dharmapuri</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Looking for a Specific Medical Procedure or Doctor Opinion?
            </h2>

            <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our patient reception desk is available to assist you with specialty clinic schedules, diagnostic appointments, and consultation bookings.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-[#B51B83] hover:bg-[#9B146E] text-white px-8 py-3.5 rounded-xl font-extrabold text-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Contact &amp; Book Appointment
              </Link>

              <a
                href={`tel:${HOSPITAL_INFO.actionPhone}`}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-3 rounded-xl font-extrabold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-pink-300" />
                <span>Call {HOSPITAL_INFO.actionPhone}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;

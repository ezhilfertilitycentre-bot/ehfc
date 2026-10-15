import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MetaTags } from '../components/MetaTags';
import { Breadcrumb } from '../components/Breadcrumb';
import { HOSPITAL_INFO } from '../data/hospitalData';
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
  Filter,
  Check,
  ChevronDown
} from 'lucide-react';

interface ServiceCategory {
  id: string;
  number: number;
  title: string;
  departmentGroup: 'fertility' | 'womens' | 'surgical' | 'diagnostics' | 'facilities';
  tagline: string;
  description: string;
  image?: string;
  icon: React.ReactNode;
  badge: string;
  services: {
    name: string;
    note?: string;
    isSubjectToConfirmation?: boolean;
  }[];
  verificationNote?: string;
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "fertility-ivf",
    number: 1,
    title: "Fertility & IVF Services",
    departmentGroup: "fertility",
    tagline: "Advanced Assisted Reproductive Technology & Individualized Care",
    description: "Our dedicated fertility wing provides compassionate, evidence-based reproductive care supported by state-of-the-art laboratory facilities, micromanipulation systems, and individualized treatment roadmaps.",
    image: "/images/ivf-treatment.jpg",
    icon: <Sparkles className="w-5 h-5" />,
    badge: "Dedicated Fertility Wing",
    services: [
      { name: "Infertility Evaluation & Consultation" },
      { name: "IUI (Intrauterine Insemination)" },
      { name: "IVF (In Vitro Fertilization)" },
      { name: "ICSI (Intracytoplasmic Sperm Injection)" },
      { name: "Male & Female Infertility Assessment" },
      { name: "PCOS / PCOD-Related Fertility Care" },
      { name: "Infertility Profile Testing" }
    ]
  },
  {
    id: "gynaecology-womens-health",
    number: 2,
    title: "Gynaecology & Women's Health",
    departmentGroup: "womens",
    tagline: "Comprehensive Clinical & Surgical Care Across All Stages of Life",
    description: "Offering preventive, diagnostic, and therapeutic gynaecological services with a strong focus on minimally invasive procedures, menstrual irregularities, and hormonal harmony.",
    image: "/images/endometriosis.jpg",
    icon: <Heart className="w-5 h-5" />,
    badge: "Women's Health",
    services: [
      { name: "Gynaecology Consultation" },
      { name: "Hysteroscopy" },
      { name: "Hysterectomy" },
      { name: "Laparoscopic Gynaecological Surgery" },
      { name: "Menstrual & Hormonal Health" },
      { name: "Family Planning Counselling" }
    ]
  },
  {
    id: "obstetrics-maternity",
    number: 3,
    title: "Obstetrics & Maternity Care",
    departmentGroup: "womens",
    tagline: "Compassionate Maternal Supervision from Conception to Delivery",
    description: "Dedicated maternity care providing continuous fetal monitoring, regular antenatal assessments, clean labour suites, and warm postnatal recovery support for mothers and newborns.",
    image: "/images/maternity-care.jpg",
    icon: <Baby className="w-5 h-5" />,
    badge: "Maternity & Delivery Care",
    services: [
      { name: "Pregnancy Consultation" },
      { name: "Antenatal Care" },
      { name: "Labour & Delivery Care" },
      { name: "Postnatal Care" }
    ]
  },
  {
    id: "general-laparoscopic-surgery",
    number: 4,
    title: "General & Laparoscopic Surgical Services",
    departmentGroup: "surgical",
    tagline: "Minimally Invasive Precision Surgery with Faster Recovery",
    description: "Senior surgical consultants perform modern laparoscopic and general surgical procedures with advanced electronic instrumentation and strict sterile protocols.",
    image: "/images/surgical-care.jpg",
    icon: <Activity className="w-5 h-5" />,
    badge: "Advanced Laparoscopy",
    services: [
      { name: "General Surgery" },
      { name: "Laparoscopic Appendectomy" },
      { name: "Hysterectomy" },
      { name: "Cyst Removal Surgery" },
      { name: "Laparoscopic Cholecystectomy" },
      { name: "Sterilisation Procedures" },
      { name: "Post-operative Care" }
    ]
  },
  {
    id: "family-planning-sterilisation",
    number: 5,
    title: "Family Planning & Sterilisation",
    departmentGroup: "surgical",
    tagline: "Informed, Confidential Reproductive Health Guidance",
    description: "Confidential reproductive counselling and safe surgical family planning options tailored to individual health, family goals, and informed patient decision-making.",
    image: "/images/consultation.jpg",
    icon: <Users className="w-5 h-5" />,
    badge: "Confidential Care",
    services: [
      { name: "Family Planning Counselling" },
      { name: "Male Sterilisation (Vasectomy)", note: "Provided following clinical evaluation & eligibility confirmation", isSubjectToConfirmation: true },
      { name: "Female Sterilisation (Tubectomy)", note: "Provided following clinical evaluation & eligibility confirmation", isSubjectToConfirmation: true }
    ],
    verificationNote: "All sterilisation and family planning procedures are performed following formal clinical review, informed consent, and hospital documentation protocols."
  },
  {
    id: "cardiology-services",
    number: 6,
    title: "Cardiology Services",
    departmentGroup: "diagnostics",
    tagline: "Cardiovascular Health Evaluations & Diagnostics",
    description: "Outpatient cardiac evaluations, pre-operative cardiac fitness reviews, and routine electrocardiogram diagnostics for patients with hypertension, lifestyle, or cardiac concerns.",
    icon: <HeartPulse className="w-5 h-5" />,
    badge: "Cardiac Care",
    services: [
      { name: "Cardiology Consultation" },
      { name: "24-Hour ECG Services / Monitoring", note: "Facility availability confirmed based on duty schedule", isSubjectToConfirmation: true },
      { name: "Cardiology Specialist Opinion Available", note: "Consultations scheduled on specialist review basis", isSubjectToConfirmation: true }
    ],
    verificationNote: "Continuous monitoring availability and specialist consultation dates are confirmed with hospital reception."
  },
  {
    id: "paediatrics-neonatal",
    number: 7,
    title: "Paediatrics & Neonatal Care",
    departmentGroup: "womens",
    tagline: "Gentle Medical Supervision for Newborns & Growing Children",
    description: "Pediatric care focused on healthy development, newborn assessments, phototherapy for physiological jaundice, and routine childhood clinical consultations.",
    image: "/images/maternity-care.jpg",
    icon: <Baby className="w-5 h-5" />,
    badge: "Pediatric Care",
    services: [
      { name: "Paediatrics Department" },
      { name: "Senior Medical Officer Care" },
      { name: "24/7 Medical Services Available", note: "Emergency medical officer on duty", isSubjectToConfirmation: true },
      { name: "Newborn Care & Assessment" },
      { name: "Phototherapy for Newborns" }
    ],
    verificationNote: "NICU (Neonatal Intensive Care Unit) facilities are subject to current operational confirmation."
  },
  {
    id: "laboratory-services",
    number: 8,
    title: "Laboratory Services",
    departmentGroup: "diagnostics",
    tagline: "Accurate In-House Pathology, Biochemistry & Hormone Testing",
    description: "Our in-house clinical laboratory performs essential diagnostics, specialized reproductive hormone panels, and antenatal screening with strict quality control.",
    image: "/images/era-receptivity.jpg",
    icon: <Microscope className="w-5 h-5" />,
    badge: "Diagnostic Testing",
    services: [
      { name: "24/7 Laboratory Services", note: "Routine and emergency sample testing", isSubjectToConfirmation: true },
      { name: "Biochemistry Testing" },
      { name: "Microbiology Testing" },
      { name: "Pathology Sample Testing" },
      { name: "Hormone Profile Testing (FSH, LH, AMH, Prolactin, Estradiol)" },
      { name: "Immunology Profile Testing" },
      { name: "Anaemia Profile Testing" },
      { name: "Infertility Profile Testing" },
      { name: "Karyotyping" },
      { name: "Double Marker Test" },
      { name: "Triple Marker Test" }
    ]
  },
  {
    id: "usg-ultrasound",
    number: 9,
    title: "USG & Ultrasound Services",
    departmentGroup: "diagnostics",
    tagline: "High-Resolution Pelvic, Abdominal & Fetal Imaging (Senthil Scans)",
    description: "Equipped with Senthil Scans for high-precision diagnostic ultrasound, covering comprehensive obstetric growth tracking, fertility follicular tracking, and abdominal pathology.",
    image: "/images/fertility-evaluation.jpg",
    icon: <Activity className="w-5 h-5" />,
    badge: "Senthil Scans",
    services: [
      { name: "Abdominal Ultrasound" },
      { name: "Obstetric Ultrasound" },
      { name: "Gynaecological Scan" },
      { name: "Follicular Study (Ovulation Tracking)" },
      { name: "NT (Nuchal Translucency) Scan" },
      { name: "Anomaly Scan" },
      { name: "Echo Scan", note: "Specific scan modality and schedule confirmed upon request", isSubjectToConfirmation: true }
    ]
  },
  {
    id: "operation-theatre-surgical-facilities",
    number: 10,
    title: "Operation Theatre & Surgical Facilities",
    departmentGroup: "surgical",
    tagline: "Sterile, Modern Surgical Theatres for Safety & Efficacy",
    description: "Designed to meet stringent infection-control standards, featuring modern surgical lighting, electronic operating tables, laparoscopic towers, and dedicated recovery bays.",
    image: "/images/surgical-care.jpg",
    icon: <Building2 className="w-5 h-5" />,
    badge: "Sterile OT Suite",
    services: [
      { name: "Well-Equipped Operation Theatre" },
      { name: "Advanced Surgical Instruments" },
      { name: "Clean & Sterile OT Environment" },
      { name: "Laparoscopic Surgical Instruments" },
      { name: "Advanced Electronic OT Tables", note: "Equipped for ergonomic multi-angle positioning", isSubjectToConfirmation: true }
    ]
  },
  {
    id: "inpatient-ward-patient-care",
    number: 11,
    title: "Inpatient Ward & Patient Care",
    departmentGroup: "facilities",
    tagline: "Clean, Calm Environment for Restful Recovery",
    description: "Providing comfortable accommodations with attentive nursing care, regular medical rounds, hygienic surroundings, and peaceful rooms for post-surgical recovery.",
    icon: <Bed className="w-5 h-5" />,
    badge: "Inpatient Care",
    services: [
      { name: "Clean & Calm Environment" },
      { name: "24/7 Nursing Care", note: "Round-the-clock ward nurse supervision", isSubjectToConfirmation: true },
      { name: "Medical Officer Support" },
      { name: "Housekeeping Services" },
      { name: "Air-Conditioned Rooms Available" },
      { name: "Post-operative Ward / Recovery Care" }
    ]
  },
  {
    id: "outpatient-opd-reception",
    number: 12,
    title: "Outpatient Department (OPD) & Reception",
    departmentGroup: "facilities",
    tagline: "Spacious, Welcoming Patient Reception & Waiting Amenities",
    description: "Our outpatient facility is designed for smooth patient coordination, comfortable seating, clear guidance from desk personnel, and minimal waiting anxiety.",
    image: "/images/consultation.jpg",
    icon: <Users className="w-5 h-5" />,
    badge: "OPD Amenities",
    services: [
      { name: "Spacious & Well-Ventilated Reception" },
      { name: "Comfortable Patient Waiting Area", note: "Spacious seating arranged for patient comfort", isSubjectToConfirmation: true },
      { name: "Reception & Patient Assistance" },
      { name: "Purified Drinking Water Facilities" },
      { name: "Positive & Motivational Wellness Quotes" }
    ]
  },
  {
    id: "pharmacy-medical-store",
    number: 13,
    title: "Pharmacy & Medical Store",
    departmentGroup: "facilities",
    tagline: "Authentic, Quality-Assured Medicines & Cold Storage",
    description: "An in-house medical store stocking genuine pharmaceuticals from licensed sources, complete with dedicated cold-chain refrigeration for fertility medications and vaccines.",
    icon: <Pill className="w-5 h-5" />,
    badge: "In-House Pharmacy",
    services: [
      { name: "Wide Range of Prescription Medicines" },
      { name: "Quality-Assured Medicines from Standard Sources" },
      { name: "Refrigerated Storage for Temperature-Sensitive Medicines" },
      { name: "Vaccine & Injection Storage, where applicable" }
    ]
  },
  {
    id: "vaccination-immunisation",
    number: 14,
    title: "Vaccination & Immunisation Services",
    departmentGroup: "facilities",
    tagline: "Protective Immunisation Schedules for Mothers & Children",
    description: "Administering essential immunisation protocols for newborns, infants, children, and pregnant women under the guidance of our medical officers.",
    icon: <Syringe className="w-5 h-5" />,
    badge: "Immunisation Protocol",
    services: [
      { name: "Newborn & Paediatric Vaccination" },
      { name: "Antenatal (ANC) Vaccination" },
      { name: "Other Recommended Routine Vaccinations" },
      { name: "Cancer-Preventive Vaccines", note: "Available upon consultation & request", isSubjectToConfirmation: true }
    ]
  },
  {
    id: "other-specialities-diagnostic",
    number: 15,
    title: "Other Specialities & Diagnostic Services",
    departmentGroup: "diagnostics",
    tagline: "Multispeciality Consultations & Allied Healthcare Opinions",
    description: "Broadening clinical access in Dharmapuri with visiting and scheduled consultants across ear, nose, throat health, and oncology supportive care.",
    icon: <Stethoscope className="w-5 h-5" />,
    badge: "Multispeciality Care",
    services: [
      { name: "ENT (Ear, Nose & Throat) Consultations" },
      { name: "Oncology Consultation & Supportive Care" },
      { name: "Diagnostic Laboratory" }
    ]
  }
];

const DEPARTMENT_TABS = [
  { id: 'all', label: 'All Services (15)' },
  { id: 'fertility', label: 'Fertility & IVF' },
  { id: 'womens', label: "Women's & Maternity" },
  { id: 'surgical', label: 'Surgical & Laparoscopy' },
  { id: 'diagnostics', label: 'Diagnostics, Labs & USG' },
  { id: 'facilities', label: 'Facilities & Pharmacy' }
];

export const Services: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('all');

  const filteredCategories = selectedTab === 'all'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter(c => c.departmentGroup === selectedTab);

  return (
    <>
      <MetaTags
        title="Our Services - Complete Hospital & Fertility Services List"
        description="Explore the complete range of healthcare services at Ezhil Hospital & Fertility Centre, Dharmapuri. Covering Fertility & IVF, Gynaecology, Maternity, Laparoscopic Surgery, Diagnostics, Ultrasound, Pharmacy, and Inpatient Facilities."
        canonicalPath="/services"
      />

      {/* Hero Section with Professional Healthcare Background Image */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 min-h-[460px] flex items-center border-b border-pink-100">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/consultation.jpg"
            alt="Ezhil Hospital & Fertility Centre Services"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Subtle multi-gradient overlay for excellent text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B61]/95 via-[#1538B8]/85 to-[#B51B83]/80" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white">
          <div className="max-w-3xl space-y-5 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-pink-200">
              <Sparkles className="w-4 h-4 text-pink-300" />
              <span>Comprehensive Healthcare in Dharmapuri</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-md">
              Our Services
            </h1>

            <p className="text-blue-100 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
              At <strong>Ezhil Hospital &amp; Fertility Centre</strong>, we provide personalized fertility care, comprehensive women's healthcare, maternity services, diagnostics, advanced laparoscopic surgery, and supportive medical facilities under one trusted roof.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#all-categories"
                className="inline-flex items-center gap-2 bg-[#B51B83] hover:bg-[#9B146E] text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Browse All 15 Departments</span>
                <ChevronDown className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-6 py-3 rounded-xl font-extrabold text-sm backdrop-blur-sm transition-colors"
              >
                <span>Enquire with Hospital</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="bg-slate-50 py-10" id="all-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Our Services' }]} />

          {/* Clinical Ethics & Verification Notice */}
          <div className="bg-gradient-to-r from-pink-50/90 to-blue-50/90 border border-pink-200/80 rounded-2xl p-5 mb-10 text-slate-800 text-xs sm:text-sm flex items-start gap-3.5 shadow-xs">
            <AlertCircle className="w-5 h-5 text-[#B51B83] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-[#1538B8]">
                Ethical &amp; Transparent Healthcare Information
              </p>
              <p className="text-slate-600 leading-relaxed text-xs">
                All treatment modalities are planned individually following in-depth consultation and clinical diagnostics. Specific duty schedules, specialist visiting hours, and equipment configurations are confirmed directly with our hospital reception desk.
              </p>
            </div>
          </div>

          {/* Department Quick Filter Navigation */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3 text-xs font-extrabold text-slate-600 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-[#B51B83]" />
              <span>Filter by Clinical Wing</span>
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {DEPARTMENT_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedTab === tab.id
                      ? 'bg-[#1538B8] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:text-[#1538B8] hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Categories Grid */}
          <div className="space-y-14">
            {filteredCategories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-200/80 hover:border-pink-200 transition-all duration-300 scroll-mt-24 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Category Info & Image (if available) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-pink-100 text-[#B51B83] font-black text-xs flex items-center justify-center">
                        {category.number < 10 ? `0${category.number}` : category.number}
                      </span>
                      <span className="text-xs font-bold text-[#B51B83] uppercase tracking-wider bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
                        {category.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1538B8] leading-tight">
                      {category.title}
                    </h2>

                    <p className="text-xs sm:text-sm font-semibold text-[#B51B83]">
                      {category.tagline}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {category.description}
                    </p>

                    {/* Image Showcase if image exists */}
                    {category.image && (
                      <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 h-52 sm:h-60 w-full mt-4 group">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                          <span className="text-xs font-bold text-pink-200">
                            Ezhil Hospital &amp; Fertility Centre
                          </span>
                        </div>
                      </div>
                    )}

                    {category.verificationNote && (
                      <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{category.verificationNote}</span>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Service List */}
                  <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/60 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                        <div className="w-8 h-8 rounded-lg bg-[#1538B8] text-white flex items-center justify-center">
                          {category.icon}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Included Services &amp; Clinical Offerings
                        </h3>
                      </div>

                      <ul className="space-y-3">
                        {category.services.map((service, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-2xs hover:border-pink-200 transition-colors"
                          >
                            <div className="w-5 h-5 rounded-full bg-pink-100 text-[#B51B83] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-bold text-slate-800">
                                {service.name}
                              </span>
                              {service.note && (
                                <span className="block text-xs text-slate-500 mt-0.5">
                                  {service.note}
                                </span>
                              )}
                            </div>
                            {service.isSubjectToConfirmation && (
                              <span className="hidden sm:inline-block text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                                Consult Doctor
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Department Footer CTA */}
                    <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
                        Need more information about {category.title}?
                      </span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#B51B83] hover:text-[#1538B8] transition-colors uppercase tracking-wider group-hover:translate-x-0.5"
                      >
                        <span>Enquire About Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>

                </div>
              </section>
            ))}
          </div>

          {/* Unified Hospital Enquiry Banner (Clean & Non-duplicated) */}
          <div className="mt-16 bg-gradient-to-r from-[#1538B8] via-[#0E2685] to-[#B51B83] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-pink-200 mx-auto">
              <ShieldCheck className="w-4 h-4 text-pink-300" />
              <span>Comprehensive Healthcare in Dharmapuri</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Looking for a Specific Medical Procedure or Consultation?
            </h2>

            <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our medical reception is available to assist you with specialty clinic schedules, diagnostic test preparations, and consultation appointments.
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

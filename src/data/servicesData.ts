export interface ServiceItem {
  name: string;
  note?: string;
  isSubjectToConfirmation?: boolean;
}

export interface ClinicalGuideLink {
  title: string;
  path: string;
  desc: string;
}

export interface DepartmentHighlight {
  title: string;
  desc: string;
}

export interface ServiceCategoryData {
  slug: string;
  number: number;
  title: string;
  departmentGroup: 'fertility' | 'womens' | 'surgical' | 'diagnostics' | 'facilities';
  tagline: string;
  shortDesc: string;
  fullOverview: string[];
  image?: string;
  customVisualTitle?: string;
  customVisualFeatures?: string[];
  iconName: string;
  badge: string;
  services: ServiceItem[];
  clinicalHighlights: DepartmentHighlight[];
  verificationNote?: string;
  clinicalDetailGuides?: ClinicalGuideLink[];
  relatedCategorySlugs: string[];
}

export const SERVICE_CATEGORIES: ServiceCategoryData[] = [
  {
    slug: "fertility-ivf",
    number: 1,
    title: "Fertility & IVF Services",
    departmentGroup: "fertility",
    tagline: "Advanced Assisted Reproductive Technology & Individualized Care",
    shortDesc: "Compassionate, evidence-based reproductive care with state-of-the-art IVF, ICSI micromanipulation, and individualized fertility roadmaps.",
    fullOverview: [
      "At Ezhil Hospital & Fertility Centre, our dedicated reproductive medicine wing has supported thousands of couples from Dharmapuri and across Tamil Nadu since 1998. We offer comprehensive fertility diagnostic workups, ovulation induction, intrauterine insemination (IUI), in vitro fertilization (IVF), and intracytoplasmic sperm injection (ICSI).",
      "Every treatment plan is tailored to the couple's specific clinical findings. With modern embryology incubators, clean air handling, and micromanipulation workstations, our laboratory provides the optimal environment for gamete handling and embryo development under experienced clinical oversight."
    ],
    image: "/images/ivf-treatment.jpg",
    iconName: "Sparkles",
    badge: "Dedicated Fertility Wing",
    services: [
      { name: "Infertility Evaluation & Consultation" },
      { name: "IUI (Intrauterine Insemination)" },
      { name: "IVF (In Vitro Fertilization)" },
      { name: "ICSI (Intracytoplasmic Sperm Injection)" },
      { name: "Male & Female Infertility Assessment" },
      { name: "PCOS / PCOD-Related Fertility Care" },
      { name: "Infertility Profile Testing" }
    ],
    clinicalHighlights: [
      {
        title: "Cleanroom Embryology Laboratory",
        desc: "Equipped with specialized embryo culture workstations, inverted microscopes, and sterile incubators designed for optimal blastocyst development."
      },
      {
        title: "Individualized Stimulation Protocols",
        desc: "Tailored hormonal medication regimens with frequent transvaginal follicular ultrasound monitoring to ensure patient safety and healthy oocyte yields."
      },
      {
        title: "Advanced ICSI Micromanipulation",
        desc: "High-magnification single-sperm microinjection for cases of severe male factor infertility, low motility, or previous conventional IVF fertilisation failure."
      }
    ],
    clinicalDetailGuides: [
      {
        title: "Causes of Infertility Guide",
        path: "/causes-of-infertility",
        desc: "Educational breakdown of female ovulatory, tubal, and uterine factors, alongside male semen quality and hormonal parameters."
      },
      {
        title: "Fertility Evaluation & Diagnostic Tests",
        path: "/fertility-evaluation",
        desc: "Step-by-step diagnostic roadmap including semen analysis, ovarian reserve AMH tests, pelvic ultrasound, and tubal patency review."
      }
    ],
    relatedCategorySlugs: ["laboratory", "ultrasound", "general-laparoscopic-surgery"]
  },
  {
    slug: "gynaecology-womens-health",
    number: 2,
    title: "Gynaecology & Women's Health",
    departmentGroup: "womens",
    tagline: "Comprehensive Clinical & Surgical Care Across All Stages of Life",
    shortDesc: "Preventive, diagnostic, and therapeutic gynaecological care covering menstrual health, fibroids, hysteroscopy, and minimally invasive laparoscopic surgeries.",
    fullOverview: [
      "Our Gynaecology Department provides attentive healthcare for women through adolescence, reproductive years, pregnancy, and menopause. We emphasize conservative medical therapies first, supported by modern diagnostic hysteroscopy and minimally invasive laparoscopic surgery when intervention is warranted.",
      "From treating irregular cycles, PCOS, ovarian cysts, and endometriosis to managing pelvic organ prolapse and uterine fibroids, our clinical team focuses on dignified, empathetic patient communication and rapid recovery."
    ],
    image: "/images/fertility-hero.jpg",
    iconName: "Heart",
    badge: "Women's Health",
    services: [
      { name: "Gynaecology Consultation" },
      { name: "Hysteroscopy" },
      { name: "Hysterectomy" },
      { name: "Laparoscopic Gynaecological Surgery" },
      { name: "Menstrual & Hormonal Health" },
      { name: "Family Planning Counselling" }
    ],
    clinicalHighlights: [
      {
        title: "Minimally Invasive Laparoscopy",
        desc: "Keyhole surgical techniques for ovarian cyst removal, adhesiolysis, and laparoscopic hysterectomy with minimal scarring and fast post-op recovery."
      },
      {
        title: "Diagnostic & Operative Hysteroscopy",
        desc: "Direct visualization of the uterine cavity to assess polyps, fibroids, uterine septa, or unexplained heavy menstrual bleeding."
      },
      {
        title: "Holistic Hormonal Care",
        desc: "Evidence-based protocols for menstrual irregularity, perimenopausal symptoms, hormonal imbalances, and adolescent gynaecology."
      }
    ],
    clinicalDetailGuides: [
      {
        title: "Endometriosis & Infertility Speciality",
        path: "/endometriosis-infertility",
        desc: "In-depth guide on recognizing symptoms, pelvic pain management, staging, and conservative laparoscopic surgical care."
      },
      {
        title: "Cosmetic Gynaecology & Wellness",
        path: "/cosmetic-gynaecology",
        desc: "Discreet and respectful care for intimate wellness, post-childbirth restoration, and non-surgical aesthetic gynaecology."
      }
    ],
    relatedCategorySlugs: ["fertility-ivf", "obstetrics-maternity", "general-laparoscopic-surgery"]
  },
  {
    slug: "obstetrics-maternity",
    number: 3,
    title: "Obstetrics & Maternity Care",
    departmentGroup: "womens",
    tagline: "Compassionate Maternal Supervision from Conception to Delivery",
    shortDesc: "Complete antenatal care, regular growth ultrasound monitoring, comfortable labour suites, and warm postnatal recovery support.",
    fullOverview: [
      "The arrival of a new family member is one of life's most precious milestones. At Ezhil Hospital, our maternity unit ensures both expectant mothers and their babies receive compassionate, round-the-clock medical attention throughout pregnancy, labour, delivery, and postpartum healing.",
      "We provide scheduled antenatal checkups, high-resolution obstetric ultrasound scans via Senthil Scans, nutritional guidance, pain management during labour, and dedicated neonatal stabilization right at delivery."
    ],
    image: "/images/maternity-care.jpg",
    iconName: "Baby",
    badge: "Maternity & Delivery Care",
    services: [
      { name: "Pregnancy Consultation" },
      { name: "Antenatal Care" },
      { name: "Labour & Delivery Care" },
      { name: "Postnatal Care" }
    ],
    clinicalHighlights: [
      {
        title: "Structured Antenatal Pathway",
        desc: "Scheduled maternal blood pressure tracking, gestational diabetes screening, fetal anomaly ultrasound reviews, and essential antenatal immunisations."
      },
      {
        title: "Clean & Sterile Labour Suites",
        desc: "Private labour rooms equipped with modern fetal cardiotocography (CTG) monitors, emergency resuscitation equipment, and skilled midwifery staff."
      },
      {
        title: "Compassionate Postnatal Recovery",
        desc: "Support for breastfeeding initiation, newborn feeding evaluation, postpartum maternal checks, and gentle care in peaceful recovery rooms."
      }
    ],
    relatedCategorySlugs: ["paediatrics-neonatal", "ultrasound", "vaccination"]
  },
  {
    slug: "general-laparoscopic-surgery",
    number: 4,
    title: "General & Laparoscopic Surgical Services",
    departmentGroup: "surgical",
    tagline: "Minimally Invasive Precision Surgery with Faster Recovery",
    shortDesc: "Advanced laparoscopic appendectomy, cholecystectomy, cyst removal, hysterectomy, and general surgical interventions.",
    fullOverview: [
      "Ezhil Hospital offers advanced minimally invasive surgical care performed by experienced general and laparoscopic surgeons. Laparoscopy utilizes tiny incisions, high-definition camera towers, and precision instruments to perform abdominal and pelvic procedures with reduced tissue trauma.",
      "Patients experience significantly less post-operative discomfort, shortened hospital stays, reduced wound infection rates, and faster return to their daily routines compared to traditional open surgery."
    ],
    customVisualTitle: "Minimally Invasive Laparoscopic Surgery",
    customVisualFeatures: [
      "Keyhole Laparoscopic Approaches with Minimal Scarring",
      "Advanced Laparoscopic Tower with HD Optical Visualization",
      "Shortened Inpatient Stays & Prompt Day-Care Recovery"
    ],
    iconName: "Activity",
    badge: "Advanced Laparoscopy",
    services: [
      { name: "General Surgery" },
      { name: "Laparoscopic Appendectomy" },
      { name: "Hysterectomy" },
      { name: "Cyst Removal Surgery" },
      { name: "Laparoscopic Cholecystectomy" },
      { name: "Sterilisation Procedures" },
      { name: "Post-operative Care" }
    ],
    clinicalHighlights: [
      {
        title: "Laparoscopic Gallbladder & Appendix Surgery",
        desc: "Safe keyhole removal of inflamed gallbladders (cholecystectomy) and appendix with rapid same-day or next-day mobilization."
      },
      {
        title: "Benign Cyst & Mass Excision",
        desc: "Careful dissection and excision of ovarian cysts, abdominal wall masses, and soft tissue swellings with high surgical precision."
      },
      {
        title: "Dedicated Post-Operative Supervision",
        desc: "Standardized recovery protocols with continuous vital tracking, multimodal pain relief, and attentive nursing care."
      }
    ],
    clinicalDetailGuides: [
      {
        title: "Laparoscopic Endometriosis Surgery",
        path: "/endometriosis-infertility",
        desc: "Minimally invasive cystectomy, adhesiolysis, and pelvic restoration for patients experiencing chronic pain or infertility."
      }
    ],
    relatedCategorySlugs: ["operation-theatre", "inpatient-care", "gynaecology-womens-health"]
  },
  {
    slug: "family-planning",
    number: 5,
    title: "Family Planning & Sterilisation",
    departmentGroup: "surgical",
    tagline: "Informed, Confidential Reproductive Health Guidance",
    shortDesc: "Safe, confidential reproductive counselling, contraception advice, and permanent surgical family planning options.",
    fullOverview: [
      "Family planning is a fundamental aspect of preventive reproductive healthcare. At Ezhil Hospital, we provide supportive, non-judgmental guidance to help individuals and couples make informed decisions regarding birth spacing and completed family planning.",
      "We offer counselling on temporary contraceptive methods as well as safe surgical permanent sterilisation procedures performed with strict sterile surgical standards and patient consent."
    ],
    customVisualTitle: "Confidential Reproductive Planning",
    customVisualFeatures: [
      "Informed Contraceptive Choice & Birth Spacing Guidance",
      "Surgical Tubectomy & Vasectomy Eligibility Evaluation",
      "Complete Patient Confidentiality & Ethical Protocols"
    ],
    iconName: "Users",
    badge: "Confidential Care",
    services: [
      { name: "Family Planning Counselling" },
      { name: "Government-Approved Sterilisation Centre", note: "Accredited clinical procedure facility; formal documentation maintained on hospital file", isSubjectToConfirmation: true },
      { name: "Male Sterilisation (Vasectomy)", note: "Provided following clinical evaluation & eligibility confirmation", isSubjectToConfirmation: true },
      { name: "Female Sterilisation (Tubectomy)", note: "Provided following clinical evaluation & eligibility confirmation", isSubjectToConfirmation: true }
    ],
    verificationNote: "All sterilisation and family planning procedures are performed following formal clinical review, informed consent, and hospital documentation protocols.",
    clinicalHighlights: [
      {
        title: "Comprehensive Contraception Counselling",
        desc: "Detailed discussions on the benefits, mechanisms, and suitability of temporary and permanent birth planning options."
      },
      {
        title: "Minimally Invasive Tubectomy",
        desc: "Safe female permanent sterilisation performed through keyhole or mini-laparotomy approaches under sterile theatre conditions."
      },
      {
        title: "Confidential Consultation",
        desc: "Private consultation rooms ensuring complete discretion and dignity for both partners."
      }
    ],
    relatedCategorySlugs: ["gynaecology-womens-health", "general-laparoscopic-surgery", "opd-reception"]
  },
  {
    slug: "cardiology",
    number: 6,
    title: "Cardiology Services",
    departmentGroup: "diagnostics",
    tagline: "Cardiovascular Health Evaluations & Diagnostics",
    shortDesc: "Outpatient cardiac evaluations, 24-hour electrocardiogram (ECG) monitoring, and specialist cardiology opinions.",
    fullOverview: [
      "Heart health is central to overall vitality and safe surgical outcomes. Ezhil Hospital provides clinical cardiovascular assessments, pre-operative cardiac fitness evaluations, and routine electrocardiogram (ECG) testing for outpatients and inpatients.",
      "Visiting and on-call cardiology specialists provide expert opinions for patients presenting with hypertension, chest discomfort, breathlessness, palpitations, or lifestyle-related cardiovascular risk factors."
    ],
    image: "/images/iui-treatment.jpg",
    iconName: "HeartPulse",
    badge: "Cardiac Care",
    services: [
      { name: "Cardiology Consultation" },
      { name: "24-Hour ECG Services / Monitoring", note: "Facility availability confirmed based on duty schedule", isSubjectToConfirmation: true },
      { name: "Cardiology Specialist Opinion Available", note: "Consultations scheduled on specialist review basis", isSubjectToConfirmation: true }
    ],
    verificationNote: "Continuous monitoring availability and specialist consultation dates are confirmed with hospital reception.",
    clinicalHighlights: [
      {
        title: "Pre-Operative Cardiac Clearances",
        desc: "Thorough heart evaluations before surgical and laparoscopic procedures to ensure maximum anaesthetic safety."
      },
      {
        title: "Electrocardiography (ECG)",
        desc: "Prompt diagnostic 12-lead ECG recording to detect arrhythmias, ischemic changes, and conduction abnormalities."
      },
      {
        title: "Hypertension & Lifestyle Guidance",
        desc: "Personalized medical management and lifestyle recommendations for managing high blood pressure and cardiac risks."
      }
    ],
    relatedCategorySlugs: ["laboratory", "opd-reception", "other-specialities"]
  },
  {
    slug: "paediatrics-neonatal",
    number: 7,
    title: "Paediatrics & Neonatal Care",
    departmentGroup: "womens",
    tagline: "Gentle Medical Supervision for Newborns & Growing Children",
    shortDesc: "Pediatric health monitoring, newborn health assessments, phototherapy for neonatal jaundice, and senior medical officer care.",
    fullOverview: [
      "Children require dedicated, gentle medical care tailored to their developmental stages. Our Paediatrics Department provides health supervision for infants, young children, and adolescents, addressing common childhood infections, growth tracking, and developmental milestones.",
      "For newborns born at Ezhil Hospital, our team provides immediate newborn evaluation, APGAR assessment, warm nursery care, and blue-light phototherapy for physiological jaundice."
    ],
    customVisualTitle: "Gentle Paediatric & Newborn Care",
    customVisualFeatures: [
      "Immediate Newborn Assessment & Pediatric Supervision",
      "Specialized LED Phototherapy for Neonatal Jaundice",
      "Comprehensive Childhood Growth & Milestone Guidance"
    ],
    iconName: "Baby",
    badge: "Pediatric Care",
    services: [
      { name: "Paediatrics Department" },
      { name: "Senior Medical Officer Care" },
      { name: "24/7 Medical Services Available", note: "Emergency medical officer on duty", isSubjectToConfirmation: true },
      { name: "Newborn Care & Assessment" },
      { name: "NICU (Neonatal Intensive Care Unit)", note: "Level of intensive monitoring subject to current operational schedule", isSubjectToConfirmation: true },
      { name: "Phototherapy for Newborns" }
    ],
    verificationNote: "NICU (Neonatal Intensive Care Unit) facilities are subject to current operational confirmation.",
    clinicalHighlights: [
      {
        title: "Immediate Neonatal Assessment",
        desc: "Routine physical checks, birth weight tracking, oxygenation checks, and early breastfeeding support right after delivery."
      },
      {
        title: "Phototherapy for Jaundice",
        desc: "Safe, effective overhead LED phototherapy units with eye protection to reduce elevated newborn bilirubin levels safely."
      },
      {
        title: "Growth & Nutritional Monitoring",
        desc: "Regular pediatric reviews tracking height, weight, head circumference, and dietary advice for growing toddlers."
      }
    ],
    relatedCategorySlugs: ["obstetrics-maternity", "vaccination", "pharmacy"]
  },
  {
    slug: "laboratory",
    number: 8,
    title: "Laboratory Services",
    departmentGroup: "diagnostics",
    tagline: "Accurate In-House Pathology, Biochemistry & Hormone Testing",
    shortDesc: "Reliable diagnostic testing including reproductive hormone panels, clinical biochemistry, microbiology, karyotyping, and prenatal screening.",
    fullOverview: [
      "Accurate medical diagnoses and successful fertility treatments depend directly on laboratory precision. Ezhil Hospital's in-house laboratory is equipped with automated biochemistry analyzers, hormonal immunoassay systems, and strict internal quality assurance.",
      "We perform routine haematology panels, infection screenings, specialized female and male reproductive hormone profiles (AMH, FSH, LH, Estradiol, Prolactin, Testosterone), and antenatal double/triple marker screening."
    ],
    image: "/images/pgd-genetics.jpg",
    iconName: "Microscope",
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
    ],
    clinicalHighlights: [
      {
        title: "Reproductive Hormone Profiling",
        desc: "Rapid-turnaround automated testing of AMH (ovarian reserve), LH, FSH, Prolactin, and Estradiol to guide fertility cycle management."
      },
      {
        title: "Prenatal Genetic & Marker Screening",
        desc: "Double Marker and Triple Marker screening tests for early evaluation of fetal chromosomal health during pregnancy."
      },
      {
        title: "Strict Quality Control",
        desc: "Standardized calibration protocols, barcoded sample tracking, and supervision by qualified laboratory personnel."
      }
    ],
    clinicalDetailGuides: [
      {
        title: "Fertility Evaluation & Diagnostic Tests",
        path: "/fertility-evaluation",
        desc: "How laboratory hormone panels and diagnostic semen analysis combine to form a clear fertility roadmap."
      }
    ],
    relatedCategorySlugs: ["fertility-ivf", "ultrasound", "obstetrics-maternity"]
  },
  {
    slug: "ultrasound",
    number: 9,
    title: "USG & Ultrasound Services",
    departmentGroup: "diagnostics",
    tagline: "High-Resolution Pelvic, Abdominal & Fetal Imaging (Senthil Scans)",
    shortDesc: "Equipped with Senthil Scans for high-precision diagnostic ultrasound, follicular ovulation tracking, and comprehensive pregnancy scans.",
    fullOverview: [
      "Ultrasound is an indispensable, non-invasive imaging modality for both obstetrics and reproductive medicine. Through our diagnostic facility, Senthil Scans, Ezhil Hospital provides high-resolution transvaginal, transabdominal, and Doppler ultrasonography.",
      "From detailed fertility follicular tracking during IUI/IVF cycles to first-trimester NT scans, mid-trimester anomaly scans, and fetal growth monitoring, our scan department delivers clear diagnostic clarity."
    ],
    image: "/images/fertility-evaluation.jpg",
    iconName: "Activity",
    badge: "Senthil Scans",
    services: [
      { name: "Abdominal Ultrasound" },
      { name: "Obstetric Ultrasound" },
      { name: "Gynaecological Scan" },
      { name: "Follicular Study (Ovulation Tracking)" },
      { name: "NT (Nuchal Translucency) Scan" },
      { name: "Anomaly Scan" },
      { name: "Echo Scan", note: "Specific scan modality and schedule confirmed upon request", isSubjectToConfirmation: true }
    ],
    clinicalHighlights: [
      {
        title: "Follicular Monitoring (Ovulation Tracking)",
        desc: "Serial high-resolution pelvic ultrasound scans to track follicular growth and endometrial thickness during natural and stimulated cycles."
      },
      {
        title: "Comprehensive Fetal Anomaly Scans",
        desc: "Systematic anatomical evaluation between 18–22 weeks to assess fetal organ development, spine, heart, and placenta location."
      },
      {
        title: "Abdominal & Pelvic Pathology Imaging",
        desc: "Clear diagnostic scans for uterine fibroids, adenomyosis, ovarian cysts, gallstones, renal calculi, and pelvic inflammatory findings."
      }
    ],
    clinicalDetailGuides: [
      {
        title: "Pelvic & Follicular Ultrasound Diagnostics",
        path: "/fertility-evaluation",
        desc: "Explore how high-resolution ultrasound imaging forms the foundation of our fertility evaluations."
      }
    ],
    relatedCategorySlugs: ["fertility-ivf", "obstetrics-maternity", "laboratory"]
  },
  {
    slug: "operation-theatre",
    number: 10,
    title: "Operation Theatre & Surgical Facilities",
    departmentGroup: "surgical",
    tagline: "Sterile, Modern Surgical Theatres for Safety & Efficacy",
    shortDesc: "Infection-controlled operating theatre suite equipped with modern electronic surgical tables, laparoscopic towers, and sterile recovery bays.",
    fullOverview: [
      "Patient safety during surgery relies on uncompromising sterility, advanced instrumentation, and vigilant anaesthetic monitoring. Ezhil Hospital's surgical theatre suite is designed to prevent cross-contamination and support delicate open and minimally invasive operations.",
      "The OT facility features ergonomic multi-positioning surgical tables, high-intensity LED surgical lighting, multi-parameter anaesthesia workstations, and high-definition laparoscopy equipment."
    ],
    image: "/images/surgical-care.jpg",
    iconName: "Building2",
    badge: "Sterile OT Suite",
    services: [
      { name: "Well-Equipped Operation Theatre" },
      { name: "Advanced Surgical Instruments" },
      { name: "Clean & Sterile OT Environment" },
      { name: "Laparoscopic Surgical Instruments" },
      { name: "Advanced Electronic OT Tables", note: "Equipped for ergonomic multi-angle positioning", isSubjectToConfirmation: true }
    ],
    clinicalHighlights: [
      {
        title: "Stringent Infection Control",
        desc: "Strict sterilization workflows with autoclave monitoring, chemical biological indicators, and dedicated sterile scrub zones."
      },
      {
        title: "Advanced Laparoscopic Tower",
        desc: "High-definition camera systems, fiberoptic light sources, insufflators, and precision electrosurgical units for keyhole surgery."
      },
      {
        title: "Continuous Anaesthesia Monitoring",
        desc: "Multi-parameter monitoring of ECG, SpO2, blood pressure, end-tidal CO2, and temperature throughout surgical procedures."
      }
    ],
    relatedCategorySlugs: ["general-laparoscopic-surgery", "inpatient-care", "gynaecology-womens-health"]
  },
  {
    slug: "inpatient-care",
    number: 11,
    title: "Inpatient Ward & Patient Care",
    departmentGroup: "facilities",
    tagline: "Clean, Calm Environment for Restful Recovery",
    shortDesc: "Comfortable air-conditioned rooms, hygienic surroundings, attentive round-the-clock nursing care, and regular medical officer rounds.",
    fullOverview: [
      "Healing happens best in a calm, supportive, and hygienic atmosphere. Ezhil Hospital's inpatient facilities provide pleasant accommodations for patients recovering from childbirth, fertility procedures, or general and laparoscopic surgeries.",
      "Our nursing team ensures continuous monitoring, timely medication administration, nutritional guidance, and responsive assistance to make each patient's stay safe and comfortable."
    ],
    customVisualTitle: "Hygienic Inpatient Recovery Ward",
    customVisualFeatures: [
      "Air-Conditioned & Restful Patient Recovery Rooms",
      "Attentive Round-the-Clock Ward Nursing Care",
      "Regular Medical Officer Support & Sanitisation Protocols"
    ],
    iconName: "Bed",
    badge: "Inpatient Care",
    services: [
      { name: "Clean & Calm Environment" },
      { name: "24/7 Nursing Care", note: "Round-the-clock ward nurse supervision", isSubjectToConfirmation: true },
      { name: "Medical Officer Support" },
      { name: "Housekeeping Services" },
      { name: "Air-Conditioned Rooms Available" },
      { name: "Post-operative Ward / Recovery Care" }
    ],
    clinicalHighlights: [
      {
        title: "Attentive 24/7 Nursing Supervision",
        desc: "Dedicated ward nurses providing continuous care, medication scheduling, wound dressing, and rapid response to call bells."
      },
      {
        title: "Comfortable Room Options",
        desc: "Air-conditioned and well-ventilated rooms with comfortable patient beds, attendant seating, and clean attached restrooms."
      },
      {
        title: "Rigorous Housekeeping Standards",
        desc: "Daily sanitization and disinfection protocols ensuring pristine, infection-free inpatient corridors and recovery rooms."
      }
    ],
    relatedCategorySlugs: ["opd-reception", "operation-theatre", "pharmacy"]
  },
  {
    slug: "opd-reception",
    number: 12,
    title: "Outpatient Department (OPD) & Reception",
    departmentGroup: "facilities",
    tagline: "Spacious, Welcoming Patient Reception & Waiting Amenities",
    shortDesc: "Streamlined registration, clear desk guidance, comfortable patient waiting areas, and clean drinking water facilities.",
    fullOverview: [
      "Our Outpatient Department is designed to make your hospital visit smooth, organized, and reassuring from the moment you step through our doors. Reception staff are available to assist with doctor appointments, clinic schedules, and diagnostic test directions.",
      "We provide spacious, airy waiting lounges, purified reverse-osmosis drinking water, clear signage, and an uplifting atmosphere adorned with motivational wellness quotes."
    ],
    image: "/images/cosmetic-gynaecology.jpg",
    iconName: "Users",
    badge: "OPD Amenities",
    services: [
      { name: "Spacious & Well-Ventilated Reception" },
      { name: "Comfortable Patient Waiting Area (Capacity up to 100 Patients)", note: "Spacious seating arranged for patient comfort", isSubjectToConfirmation: true },
      { name: "Reception & Patient Assistance" },
      { name: "Purified Drinking Water Facilities" },
      { name: "Positive & Motivational Wellness Quotes" }
    ],
    clinicalHighlights: [
      {
        title: "Clear Registration & Guidance",
        desc: "Friendly desk personnel helping patients locate consulting rooms, scan departments, and laboratory counters without delay."
      },
      {
        title: "Comfortable Waiting Lounges",
        desc: "High-ceiling, naturally ventilated waiting spaces with ample seating designed to minimize congestion during busy clinic hours."
      },
      {
        title: "Hygienic Public Amenities",
        desc: "Continuous access to certified RO purified drinking water and well-maintained patient restrooms."
      }
    ],
    relatedCategorySlugs: ["pharmacy", "inpatient-care", "other-specialities"]
  },
  {
    slug: "pharmacy",
    number: 13,
    title: "Pharmacy & Medical Store",
    departmentGroup: "facilities",
    tagline: "Authentic, Quality-Assured Medicines & Cold Storage",
    shortDesc: "In-house pharmacy stocking licensed prescription medications, specialized fertility drugs, and temperature-controlled cold-chain storage.",
    fullOverview: [
      "Fertility medications, hormonal injections, antibiotics, and surgical recovery drugs require impeccable storage conditions to remain fully potent. Ezhil Hospital operates a licensed in-house medical store ensuring immediate availability of prescribed pharmaceuticals.",
      "We maintain specialized medical refrigeration units for temperature-sensitive gonadotropin injections, vaccines, and biologics, ensuring complete cold-chain integrity from receipt to patient administration."
    ],
    image: "/images/sexual-medicine.jpg",
    iconName: "Pill",
    badge: "In-House Pharmacy",
    services: [
      { name: "Wide Range of Prescription Medicines" },
      { name: "Quality-Assured Medicines from Standard Sources" },
      { name: "Refrigerated Storage for Temperature-Sensitive Medicines" },
      { name: "Vaccine & Injection Storage, where applicable" }
    ],
    clinicalHighlights: [
      {
        title: "Cold-Chain Integrity",
        desc: "Calibrated medical refrigerators with temperature logging to preserve sensitive fertility hormones, insulin, and vaccines."
      },
      {
        title: "Genuine Licensed Sourcing",
        desc: "Direct procurement from verified pharmaceutical distributors ensures authentic, uncompromised medicines for every patient."
      },
      {
        title: "Immediate Inpatient & OPD Access",
        desc: "Conveniently located within the hospital premises for quick collection following doctor consultations or surgical discharge."
      }
    ],
    relatedCategorySlugs: ["vaccination", "inpatient-care", "fertility-ivf"]
  },
  {
    slug: "vaccination",
    number: 14,
    title: "Vaccination & Immunisation Services",
    departmentGroup: "facilities",
    tagline: "Protective Immunisation Schedules for Mothers & Children",
    shortDesc: "Essential childhood immunization, antenatal maternal vaccines, and recommended routine adult vaccination protocols.",
    fullOverview: [
      "Immunisation is one of the most effective preventive health measures for shielding children and mothers from infectious illnesses. Ezhil Hospital provides structured vaccination schedules in accordance with established national pediatric and maternal health recommendations.",
      "From birth vaccines for newborns to antenatal tetanus and pertussis protection for pregnant women, our medical officers ensure each dose is safely stored and accurately documented."
    ],
    image: "/images/ovulation-induction.jpg",
    iconName: "Syringe",
    badge: "Immunisation Protocol",
    services: [
      { name: "Newborn & Paediatric Vaccination" },
      { name: "Antenatal (ANC) Vaccination" },
      { name: "Other Recommended Routine Vaccinations" },
      { name: "Cancer-Preventive Vaccines", note: "Available upon consultation & request", isSubjectToConfirmation: true }
    ],
    clinicalHighlights: [
      {
        title: "Newborn Immunisation at Birth",
        desc: "Timely administration of BCG, Hepatitis B birth dose, and Oral Polio Vaccine (OPV) prior to hospital discharge."
      },
      {
        title: "Antenatal Protective Vaccines",
        desc: "Recommended Td/Tdap vaccinations during pregnancy to protect both mother and infant against neonatal tetanus and pertussis."
      },
      {
        title: "Vaccine Storage & Cold Chain",
        desc: "Stored in dedicated in-house cold chain refrigerators under strict temperature tracking for maximum safety and efficacy."
      }
    ],
    relatedCategorySlugs: ["paediatrics-neonatal", "obstetrics-maternity", "pharmacy"]
  },
  {
    slug: "other-specialities",
    number: 15,
    title: "Other Specialities & Diagnostic Services",
    departmentGroup: "diagnostics",
    tagline: "Multispeciality Consultations & Allied Healthcare Opinions",
    shortDesc: "Specialist consultations across Ear, Nose & Throat (ENT), oncology supportive reviews, diagnostic laboratory, and male sexual health.",
    fullOverview: [
      "To meet the wider healthcare needs of families in Dharmapuri, Ezhil Hospital coordinates access to visiting specialist consultants in allied medical and surgical domains. This multidisciplinary approach ensures patients receive well-rounded clinical care under one roof.",
      "Our multispeciality care includes ENT reviews, cancer supportive care and general oncology consultations, diagnostic pathology, and confidential male andrology/sexual wellness evaluations."
    ],
    customVisualTitle: "Multidisciplinary Allied Consultations",
    customVisualFeatures: [
      "Ear, Nose & Throat (ENT) Clinical Evaluations",
      "General Oncology Supportive Care Consultations",
      "Integrated Laboratory & Diagnostic Coordination"
    ],
    iconName: "Stethoscope",
    badge: "Multispeciality Care",
    services: [
      { name: "ENT (Ear, Nose & Throat) Consultations" },
      { name: "Oncology Consultation & Supportive Care" },
      { name: "Diagnostic Laboratory" }
    ],
    clinicalHighlights: [
      {
        title: "Ear, Nose & Throat (ENT) Care",
        desc: "Clinical evaluations for recurrent sinusitis, tonsillitis, ear infections, hearing difficulties, and allergic rhinitis."
      },
      {
        title: "Oncology Supportive Care",
        desc: "Specialist consultation, guidance, and symptomatic supportive care for patients undergoing oncology medical evaluations."
      },
      {
        title: "Allied Diagnostic Support",
        desc: "Coordinated access with in-house laboratory testing and ultrasound imaging for fast-track clinical decisions."
      }
    ],
    clinicalDetailGuides: [
      {
        title: "Male Sexual Health & Sexual Medicine",
        path: "/sexual-medicine",
        desc: "Confidential and dignified clinical evaluation for erectile dysfunction, hormonal imbalance, and male sexual wellness."
      }
    ],
    relatedCategorySlugs: ["laboratory", "ultrasound", "opd-reception"]
  }
];

export const getCategoryBySlug = (slug: string): ServiceCategoryData | undefined => {
  return SERVICE_CATEGORIES.find((cat) => cat.slug === slug);
};

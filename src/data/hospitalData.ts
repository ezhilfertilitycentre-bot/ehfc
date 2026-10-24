export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  path: string;
  features: string[];
}

export interface AchievementItem {
  number: string;
  label: string;
  sublabel: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export const HOSPITAL_INFO = {
  name: "Ezhil Hospital & Fertility Centre",
  shortName: "Ezhil Fertility Centre",
  tagline: "Compassionate Care. Personalised Treatment. Hope for Tomorrow.",
  slogan: "Your Health. Our Care. Your Trust.",
  founder: "Dr. Senthilvadivu",
  location: "Pappireddipatti, Dharmapuri Dist., Tamil Nadu",
  primaryPhone: "9442497622",
  actionPhone: "8056984522",
  whatsappNumber: "919442497622",
  whatsappMessage: "Hello Ezhil Hospital & Fertility Centre, I would like to enquire about a fertility consultation.",
  email: "contact@ezhilhospital.com",
  address: "Gopinathampatti Koot Road, Pappireddipatti Taluka, Gobinathampatti, Dharmapuri Dist., Tamil Nadu 636903",
  googleMapsUrl: "https://maps.google.com/?q=Gopinathampatti+Koot+Road+Pappireddipatti+Tamil+Nadu+636903",
  establishedYear: 1998,
};

export const TICKER_ACHIEVEMENTS = [
  { statement: "10,000 surgeries", icon: "Activity", category: "General & Laparoscopic Care" },
  { statement: "over 5,000 fertility successes", icon: "Heart", category: "Dedicated Fertility Care" },
  { statement: "more than 2,000 safe deliveries", icon: "ShieldCheck", category: "24/7 Maternity Support" },
  { statement: "over 150 IVF babies", icon: "Sparkles", category: "Advanced Reproductive Care" }
];

export const MILESTONES: MilestoneItem[] = [
  {
    year: "4th June 1998",
    title: "The Beginning",
    description: "Ezhil Hospital & Fertility Centre began its journey as Senthil Clinic with a vision to provide accessible and compassionate healthcare to the community."
  },
  {
    year: "2001",
    title: "Diagnostic Expansion",
    description: "Expanded services with the introduction of Laboratory, Pharmacy, and ECG services, strengthening patient care."
  },
  {
    year: "2013",
    title: "Senthil Scans Established",
    description: "Launched Senthil Scans, further expanding state-of-the-art diagnostic imaging services."
  },
  {
    year: "2015",
    title: "Transformation to Ezhil Hospital",
    description: "Senthil Clinic evolved into Ezhil Hospital, introducing 24-hour maternity services, sterilisation procedures, laparoscopic hysterectomies, and advanced surgical care."
  },
  {
    year: "2021",
    title: "Ezhil Infertility Centre Established",
    description: "Expanded fertility services with a dedicated seed bank and advanced reproductive techniques including IVF, ICSI, IUI, PGD, and ERA."
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { number: "10,000+", label: "Surgeries Performed", sublabel: "General, laparoscopic & gynaecological surgeries" },
  { number: "5,000+", label: "Successful Infertility Cases", sublabel: "Couples supported on their journey to parenthood" },
  { number: "150+", label: "IVF Babies Born", sublabel: "Including successful twin pregnancies" },
  { number: "2,000+", label: "Deliveries Supported", sublabel: "24-hour compassionate maternity care" },
  { number: "200+", label: "IVF Procedures", sublabel: "With advanced reproductive technology" }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "fertility-consultation",
    title: "Infertility Consultation",
    shortDesc: "Comprehensive evaluation and personalised treatment planning for couples seeking fertility guidance.",
    fullDesc: "Our expert fertility specialists offer empathetic, detailed consultations to evaluate reproductive health, review medical histories, and outline tailored diagnostic and treatment plans.",
    iconName: "UserCheck",
    image: "/images/fertility-hero.jpg",
    path: "/services",
    features: ["Couples Fertility Consultation", "Individualised Assessment", "Medical History Review", "Treatment Roadmap"]
  },
  {
    id: "fertility-evaluation",
    title: "Fertility Evaluation",
    shortDesc: "Comprehensive diagnostic testing for both male and female partners to pinpoint root causes.",
    fullDesc: "Thorough male semen analysis and female hormonal, follicular, ultrasound, and tubal assessments to understand your fertility profile.",
    iconName: "Activity",
    image: "/images/fertility-evaluation.jpg",
    path: "/fertility-evaluation",
    features: ["Semen Analysis", "Hormonal Panel (AMH, FSH, LH)", "Pelvic Ultrasound", "HSG Tubal Evaluation"]
  },
  {
    id: "ovulation-induction",
    title: "Ovulation Induction",
    shortDesc: "Medical support to stimulate egg release for women with ovulatory dysfunction or PCOS.",
    fullDesc: "Targeted medications combined with precise ultrasound monitoring to track follicular development and optimize ovulation timing.",
    iconName: "Sparkles",
    image: "/images/ovulation-induction.jpg",
    path: "/services",
    features: ["Follicular Tracking", "Hormonal Balancing", "PCOS Management", "Optimized Timing Guidance"]
  },
  {
    id: "iui",
    title: "Intrauterine Insemination (IUI)",
    shortDesc: "Minimally invasive fertility procedure placing prepared sperm directly into the uterus.",
    fullDesc: "A safe, outpatient procedure where washed high-motility sperm is carefully introduced into the uterine cavity at the time of ovulation.",
    iconName: "HeartHandshake",
    image: "/images/iui-treatment.jpg",
    path: "/services",
    features: ["Sperm Processing & Washing", "Natural or Stimulated Cycle IUI", "Painless Outpatient Procedure"]
  },
  {
    id: "ivf",
    title: "In Vitro Fertilisation (IVF)",
    shortDesc: "Advanced reproductive technology fertilizing eggs with sperm in a specialized laboratory.",
    fullDesc: "Comprehensive IVF care involving controlled ovarian stimulation, precise egg retrieval, lab fertilisation, and embryo transfer into the uterus.",
    iconName: "Dna",
    image: "/images/ivf-treatment.jpg",
    path: "/services",
    features: ["Controlled Ovarian Stimulation", "Egg Retrieval", "Embryo Culture", "Blastocyst Transfer"]
  },
  {
    id: "icsi",
    title: "Intracytoplasmic Sperm Injection (ICSI)",
    shortDesc: "Specialised IVF technique inserting a single healthy sperm directly into an egg cell.",
    fullDesc: "Ideal for severe male factor infertility or low sperm count/motility, maximizing fertilisation efficiency under high-magnification micromanipulation.",
    iconName: "Microscope",
    image: "/images/icsi-treatment.jpg",
    path: "/services",
    features: ["Micromanipulation Technology", "Severe Male Infertility Care", "Optimized Fertilisation Rates"]
  },
  {
    id: "pgd",
    title: "Preimplantation Genetic Diagnosis (PGD)",
    shortDesc: "Genetic screening of embryos before implantation to identify genetic abnormalities.",
    fullDesc: "Advanced embryonic genetic analysis helping select healthy embryos free of specific genetic conditions prior to transfer.",
    iconName: "ShieldCheck",
    image: "/images/pgd-genetics.jpg",
    path: "/services",
    features: ["Genetic Disorder Screening", "Embryonic Chromosomal Assessment", "Enhanced Transfer Success"]
  },
  {
    id: "era",
    title: "Endometrial Receptivity Analysis (ERA)",
    shortDesc: "Molecular test determining the optimal endometrial window of implantation for IVF.",
    fullDesc: "Determines the exact personalized timing for embryo transfer, particularly helpful in cases of recurrent implantation failure.",
    iconName: "Clock",
    image: "/images/era-receptivity.jpg",
    path: "/services",
    features: ["Personalized Window of Implantation", "Implantation Failure Analysis", "Targeted Embryo Transfer"]
  },
  {
    id: "endometriosis",
    title: "Endometriosis Care",
    shortDesc: "Specialised evaluation and management of pelvic pain, adhesions, and associated infertility.",
    fullDesc: "Diagnostic imaging, medical management, and laparoscopic surgical options designed to relieve pain and preserve reproductive capacity.",
    iconName: "Stethoscope",
    image: "/images/endometriosis.jpg",
    path: "/endometriosis-infertility",
    features: ["Pelvic Pain Management", "Laparoscopic Adhesiolysis", "Ovarian Cyst Removal", "Fertility Preservation"]
  },
  {
    id: "cosmetic-gynaecology",
    title: "Cosmetic Gynaecology",
    shortDesc: "Discreet and respectful care for intimate wellness, post-childbirth changes, and comfort.",
    fullDesc: "Minimally invasive and outpatient solutions addressing urinary leakage, vaginal laxity, dryness, and intimate comfort.",
    iconName: "Smile",
    image: "/images/cosmetic-gynaecology.jpg",
    path: "/cosmetic-gynaecology",
    features: ["Laser Vaginal Rejuvenation", "Urinary Leakage Management", "Post-Childbirth Restoration", "Discreet Outpatient Care"]
  },
  {
    id: "sexual-medicine",
    title: "Male Sexual Health & Medicine",
    shortDesc: "Confidential evaluation for erectile dysfunction, premature ejaculation, and hormonal balance.",
    fullDesc: "Comprehensive male health assessments investigating medical, vascular, hormonal, and lifestyle factors in a confidential clinical setting.",
    iconName: "Shield",
    image: "/images/sexual-medicine.jpg",
    path: "/sexual-medicine",
    features: ["Erectile Dysfunction (ED) Care", "Hormonal & Testosterone Evaluation", "Premature Ejaculation Care", "Penile Doppler Assessment"]
  },
  {
    id: "gynaecology-surgery",
    title: "Gynaecology & Surgical Care",
    shortDesc: "24-hour maternity, laparoscopic hysterectomy, hernia, appendicitis, and surgical care.",
    fullDesc: "Full-spectrum surgical and maternity care including 24-hour emergency delivery, hysterectomy, diagnostic laparoscopy, and hysteroscopy.",
    iconName: "Building2",
    image: "/images/surgical-care.jpg",
    path: "/about",
    features: ["24/7 Maternity & Delivery", "Laparoscopic Hysterectomy", "Diagnostic Hysteroscopy", "Oncology & General Surgery"]
  }
];

export const FEMALE_INFERTILITY_CAUSES = [
  {
    title: "Ovulatory Dysfunction",
    desc: "Problems with regular egg release, resulting in irregular menstrual cycles or anovulation."
  },
  {
    title: "Polycystic Ovary Syndrome (PCOS)",
    desc: "Common hormonal condition causing irregular periods, elevated androgen levels, and follicular imbalance."
  },
  {
    title: "Ovarian Reserve & Age-Related Changes",
    desc: "Natural gradual decline in egg quantity and quality over time influencing fertility potential."
  },
  {
    title: "Thyroid & Prolactin Disorders",
    desc: "Hormonal imbalances (TSH, Prolactin) disrupting normal ovulation and menstrual regularity."
  },
  {
    title: "Endometriosis",
    desc: "Uterine-like tissue growth outside the uterus causing pelvic inflammation, scar tissue, and fallopian tubal distortion."
  }
];

export const MALE_INFERTILITY_CAUSES = [
  {
    title: "Reduced Sperm Quality",
    desc: "Sub-optimal sperm concentration, movement, or structure identified via semen analysis."
  },
  {
    title: "Azoospermia",
    desc: "Absence of sperm in the semen sample due to production failure or reproductive tract blockage."
  },
  {
    title: "Low Sperm Count & Reduced Motility",
    desc: "Lower sperm concentration or reduced ability of sperm to swim effectively toward the egg."
  },
  {
    title: "Abnormal Sperm Morphology",
    desc: "Variations in sperm shape and structural integrity affecting fertilization capacity."
  },
  {
    title: "Varicocele",
    desc: "Enlarged scrotal veins causing elevated testicular temperature and reduced sperm production."
  },
  {
    title: "Hormonal & Ejaculatory Blockages",
    desc: "FSH, LH, or Testosterone imbalances, anatomical blockages, or retrograde ejaculation."
  }
];

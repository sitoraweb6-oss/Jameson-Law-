export interface SpecialtyDetail {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PracticeArea {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  specialties: SpecialtyDetail[];
  commonProblems: string[];
  howWeHelp: string[];
  faqs: FAQItem[];
}

export interface Attorney {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  education: string[];
  experience: string[];
  languages: string[];
  specialties: string[];
  casesHandled: number;
}

export interface CaseResult {
  id: string;
  title: string;
  category: string;
  challenge: string;
  strategy: string;
  outcome: string;
  impact: string;
  clientInitials: string;
  amountSolved?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
  source: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export interface OfficeLocation {
  name: string;
  type: string;
  address: string;
  phone: string;
  mobile: string;
  fax: string;
  email: string;
  hours: string;
  googleMapEmbedUrl?: string;
}

export interface LawShort {
  id: string;
  title: string;
  category: string;
  timeAgo: string;
  imageUrl: string;
  summary: string;
}

// PREMIUM PRE-POPULATED DATA
export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "personal-injury",
    name: "Personal Injury",
    shortDesc: "Comprehensive representation for accident victims on a standard 'No Win No Fee' guarantee. We fight to secure maximum compensation.",
    longDesc: "If you have suffered physical or psychological harm due to the negligence of another, you have a right to full restitution. Our highly specialized personal injury team works tirelessly under strict regulations to ensure insurance firms treat your case with the gravity it demands.",
    iconName: "ShieldAlert",
    specialties: [
      { title: "Workers Compensation", description: "Securing weekly payments, medical expense coverage, and lump sum compensation for work-related physical or mental injuries." },
      { title: "Motor Vehicle Accidents", description: "Advocating for drivers, passengers, pedestrians, or cyclists injured on NSW roads, navigating Compulsory Third Party (CTP) insurance claims." },
      { title: "Public Liability Claims", description: "Compensation for slip, trip, and fall accidents in public spaces, commercial complexes, or private properties due to unsafe conditions." },
      { title: "Medical Negligence", description: "Complex claims for victims of surgical errors, misdiagnosis, delayed treatment, or substandard pharmaceutical care." },
      { title: "Product Liability Claims", description: "Claims against manufacturers, retailers, or importers for harm caused by defective, hazardous, or malfunctioning consumer goods." },
      { title: "Victims of Crime Compensation", description: "Securing government compensation and counseling services support for survivors of violent offenses." }
    ],
    commonProblems: [
      "Insurers rejecting your claim or trying to terminate weekly payments early.",
      "Vague calculations of your Whole Person Impairment (WPI) threshold.",
      "Delaying medical approval for necessary surgeries, scans, or rehabilitation.",
      "Anxiety about hidden costs and upfront fees while unable to work."
    ],
    howWeHelp: [
      "No Win No Fee Commitment: You do not pay any of our professional legal fees unless we win your compensation case.",
      "Full Case Valuation: We instruct top independent medical experts to accurately assess your physical and mental injuries.",
      "Aggressive Dispute Resolution: We bypass lowball settlement offers and prosecute claims through the Personal Injury Commission."
    ],
    faqs: [
      {
        question: "How long do I have to make a Personal Injury claim in NSW?",
        answer: "Strict time limits apply. Generally, motor vehicle accidents and public accidents should be reported within 28 days, and formal claims lodged within 3 years of the accident date. It is critical to contact us immediately to safeguard your rights."
      },
      {
        question: "What does 'No Win No Fee' actually mean?",
        answer: "It means we will not charge any professional legal fees unless your case succeeds. If we do not win, our professional service fee is completely waived. Disbursements (like medical reports) are discussed transparently upfront."
      },
      {
        question: "How much compensation can I expect?",
        answer: "Every case is completely unique. Compensation can include economic loss (past and future lost wages), medical expenses, domestic care assistance, and non-economic loss (for pain and suffering if your Whole Person Impairment meets the statutory threshold)."
      }
    ]
  },
  {
    id: "criminal-law",
    name: "Criminal Law & AVO",
    shortDesc: "Strong defense and meticulous advocacy in all criminal trials, traffic offenses, and Apprehended Violence Order (AVO) matters.",
    longDesc: "A criminal charge can threaten your liberty, livelihood, and reputation. Our elite criminal law barristers and solicitors approach every single charge with aggressive curiosity, seeking loopholes, pleading mitigating factors, and defending your rights vigorously.",
    iconName: "Scale",
    specialties: [
      { title: "Assault Charges", description: "Defending common assault, assault occasioning actual bodily harm (AOABH), and grievous bodily harm (GBH) offenses." },
      { title: "Drug Offences", description: "Defense for possession, supply, importation, and drug manufacture offenses, challenging search warrants and evidence admissibility." },
      { title: "Traffic & Licence Appeals", description: "Representation for high-range drink driving (PCA), drug driving, driving while suspended, and immediate police suspension appeals." },
      { title: "AVO Representation", description: "Actively prosecuting or defending domestic and personal Apprehended Violence Orders to protect families and careers." },
      { title: "Bail Applications", description: "Urgent bail hearings in the Local, District, or Supreme Courts to secure early release from custody." }
    ],
    commonProblems: [
      "Police conducting unlawful searches or relying on weak circumstantial evidence.",
      "Facing an immediate driver license suspension, putting your employment at risk.",
      "Severe or disproportionate sentencing proposals by the prosecution.",
      "Unfairly served AVO conditions restricting travel or access to properties."
    ],
    howWeHelp: [
      "Rigorous Forensic Analysis: We carefully tear down police briefs, challenging witness credibility, bodycam footage, and procedural flaws.",
      "Expert Representation in Court: Our solicitors appear daily in courts across NSW, knowing the magistrates and exactly how to frame arguments.",
      "Focus on Plea Bargaining: Where appropriate, we negotiate with police prosecutors to downgrade serious charges to lesser offenses."
    ],
    faqs: [
      {
        question: "What should I do if the police want to interview me?",
        answer: "You have the right to remain silent. Politely decline to answer any substantive questions until our criminal law solicitor is present. Anything you say can and will be used as evidence."
      },
      {
        question: "Can I appeal an immediate police license suspension?",
        answer: "Yes, but you must lodge an appeal with the Local Court within 28 days of receiving the suspension notice. We specialize in proving 'exceptional circumstances' to get you back on the road."
      }
    ]
  },
  {
    id: "family-law",
    name: "Family Law & Divorce",
    shortDesc: "Empathetic, clear, and strategic counsel to guide you through property settlements, divorce, and parenting arrangements.",
    longDesc: "Family law disputes are deeply personal and emotional. We focus on protecting your children's welfare and securing your fair share of marital assets while minimizing unnecessary court litigation and conflict.",
    iconName: "HeartHandshake",
    specialties: [
      { title: "Divorce Proceedings", description: "Navigating the legal dissolution of marriage, addressing separation criteria and international marriage issues." },
      { title: "Property Division", description: "Meticulous asset-pool tracing, assessing financial contributions, and structuring fair property settlement agreements." },
      { title: "Parenting Arrangements", description: "Establishing stable custody, shared parenting agreements, and child support programs focused on the best interests of your children." },
      { title: "Binding Financial Agreements", description: "Drafting robust pre-nuptial and post-nuptial agreements to safeguard personal and family wealth." }
    ],
    commonProblems: [
      "Ex-partners hiding joint assets, business equity, or superannuation balances.",
      "Highly toxic disputes regarding sole custody or parental responsibility.",
      "Protracted negotiations escalating legal costs without reaching agreements."
    ],
    howWeHelp: [
      "Alternative Dispute Resolution: We prioritize mediation and round-table conferences to resolve assets and parenting without going to court.",
      "Superannuation Splitting: We coordinate forensic accountants to trace complex trust holdings, self-managed super funds, and international assets."
    ],
    faqs: [
      {
        question: "Do I have to go to court to divide our assets?",
        answer: "No. Over 90% of our family law cases are resolved out of court via Consent Orders or Binding Financial Agreements, saving you thousands of dollars."
      }
    ]
  },
  {
    id: "conveyancing",
    name: "Conveyancing & Property",
    shortDesc: "Fast-tracked and meticulous property transactions for buyers, sellers, developers, and commercial investors.",
    longDesc: "Real estate in Sydney is high-stakes. Whether buying your first apartment, selling a family home, or managing a major commercial lease, we review every word in contracts to insulate you from hidden liabilities.",
    iconName: "Home",
    specialties: [
      { title: "Residential Buying & Selling", description: "Complete conveyancing process using PEXA, conducting title searches, land tax checks, and contract reviews." },
      { title: "Commercial Leasing", description: "Drafting, reviewing, and negotiating retail or commercial lease agreements for landlords and business tenants." },
      { title: "Off-the-Plan Purchases", description: "De-risking complex contracts, addressing sunset clauses, defective work protections, and developer delays." }
    ],
    commonProblems: [
      "Discovering illegal structural alterations after signing the contract.",
      "Unreasonable penalty interest fees due to sudden bank delays on settlement day.",
      "Losing significant deposits due to unfavorable cooling-off terms."
    ],
    howWeHelp: [
      "Urgent Contract Reviews: We inspect your contract of sale within 2 hours of receipt, highlighting red flags.",
      "PEXA Digital Settlement: We conduct electronic settlements for absolute security and real-time bank funds transfer."
    ],
    faqs: [
      {
        question: "What is the cooling-off period in NSW?",
        answer: "In NSW, there is a standard 5 business day cooling-off period for residential purchases, which can be extended or waived using a 66W certificate. We advise on the strategic advantages of both options."
      }
    ]
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: "maryanne-fares",
    name: "Maryanne Fares",
    role: "Senior Solicitor - Personal Injury",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "Maryanne specializes in complex motor vehicle and public liability claims. She is renowned for her relentless litigation style and deep empathy for injured clients. With over 12 years of specialized compensation experience in NSW, she has successfully recovered over $35M in client payouts.",
    education: [
      "Bachelor of Laws (LL.B.) - University of Sydney",
      "Graduate Diploma in Legal Practice - College of Law"
    ],
    experience: [
      "Lead Solicitor - Personal Injury Department, Jameson Law",
      "Senior Litigator - Top-tier National Injury Practice"
    ],
    languages: ["English", "Arabic"],
    specialties: ["Workers Compensation", "CTP Claims", "Public Liability"],
    casesHandled: 840
  },
  {
    id: "conchita-de-souza",
    name: "Conchita de Souza",
    role: "Principal Solicitor - Criminal Defense",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    bio: "Conchita is an expert advocate who appears daily in NSW Local, District, and Supreme Courts. She specializes in challenging police evidence and securing outstanding outcomes in complex drug, traffic, and violent offense charges.",
    education: [
      "Master of Laws (LL.M.) in Criminal Prosecutions - UNSW",
      "Bachelor of Laws (LL.B.) (Honours) - Macquarie University"
    ],
    experience: [
      "Senior Defense Counsel - NSW Legal Aid & Criminal Defense Panel",
      "Senior Solicitor - Jameson Law"
    ],
    languages: ["English", "Portuguese", "Spanish"],
    specialties: ["White Collar Crime", "Serious Drug supply", "Bail Hearings", "Traffic appeals"],
    casesHandled: 1200
  },
  {
    id: "agnes-hernandez",
    name: "Agnes Hernandez",
    role: "Senior Associate - Family Law",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800",
    bio: "Agnes focuses on high-net-worth property divisions and complex child custody arrangements. She brings a calm, balanced perspective to stressful disputes, striving for cooperative settlement while remaining prepared to litigate fiercely in the Federal Circuit Court.",
    education: [
      "Bachelor of Laws (LL.B.) / Bachelor of Arts - UTS Sydney",
      "Accredited Family Law Specialist - NSW Law Society"
    ],
    experience: [
      "Family Law Specialist Advocate - Jameson Law",
      "Legal Advisor - Family Court of Australia Advisory"
    ],
    languages: ["English", "Tagalog"],
    specialties: ["Property Division", "Child Custody", "Binding Financial Agreements"],
    casesHandled: 670
  }
];

export const CASE_RESULTS: CaseResult[] = [
  {
    id: "res-1",
    title: "Major Motorway Collision Settlement",
    category: "Personal Injury (CTP)",
    challenge: "A driver suffered severe neurological and orthopedic injuries in a multi-vehicle highway crash. The insurer disputed liability, alleging our client's pre-existing spinal conditions caused the issues.",
    strategy: "Solicitor Maryanne Fares commissioned MRI-contrast diagnostics and forensic mechanical engineering collision modeling to mathematically isolate the impact forces and confirm direct causation.",
    outcome: "Full liability was conceded by the insurer just 48 hours before the scheduled Supreme Court hearing.",
    impact: "Secured a massive $2,450,000 lump sum settlement covering lifelong care, home modifications, and economic damages.",
    clientInitials: "S.T.",
    amountSolved: "$2,450,000"
  },
  {
    id: "res-2",
    title: "Supply Charge Dropped at Committal",
    category: "Criminal Defense",
    challenge: "Our client was falsely accused of commercial drug supply after being caught in a vehicle with another individual carrying drugs. He faced a mandatory minimum prison sentence.",
    strategy: "Conchita de Souza subpoenaed phone records and encrypted chat logs to prove our client had no knowledge of the hidden substance, exposing fatal flaws in the police's constructive possession argument.",
    outcome: "The Director of Public Prosecutions (DPP) formally withdrew all charges prior to committal.",
    impact: "The client avoided jail time, maintained a clean record, and returned to his corporate management role.",
    clientInitials: "M.K."
  },
  {
    id: "res-3",
    title: "Complex Multi-Entity Property Allocation",
    category: "Family Law",
    challenge: "A matrimonial asset division involving a family farm, three commercial retail centers held under corporate trusts, and an offshore investment fund.",
    strategy: "Agnes Hernandez directed a comprehensive corporate search and instructed forensic accountants to trace capital injections, showing the spouse had undervalued their holdings by millions.",
    outcome: "Resolved in mediation without entering a trial.",
    impact: "Negotiated a binding consent order awarding our client a 62% share of the overall $8.2M asset pool.",
    clientInitials: "D.G.",
    amountSolved: "$5,084,000"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Sally Tannous",
    rating: 5,
    content: "Thank you Maryanne for all your help. You have been so professional and empathetic with this difficult matter from the get go. You achieved a fantastic payout under very stressful circumstances. Highly recommend Jameson Law!",
    date: "2026-06-15",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "t2",
    author: "Danielle Gousteris",
    rating: 5,
    content: "Excellent outcome from this firm. Nora Sayed is a thorough and meticulous lawyer with attention to detail. She worked tirelessly and got the best possible outcome for our commercial leasing dispute. Incredible communication throughout.",
    date: "2026-06-20",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "t3",
    author: "Suresh Iyengar",
    rating: 5,
    content: "Mr. Cooper Hayes is an excellent Lawyer with legal expertise and represented me in Court very professionally for a win win outcome. Cooper is very easy to talk to, supportive, and extremely clear on pricing.",
    date: "2026-06-28",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "t4",
    author: "Natalie Stevenson",
    rating: 5,
    content: "Nora was personable and understanding with our situation. She worked closely with us and represented me with expertise and confidence - and we got a 100% win on our workers compensation appeal. Five stars all the way!",
    date: "2026-07-02",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "t5",
    author: "Sayed Najeebullah",
    rating: 5,
    content: "Great lawyer Cooper Hayes was professional, easy to talk to, and explained everything clearly. He kept me updated throughout and got me a good result. My criminal traffic charges were completely dismissed by the magistrate.",
    date: "2026-06-10",
    verified: true,
    source: "Google Reviews"
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "art-1",
    title: "Temporary Visa Australia Requirements: Key Criteria and Timelines",
    category: "Immigration",
    excerpt: "Discover Australia's temporary visa requirements, crucial pathways, and key timelines to guide your application process successfully.",
    content: "Australia's immigration landscape is dynamic and requires precision. Recent changes in the temporary activity visas have updated requirements. In this comprehensive guide, our senior immigration solicitors explain key criteria, standard processing delays, health insurance requirements, and how to transition from work Visas to permanent residency (PR). Ensure you do not submit faulty documents, which trigger immediate refusals with zero refund.",
    readTime: "6 min read",
    date: "June 24, 2026",
    author: "Nora Sayed",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
    tags: ["Visa", "PR", "Immigration Law"]
  },
  {
    id: "art-2",
    title: "How to Lodge Visa: A Practical NSW Guide",
    category: "Immigration",
    excerpt: "Learn how to lodge a visa in NSW with our step-by-step guide. Get practical tips and clear requirements for your visa journey.",
    content: "Lodging a visa with the Department of Home Affairs can feel incredibly overwhelming. In this practical guide, we walk you through document translation certifications, certified identity records, proving financial capacities, and using a registered migration lawyer to circumvent automated screening rejections.",
    readTime: "5 min read",
    date: "July 1, 2026",
    author: "Jameson Advisory Team",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    tags: ["Lodge Visa", "Immigration Guide"]
  },
  {
    id: "art-3",
    title: "Slip Fall NSW Claim: How to Make a Successful Injury Claim",
    category: "Personal Injury",
    excerpt: "Understand your slip fall NSW claim rights, gather crucial evidence, and learn steps to build a strong personal injury case.",
    content: "Did you know that public accidents in retail centers or footpaths are heavily contested? To win a slip and fall public liability claim in NSW, you must prove the landlord had knowledge of the active hazard and neglected to take reasonable precautions. Learn about compiling incident reports, securing CCTV surveillance tapes, and recording witnesses on-site.",
    readTime: "8 min read",
    date: "July 5, 2026",
    author: "Maryanne Fares",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    tags: ["Slip and Fall", "Compensation", "Public Liability"]
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    name: "Parramatta CBD (Head Office)",
    type: "Head Office",
    address: "Suite 301, 67-69 Philip St, Parramatta NSW 2150",
    phone: "1800 826 895",
    mobile: "0488 817 882",
    fax: "02 9052 0840",
    email: "info@jamesonlaw.com.au",
    hours: "Mon - Fri: 8:30 AM - 6:00 PM (Emergency 24/7)",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1970222384666!2d151.00632317637845!3d-33.80720497324838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a319f395d851%3A0xe1048b26f59c836a!2sJAMESON%20LAW!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
  },
  {
    name: "Sydney CBD Office",
    type: "Practice Office",
    address: "Level 14, 135 King St, Sydney NSW 2000",
    phone: "1800 826 895",
    mobile: "0488 817 882",
    fax: "02 9052 0840",
    email: "sydney@jamesonlaw.com.au",
    hours: "By Appointment Only"
  },
  {
    name: "Blacktown CBD Office",
    type: "Practice Office",
    address: "Suite 2, 12 Main St, Blacktown NSW 2148",
    phone: "1800 826 895",
    mobile: "0488 817 882",
    fax: "02 9052 0840",
    email: "blacktown@jamesonlaw.com.au",
    hours: "By Appointment Only"
  },
  {
    name: "Liverpool CBD Office",
    type: "Practice Office",
    address: "Level 2, 224 George St, Liverpool NSW 2170",
    phone: "1800 826 895",
    mobile: "0488 817 882",
    fax: "02 9052 0840",
    email: "liverpool@jamesonlaw.com.au",
    hours: "By Appointment Only"
  },
  {
    name: "Bankstown CBD Office",
    type: "Practice Office",
    address: "Suite 5, 40-42 Jacobs St, Bankstown NSW 2200",
    phone: "1800 826 895",
    mobile: "0488 817 882",
    fax: "02 9052 0840",
    email: "bankstown@jamesonlaw.com.au",
    hours: "By Appointment Only"
  }
];

export const LAW_SHORTS: LawShort[] = [
  {
    id: "short-1",
    title: "FIRED ON A WORK VISA?",
    category: "Immigration Rights",
    timeAgo: "a month ago",
    imageUrl: "https://images.unsplash.com/photo-1521791136364-72861c690488?auto=format&fit=crop&q=80&w=500",
    summary: "You have exactly 60 days to secure a new sponsor or apply for a different visa class before facing standard cancellation protocols."
  },
  {
    id: "short-2",
    title: "FASTEST PATH TO PR",
    category: "Skilled Migration",
    timeAgo: "a month ago",
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=500",
    summary: "Targeting state-nominated regional visa streams (190 and 491 subclasses) provides dramatic priority points increases."
  },
  {
    id: "short-3",
    title: "STUDENT VISA FEES DOUBLED!",
    category: "Education Law",
    timeAgo: "a month ago",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=500",
    summary: "The federal government's fee hike is active. Learn the options to minimize cost impacts and prevent applications being flagged."
  },
  {
    id: "short-4",
    title: "THREATS CAN BE ASSAULT",
    category: "Criminal Law",
    timeAgo: "2 months ago",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500",
    summary: "In NSW, putting someone in immediate fear of physical violence constitutes common assault—no actual touching is required."
  }
];

export const COURT_HOUSES = [
  {
    name: "Local Courts",
    details: "Parramatta, Sydney Downing Centre, Blacktown, Liverpool, Bankstown. Handling bail, traffic trials, committals, and lighter charges."
  },
  {
    name: "District Courts",
    details: "Sydney District Court, Parramatta District Court. Serious trials, appeals from local court decisions, and large commercial lawsuits."
  },
  {
    name: "Supreme Courts",
    details: "NSW Supreme Court (Queens Square). Complex murder cases, high-value commercial litigation ($750k+), and constitutional challenges."
  },
  {
    name: "Federal Court",
    details: "Federal Court of Australia (Queens Square). Complex migration appeals, consumer protection litigation, and federal industrial disputes."
  },
  {
    name: "Specialised Courts",
    details: "NSW Land and Environment Court, Children's Court of NSW, Drug Court of NSW (therapeutic justice programs)."
  }
];

export interface Product {
  id: string;
  name: string;
  casNo: string;
  category: 'pharmaceutical' | 'cosmetic' | 'chemical';
  categoryLabel: string;
  purity: string;
  grade: string;
  formula: string;
  appearance: string;
  application: string;
  featured?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  readTime: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  responsibilities: string[];
  requirements: string[];
}

export const COMPANY_INFO = {
  nameEn: 'Nanjing Liyang Biotech Co., Ltd.',
  nameZh: '南京立阳生物科技有限公司',
  tagline: 'Pioneering Purity in Bio-Chemicals, APIs & Cosmetic Actives',
  description: 'Nanjing Liyang Biotech Co., Ltd. is an innovative bio-chemical enterprise specializing in the R&D, manufacturing, and global distribution of high-purity pharmaceutical intermediates, active cosmetic ingredients, and fine chemical raw materials.',
  foundedYear: '2016',
  headquarters: 'Jiangbei New Area High-Tech Industrial Park, Nanjing, Jiangsu Province, China',
  email: 'sales@liyang-biotech.com',
  exportEmail: 'export@liyang-biotech.com',
  phone: '+86 25 8699 3820',
  hotline: '+86 189 5188 9200',
  stats: [
    { label: 'Global Export Markets', value: '45+' },
    { label: 'Standard Reactor Capacity', value: '8,000L' },
    { label: 'Active Catalog Products', value: '320+' },
    { label: 'Quality Acceptance Rate', value: '99.8%' },
  ],
  certifications: [
    { name: 'ISO 9001:2015', desc: 'Quality Management System' },
    { name: 'GMP Standard', desc: 'Active Pharmaceutical Cleanrooms' },
    { name: 'REACH Compliant', desc: 'EU Chemical Regulatory Standards' },
    { name: 'Halal & Kosher', desc: 'Certified Cosmetic & Food Grades' },
  ],
};

export const PRODUCTS: Product[] = [
  {
    id: 'ectoine',
    name: 'Ectoine (Natural Extremolyte)',
    casNo: '96702-03-3',
    category: 'cosmetic',
    categoryLabel: 'Cosmetic Active Ingredients',
    purity: '≥ 99.0%',
    grade: 'Cosmetic / Dermatological',
    formula: 'C6H10N2O2',
    appearance: 'White crystalline powder',
    application: 'Cellular protection, intense hydration, anti-photoaging, barrier repair serums and creams.',
    featured: true,
  },
  {
    id: 'ergothioneine',
    name: 'L-Ergothioneine (EGT)',
    casNo: '497-30-3',
    category: 'cosmetic',
    categoryLabel: 'Cosmetic Active Ingredients',
    purity: '≥ 99.5%',
    grade: 'Cosmetic / Bio-Tech Grade',
    formula: 'C9H15N3O2S',
    appearance: 'White to off-white powder',
    application: 'Ultra-potent cellular antioxidant, mitochondrial vitality protector, advanced anti-aging formulations.',
    featured: true,
  },
  {
    id: 'alpha-arbutin',
    name: 'Alpha-Arbutin',
    casNo: '84380-01-8',
    category: 'cosmetic',
    categoryLabel: 'Cosmetic Active Ingredients',
    purity: '≥ 99.5%',
    grade: 'Cosmetic Grade',
    formula: 'C12H16O7',
    appearance: 'Fine white crystalline powder',
    application: 'Tyrosinase inhibitor, skin brightening, hyperpigmentation correction, tone-evening skincare.',
    featured: false,
  },
  {
    id: 'gaba',
    name: 'Gamma-Aminobutyric Acid (GABA)',
    casNo: '56-12-2',
    category: 'pharmaceutical',
    categoryLabel: 'Pharmaceutical Intermediates',
    purity: '≥ 99.0%',
    grade: 'Pharma / Food Grade',
    formula: 'C4H9NO2',
    appearance: 'White crystal powder',
    application: 'Neurotransmitter precursor, central nervous system intermediate, functional nootropic formulations.',
    featured: true,
  },
  {
    id: 'n-acetylneuraminic-acid',
    name: 'N-Acetylneuraminic Acid (Sialic Acid)',
    casNo: '131-48-6',
    category: 'pharmaceutical',
    categoryLabel: 'Pharmaceutical Intermediates',
    purity: '≥ 98.5%',
    grade: 'Pharma / Biotech Grade',
    formula: 'C11H19NO9',
    appearance: 'White crystalline powder',
    application: 'Antiviral drug synthesis intermediate, cell surface glycoprotein research, immune nutrition.',
    featured: true,
  },
  {
    id: 'bakuchiol',
    name: 'Bakuchiol (Natural Retinol Alternative)',
    casNo: '10309-37-2',
    category: 'cosmetic',
    categoryLabel: 'Cosmetic Active Ingredients',
    purity: '≥ 98.0%',
    grade: 'Cosmetic Grade',
    formula: 'C18H24O',
    appearance: 'Pale yellow to amber viscous oil',
    application: 'Plant-derived anti-wrinkle active, non-irritating collagen booster, sensitive skin retinol replacement.',
    featured: false,
  },
  {
    id: 'piperazine-anhydrous',
    name: 'Piperazine Anhydrous',
    casNo: '110-85-0',
    category: 'chemical',
    categoryLabel: 'Chemical Raw Materials',
    purity: '≥ 99.5%',
    grade: 'Industrial / Reagent Grade',
    formula: 'C4H10N2',
    appearance: 'White crystalline flakes',
    application: 'Key intermediate for anthelmintics, polyamide resins, specialty corrosion inhibitors, and catalysts.',
    featured: true,
  },
  {
    id: 'sodium-hyaluronate-oligo',
    name: 'Oligo Sodium Hyaluronate (< 10 kDa)',
    casNo: '9067-32-7',
    category: 'cosmetic',
    categoryLabel: 'Cosmetic Active Ingredients',
    purity: '≥ 95.0% Glucuronic Acid',
    grade: 'Cosmetic / Medical Grade',
    formula: '(C14H20NNaO11)n',
    appearance: 'White powder or granules',
    application: 'Transdermal deep hydration, endogenous HA production stimulation, post-procedure skin calming.',
    featured: false,
  },
  {
    id: 'chiral-cyclopropane-ester',
    name: 'Ethyl 2-(4-fluorophenyl)cyclopropanecarboxylate',
    casNo: '325724-47-0',
    category: 'pharmaceutical',
    categoryLabel: 'Pharmaceutical Intermediates',
    purity: '≥ 99.0% (Chiral ee > 99%)',
    grade: 'Pharma Synthesis Grade',
    formula: 'C12H13FO2',
    appearance: 'Colorless to light yellow oil',
    application: 'Core chiral building block for cardiovascular and neuropsychiatric clinical candidate molecules.',
    featured: false,
  },
  {
    id: 'dimethyl-sulfoxide-pharma',
    name: 'Dimethyl Sulfoxide (DMSO - High Purity)',
    casNo: '67-68-5',
    category: 'chemical',
    categoryLabel: 'Chemical Raw Materials',
    purity: '≥ 99.9%',
    grade: 'Pharma / Synthesis Grade',
    formula: 'C2H6OS',
    appearance: 'Clear colorless liquid',
    application: 'Universal reaction solvent, crystallization media, cryopreservation agent, active delivery enhancer.',
    featured: false,
  },
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: '1',
    title: 'Liyang Biotech Commissioned 5,000L Automated Reactor Line for Cosmetic Actives',
    date: 'August 18, 2026',
    category: 'Infrastructure & Tech',
    summary: 'The new multi-functional intelligent synthesis workshop adheres to Class 100,000 cleanroom criteria, doubling annual output for high-purity Ectoine and Ergothioneine.',
    readTime: '3 min read',
  },
  {
    id: '2',
    title: 'Successful Delivery of Customized Intermediate Batch to European Pharma Partner',
    date: 'July 04, 2026',
    category: 'Global Trade',
    summary: 'Our GMP-compliant chiral synthesis team completed a 2-ton scale-up synthesis meeting stringent REACH compliance and enantiomeric purity exceeding 99.6%.',
    readTime: '4 min read',
  },
  {
    id: '3',
    title: 'Liyang Biotech Showcased Green Synthesis Innovations at CPHI China 2026',
    date: 'June 22, 2026',
    category: 'Exhibitions',
    summary: 'Over 200 international buyers and formulation scientists visited our booth to discuss bio-fermentation active ingredients and sustainable fine chemical supply chains.',
    readTime: '2 min read',
  },
];

export const FACTORY_FEATURES = [
  {
    title: 'Modern Synthesis Workshops',
    metric: '12,000 m²',
    desc: 'Equipped with 500L to 8,000L glass-lined, stainless steel 316L, and Hastelloy reactors capable of -80°C to +250°C and 5MPa high-pressure reactions.',
  },
  {
    title: 'Class 100,000 Cleanrooms',
    metric: '2,400 m²',
    desc: 'Fully validated HVAC cleanroom suites dedicated to cosmetic active ingredients crystallization, drying, micronization, and aseptic packaging.',
  },
  {
    title: 'Analytical & QC Center',
    metric: 'Agilent / Waters',
    desc: 'Equipped with Agilent HPLC, GC-MS, FTIR, Polarimeter, UV-Vis spectrometers, and Karl Fischer moisture titrators to guarantee rigorous COA accuracy.',
  },
  {
    title: 'EHS & Sustainable Chemistry',
    metric: 'Zero Compromise',
    desc: 'Advanced RTO (Regenerative Thermal Oxidizer) exhaust gas treatment, biological wastewater processing, and ISO 14001 environmental conformity.',
  },
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Overseas Technical Sales Manager (Europe & North America)',
    department: 'International Business Dept.',
    location: 'Nanjing HQ (Global Travel)',
    type: 'Full-time',
    experience: '3+ years in chemical / API foreign trade',
    responsibilities: [
      'Expand B2B direct accounts among European and American pharmaceutical and cosmetic manufacturers.',
      'Represent Liyang Biotech at international trade fairs such as CPHI Worldwide, in-cosmetics, and Chemspec.',
      'Coordinate technical documentation (COA, MSDS, DMF, REACH registration dossiers) with global procurement teams.',
    ],
    requirements: [
      'Bachelor’s or Master’s in Chemistry, Chemical Engineering, Pharmacy, or International Trade.',
      'Fluent spoken and written English; proficiency in German, French, or Spanish is an asset.',
      'Proven track record in fine chemicals, intermediates, or functional active ingredients export.',
    ],
  },
  {
    id: 'job-2',
    title: 'Organic Synthesis Senior R&D Chemist',
    department: 'R&D Innovation Lab',
    location: 'Nanjing R&D Center',
    type: 'Full-time',
    experience: '4+ years in synthetic chemistry or process development',
    responsibilities: [
      'Design and optimize synthetic routes for new cosmetic actives and custom pharmaceutical intermediates.',
      'Conduct laboratory gram-to-kilogram route development and transfer validated protocols to pilot plant scale.',
      'Troubleshoot process safety, reaction yields, and cost reduction in pilot production.',
    ],
    requirements: [
      'Master’s or Ph.D. in Organic Chemistry, Medicinal Chemistry, or Applied Chemistry.',
      'Solid expertise in multistep organic synthesis, catalytic reactions, and spectrum analysis (NMR, MS, HPLC).',
    ],
  },
  {
    id: 'job-3',
    title: 'QC / QA Analytical Specialist',
    department: 'Quality Assurance Dept.',
    location: 'Factory Site (Nanjing)',
    type: 'Full-time',
    experience: '2+ years in chemical/pharma laboratory testing',
    responsibilities: [
      'Execute analytical testing for raw materials, in-process samples, and finished batch release via HPLC and GC.',
      'Draft and review Certificates of Analysis (COA), stability study protocols, and method validation reports.',
      'Maintain standard laboratory operating procedures in strict accordance with ISO 9001 and GMP requirements.',
    ],
    requirements: [
      'Bachelor’s degree in Analytical Chemistry, Pharmaceutical Analysis, or related discipline.',
      'Proficient in chromatography data systems (ChemStation/Empower) and analytical instrument maintenance.',
    ],
  },
];

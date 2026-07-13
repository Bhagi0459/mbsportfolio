import type {
  CaseStudy,
  Certification,
  ContactLink,
  ExperienceEntry,
  InsightPost,
  MarketplaceProfile,
  ServiceOffer,
  SkillGroup,
} from '../models/portfolio.models';

export const RESUME_URL = '/resumes/resume.pdf';

export const IDENTITY = {
  name: 'Bhagya Sankar Maddela',
  role: 'Senior Angular Developer',
  positioning: 'Enterprise Angular applications, Power BI dashboards, and legacy modernization across healthcare, financial services, and business administration domains.',
  location: 'Hyderabad, India',
  availability: 'Open to new opportunities',
  yearsExperience: 5,
} as const;

export const ABOUT_PARAGRAPHS: readonly string[] = [
  "I'm a Senior Angular Developer with 5+ years building enterprise web applications across US healthcare, financial-services, and business administration organizations. My core strength is Angular — including Signals and Standalone Components — paired with TypeScript, RxJS, and Angular Material/PrimeNG for polished, data-heavy interfaces.",
  'Recent work includes large Electronic Medical Record (EMR) modules, metadata-driven dynamic form builders that render forms and validation logic directly from database configuration, and Power BI dashboards embedded inside Angular applications. I also work directly against .NET REST APIs and SQL Server, and have migrated legacy .NET and VB-based interfaces to modern Angular.',
  'Outside of client work, I ship personal projects end to end — see Nimbus AI below — and write about the Angular internals I use day to day.',
];

export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    role: 'Senior Software Programmer',
    org: 'CommerzTech India Pvt Ltd',
    period: 'Sep 2024 — Present',
    current: true,
    summary:
      'Sole Angular developer for enterprise healthcare applications, owning frontend architecture end to end.',
    highlights: [
      'Built and maintain Electronic Medical Record (EMR) modules used by healthcare providers',
      'Designed Power BI dashboards and DAX measures, embedded directly inside Angular applications',
      'Developed SQL Server stored procedures supporting operational and reporting requirements',
      'Integrated Angular applications with .NET REST APIs',
    ],
    stack: ['Angular', 'TypeScript', 'Power BI', 'DAX', 'SQL Server', '.NET REST API'],
  },
  {
    role: 'Software Programmer',
    org: 'Sorano Technologies Pvt Ltd',
    period: 'May 2021 — Jul 2024',
    current: false,
    summary:
      'Built enterprise Angular applications spanning healthcare administration and financial systems modernization.',
    highlights: [
      'Designed metadata-driven dynamic form builders using Angular Reactive Forms — controls, validation, and workflow rendered from database configuration',
      'Migrated a legacy VB-based financial/stock portfolio system (PRISM) to a modern Angular front end',
      'Built reusable component libraries with Angular Material and PrimeNG',
      'Participated in modernization initiatives migrating legacy .NET interfaces to Angular',
      'Contributed to React and Next.js based internal applications',
    ],
    stack: ['Angular', 'Reactive Forms', 'Angular Material', 'PrimeNG', 'REST APIs', 'React', 'Next.js'],
  },
];

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Core Frontend',
    items: [
      { name: 'Angular', weight: 5 },
      { name: 'TypeScript', weight: 5 },
      { name: 'RxJS', weight: 4 },
      { name: 'Signals', weight: 4 },
      { name: 'Standalone Components', weight: 4 },
      { name: 'HTML5', weight: 4 },
      { name: 'SCSS', weight: 4 },
    ],
  },
  {
    id: 'ui',
    title: 'UI Engineering',
    items: [
      { name: 'Angular Material', weight: 4 },
      { name: 'PrimeNG', weight: 4 },
      { name: 'Reactive / Dynamic Forms', weight: 5 },
    ],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    items: [
      { name: 'Power BI', weight: 4 },
      { name: 'DAX', weight: 4 },
      { name: 'SQL Server', weight: 4 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Integration',
    items: [
      { name: '.NET REST APIs', weight: 4 },
      { name: 'Node.js', weight: 3 },
      { name: 'Express.js', weight: 3 },
    ],
  },
  {
    id: 'also',
    title: 'Also Building In',
    items: [
      { name: 'React', weight: 2 },
      { name: 'Next.js', weight: 2 },
    ],
  },
  {
    id: 'workflow',
    title: 'Workflow',
    items: [
      { name: 'Git', weight: 4 },
      { name: 'GitHub Actions', weight: 4 },
      { name: 'Agile / Scrum', weight: 3 },
      { name: 'Postman', weight: 3 },
    ],
  },
];

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: 'nimbus-ai',
    title: 'Nimbus AI',
    tagline: 'AI-powered weather intelligence platform',
    kind: 'Personal project',
    status: 'Live',
    problem:
      'Build a self-directed, production-grade Angular application from scratch — architecture, backend middleware, and deployment — to prove out the newest Angular patterns beyond client work.',
    contribution:
      'Designed and built the full stack: an Angular 19 frontend using Standalone Components and Signals-based state management, and an Express.js middleware layer handling secure communication with the Groq API for AI-generated weather insights.',
    stack: ['Angular 19', 'Signals', 'Standalone Components', 'Express.js', 'Groq API', 'Vercel', 'Render', 'GitHub Actions'],
    links: [
      { label: 'Live demo', href: 'https://nimbus-ai-phi.vercel.app/' },
      { label: 'Source', href: 'https://github.com/Bhagi0459/nimbus-ai' },
    ],
    featured: true,
  },
  {
    id: 'gold-coast-health-plan',
    title: 'Gold Coast Health Plan',
    tagline: 'Healthcare administration platform, Angular 16',
    kind: 'Enterprise',
    org: 'Sorano Technologies',
    status: 'Internal',
    problem:
      "The health plan's administration workflows needed a modern, maintainable Angular front end.",
    contribution:
      'Built and maintained Angular 16 modules supporting the platform\'s day-to-day administration workflows.',
    stack: ['Angular 16', 'Administration'],
    links: [],
    featured: false,
  },
  {
    id: 'custom-point',
    title: 'Custom Point',
    tagline: 'Legacy .NET UI migrated to Angular 16',
    kind: 'Enterprise',
    org: 'Sorano Technologies',
    status: 'Internal',
    problem:
      'A legacy .NET user interface in the administration domain needed modernizing without disrupting existing workflows.',
    contribution:
      'Migrated the legacy .NET UI to Angular 16, modernizing the front end for the administration domain.',
    stack: ['Angular 16', 'Legacy Migration', '.NET'],
    links: [],
    featured: false,
  },
  {
    id: 'ca-life-line',
    title: 'CA Life Line',
    tagline: 'Healthcare administration modules, Angular 14',
    kind: 'Enterprise',
    org: 'Sorano Technologies',
    status: 'Internal',
    problem:
      'Workflow management for a healthcare administration application needed dedicated, maintainable Angular modules.',
    contribution: 'Built Angular 14 modules for healthcare administration and workflow management.',
    stack: ['Angular 14', 'Administration'],
    links: [],
    featured: false,
  },
  {
    id: 'prism',
    title: 'PRISM',
    tagline: 'VB-based stock/portfolio system migrated to Angular 12',
    kind: 'Enterprise',
    org: 'Sorano Technologies',
    status: 'Internal',
    problem:
      'A legacy VB-based stock/portfolio information system in the financial domain needed a modern interface without disrupting the underlying business logic it relied on.',
    contribution:
      'Migrated the interface layer to Angular 12 while preserving existing business logic, modernizing the UI/UX without a ground-up rebuild.',
    stack: ['Angular 12', 'Legacy Migration', 'Financial Domain'],
    links: [],
    featured: false,
  },
  {
    id: 'online-exam-portal',
    title: 'Online Exam Portal',
    tagline: 'Internal skill-assessment platform, React & Next.js',
    kind: 'Enterprise',
    org: 'Sorano Technologies',
    status: 'Internal',
    problem: 'Sorano needed an internal platform to run skill assessments for candidates and employees.',
    contribution: 'Built the internal assessment platform using React and Next.js.',
    stack: ['React', 'Next.js'],
    links: [],
    featured: false,
  },
  {
    id: 'emr5',
    title: 'EMR5',
    tagline: "Enterprise EMR platform for corporate & workers' compensation workflows",
    kind: 'Enterprise',
    org: 'CommerzTech',
    status: 'Internal',
    problem:
      "The EMR platform needed secure, role-based patient and provider data handling across corporate health and workers' compensation workflows.",
    contribution:
      'Built Angular modules for patient and provider workflows, Power BI dashboards with DAX measures, SQL stored procedures, and .NET API integrations, with role-based dashboard visibility.',
    stack: ['Angular', 'Power BI', 'DAX', 'SQL Server', '.NET API'],
    links: [],
    featured: false,
  },
  {
    id: 'acme-health',
    title: 'Acme Health',
    tagline: "CommerzTech's own HIPAA-compliant AI medical-reporting product",
    kind: 'Enterprise',
    org: 'CommerzTech',
    status: 'Internal',
    problem:
      "Acme Health is CommerzTech's own product, not a client engagement — it needed a HIPAA-compliant front end for an AI-driven medical reporting platform, with secure visualization of sensitive clinical data.",
    contribution:
      "Built the product's Angular frontend, focused on secure data visualization and HIPAA-compliant handling of patient data.",
    stack: ['Angular', 'HIPAA', 'Data Visualization'],
    links: [],
    featured: false,
  },
];

/** Real posts, verbatim titles from LinkedIn — no engagement metrics shown since not independently verifiable at build time. */
export const INSIGHTS: readonly InsightPost[] = [
  {
    title: 'Why Lazy Loading Makes Angular Apps Faster',
    excerpt:
      'Angular Performance Series #2 — loading only what the user needs first, and deferring the rest until they navigate there.',
    url: 'https://www.linkedin.com/in/bhagyasankarmaddela',
    publishedLabel: 'Angular Performance Series',
  },
  {
    title: 'Why OnPush Change Detection Makes Angular Faster',
    excerpt:
      'Angular Performance Series #1 — checking a component only when something it actually depends on changes.',
    url: 'https://www.linkedin.com/in/bhagyasankarmaddela',
    publishedLabel: 'Angular Performance Series',
  },
  {
    title: 'Why trackBy Can Make Your Angular App Faster',
    excerpt:
      'Identifying list items by a stable key so Angular updates only what changed, instead of recreating the DOM.',
    url: 'https://www.linkedin.com/in/bhagyasankarmaddela',
    publishedLabel: 'Angular internals',
  },
  {
    title: 'Why is switchMap() a Superhero for Search APIs?',
    excerpt:
      'Cancelling stale requests as new ones come in, so a fast typist never sees an out-of-order search result.',
    url: 'https://www.linkedin.com/in/bhagyasankarmaddela',
    publishedLabel: 'RxJS',
  },
  {
    title: 'Subject vs BehaviorSubject',
    excerpt:
      'The practical difference between the two, and when each one is the right choice for shared state.',
    url: 'https://www.linkedin.com/in/bhagyasankarmaddela',
    publishedLabel: 'RxJS',
  },
];

export const SERVICES: readonly ServiceOffer[] = [
  { title: 'Angular application development', description: 'New features, components, and full modules built on modern Angular.' },
  { title: 'Angular modernization', description: 'Migrating legacy .NET/VB interfaces and older Angular versions to Standalone Components and Signals.' },
  { title: 'Power BI integration', description: 'Dashboards and DAX measures embedded directly inside Angular applications.' },
  { title: '.NET / REST API integration', description: 'Wiring Angular front ends cleanly to .NET or Node backends.' },
  { title: 'Dynamic form systems', description: 'Metadata-driven forms that render controls and validation from configuration, not hardcoded templates.' },
  { title: 'Bug fixing & performance', description: 'Debugging existing Angular codebases and improving change-detection performance.' },
];

export const MARKETPLACE_PROFILES: readonly MarketplaceProfile[] = [
  { platform: 'Upwork', handle: 'View profile', href: 'https://www.upwork.com/freelancers/~01056abc7e49d396f7' },
  { platform: 'Fiverr', handle: '@bhagyasankar_m', href: 'https://www.fiverr.com/bhagyasankar_m' },
  { platform: 'Freelancer.com', handle: '@bhagyasankarm', href: 'https://www.freelancer.com/u/bhagyasankarm' },
];

export const CERTIFICATIONS: readonly Certification[] = [
  { name: 'Agile Foundations', issuer: 'LinkedIn Learning', period: 'Jul 2026' },
  { name: 'SQL Practice: Basic Queries', issuer: 'LinkedIn Learning', period: 'Jun 2026' },
  { name: 'Generative AI Foundations Certificate Program', issuer: 'upGrad', period: 'Sep 2025' },
  { name: 'ChatGPT for Developers', issuer: 'upGrad', period: '2025' },
  { name: 'Prompt Engineering Fundamentals', issuer: 'Simplilearn', period: '2024' },
  { name: 'SQL Projects for Beginners', issuer: 'Great Learning', period: '2023' },
];

export const EDUCATION = {
  degree: 'B.Tech, Electronics & Communication Engineering',
  school: "St. Mary's Group of Institutions, Guntur",
  period: '2013 — 2017',
} as const;

export const CONTACT_LINKS: readonly ContactLink[] = [
  { label: 'Email', value: 'm.bhagyasankar@gmail.com', href: 'mailto:m.bhagyasankar@gmail.com', kind: 'email' },
  { label: 'LinkedIn', value: '/in/bhagyasankarmaddela', href: 'https://www.linkedin.com/in/bhagyasankarmaddela', kind: 'linkedin' },
  { label: 'GitHub', value: '@Bhagi0459', href: 'https://github.com/Bhagi0459', kind: 'github' },
  { label: 'Upwork', value: 'View profile', href: 'https://www.upwork.com/freelancers/~01056abc7e49d396f7', kind: 'upwork' },
  { label: 'Fiverr', value: '@bhagyasankar_m', href: 'https://www.fiverr.com/bhagyasankar_m', kind: 'fiverr' },
  { label: 'Freelancer.com', value: '@bhagyasankarm', href: 'https://www.freelancer.com/u/bhagyasankarm', kind: 'freelancer' },
];

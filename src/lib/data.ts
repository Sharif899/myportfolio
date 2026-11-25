export const siteConfig = {
  name: 'Sherif Olabode',
  role: 'Senior AI Evaluator & Trainer',
  title: 'Sherif Olabode — Senior AI Evaluator & Trainer',
  description:
    'I decide whether AI systems are good enough to ship. Seven years evaluating large language models, a PhD in data science, and open-source evaluation tooling that makes those judgements reproducible.',
  url: 'https://0xninofi.vercel.app',
  author: 'Sherif Olabode',
  location: 'Lagos, Nigeria · working remotely',
  email: 'sharifninolee@gmail.com',
  keywords: [
    'LLM evaluation',
    'RLHF',
    'AI evaluation',
    'annotation QA',
    'red-teaming',
    'calibration',
    'software engineer',
    'Python',
    'Java',
    'Spring Boot',
    'Next.js',
  ],
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Method', href: '#method' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Education', href: '#education' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Sharif899', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sherif-olabode-128306415',
    icon: 'linkedin',
  },
  { label: 'X', href: 'https://x.com/0xNinofi', icon: 'twitter' },
  { label: 'Email', href: 'mailto:sharifninolee@gmail.com', icon: 'mail' },
]

export interface CaseStudy {
  id: string
  index: string
  title: string
  oneLiner: string
  problem: string
  approach: string
  outcome: string
  evidence: string[]
  stack: string[]
  repo: string
  live?: string
  year: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'llm-eval-toolkit',
    index: '01',
    title: 'llm-eval-toolkit',
    oneLiner: 'Rubric-based LLM evaluation that can be audited, not just felt.',
    problem:
      'LLM evaluation done by feel does not scale and cannot be audited. Two reviewers can read the same response and reach different verdicts, and nobody can say why.',
    approach:
      'Deterministic 1–5 rubric scoring on factual accuracy, reasoning quality, instruction adherence, helpfulness and safety; pairwise RLHF comparison with a tie rule; factual checks against a reference; and Cohen’s kappa so annotator agreement is itself measured. Python standard library only, offline, no API key.',
    outcome:
      'On the example set, response A wins 10 of 10 pairwise comparisons and scores 1.0 on factual accuracy, while response B’s contradictions are caught. The toolkit turns a judgement into a number with a paper trail.',
    evidence: ['42 tests passing', 'CI green', 'Offline · deterministic'],
    stack: ['Python', 'Standard library', 'pytest', 'CLI'],
    repo: 'https://github.com/Sharif899/llm-eval-toolkit',
    year: '2026',
  },
  {
    id: 'kyc-onboarding-service',
    index: '02',
    title: 'kyc-onboarding-service',
    oneLiner: 'Identity onboarding that rejects bad documents and survives retries.',
    problem:
      'An onboarding system has to do three things at once: reject invalid identity documents, catch the same person applying twice, and survive a retried request without creating a second application. Getting any one wrong costs trust.',
    approach:
      'Java 21 and Spring Boot. Document-number rules per type (NIN, passport, driving licence), duplicate detection that answers 409 with the existing application, idempotency keys on creation, and a state machine — pending, under review, verified, rejected — with an audit log entry for every transition. A Postgres profile targets a separate Supabase project; document numbers are masked to the last four digits in every response and log line.',
    outcome:
      '54 tests passing, CI green. The design reflects the production outcomes from Seamfix: duplicate records down 75% and API response time down 39% on systems handling 20,000+ requests a day.',
    evidence: ['54 tests passing', 'CI green', 'PostgreSQL / Supabase profile'],
    stack: ['Java 21', 'Spring Boot 3', 'JPA', 'PostgreSQL', 'JUnit 5'],
    repo: 'https://github.com/Sharif899/kyc-onboarding-service',
    year: '2026',
  },
  {
    id: 'ai-safety-red-teaming',
    index: '03',
    title: 'ai-safety-red-teaming',
    oneLiner: 'Adversarial testing that shows you the number you would rather not see.',
    problem:
      'A model that passes a benchmark can still be talked into harmful compliance. Roleplay, authority framing, multi-step escalation and encoding tricks are how that happens — and a single safety score hides it.',
    approach:
      'Ten attack techniques, refusal classification, unsafe-output detection by harm category, and attack success rate plus a consistency score, all offline and deterministic. The mock target model’s compliance responses are realistic but never actionable: the toolkit measures vulnerability, it does not teach it.',
    outcome:
      '82 tests passing, CI green. The example run throws 180 attacks at the mock model; it complies with half of them (ASR 50.0%) and its answers are consistent 0.0% of the time. The point of the tool is to make that number visible — not to hide it.',
    evidence: ['82 tests passing', 'CI green', 'ASR 50.0% · consistency 0.0% on the example run'],
    stack: ['Python', 'Standard library', 'pytest', 'CLI'],
    repo: 'https://github.com/Sharif899/ai-safety-red-teaming',
    year: '2026',
  },
  {
    id: 'annotation-qa-toolkit',
    index: '04',
    title: 'annotation-qa-toolkit',
    oneLiner: 'Annotation quality control for image and video labelling.',
    problem:
      'Labelling errors compound into model errors, and two annotators disagreeing silently is worse than disagreeing loudly. A dataset with an out-of-bounds box or a duplicate nobody noticed is a dataset that teaches the wrong thing.',
    approach:
      'Readers for COCO, YOLO, Pascal VOC, Labelbox, SuperAnnotate and Roboflow exports; ten named QA checks — out-of-bounds and degenerate boxes, orphans, unknown classes, duplicates, heavy overlap, tiny boxes, empty images, near-duplicate class names, rare classes; and annotator agreement by Cohen’s kappa and IoU-based box matching.',
    outcome:
      '88 tests passing, CI green. On the deliberately imperfect example set the toolkit finds 7 issues (1 error, 6 warnings) and measures agreement at κ 0.886 with a box match rate of 0.833 — agreement you can quote, not assume.',
    evidence: ['88 tests passing', 'CI green', 'κ 0.886 · match rate 0.833 on the example set'],
    stack: ['Python', 'Standard library', 'pytest', 'CLI'],
    repo: 'https://github.com/Sharif899/annotation-qa-toolkit',
    year: '2026',
  },
]

export interface MoreWorkItem {
  title: string
  description: string
  proof: string
  repo: string
  live?: string
}

export const moreWork: MoreWorkItem[] = [
  {
    title: 'ml-evaluation-toolkit',
    description:
      'Precision, recall and F1, confusion analysis, error slices and calibration over saved predictions.',
    proof: '93 tests · accuracy 0.840 · ECE 0.091 → 0.046 after temperature scaling',
    repo: 'https://github.com/Sharif899/ml-evaluation-toolkit',
  },
  {
    title: 'OsogboRent',
    description:
      'Houses and shops for rent and sale in Osogbo, Nigeria — search by area, type and price, request board, agent dashboard.',
    proof: 'Live product · Next.js + Supabase · tests + CI green',
    repo: 'https://github.com/Sharif899/houseplug',
    live: 'https://osogborent.com',
  },
  {
    title: 'ChainPulse',
    description: 'AI-powered DeFi analytics: market scores, whale alerts, wallet reputation.',
    proof: 'Live demo',
    repo: 'https://github.com/Sharif899/chainpulse',
    live: 'https://chainpuls.vercel.app',
  },
  {
    title: 'CertVault',
    description:
      'Tamper-proof certificates on Shelby and Aptos. Issue, store and verify credentials from a URL.',
    proof: 'Live demo',
    repo: 'https://github.com/Sharif899/certvault',
    live: 'https://certvault-gamma.vercel.app',
  },
  {
    title: 'ArcBounty',
    description: 'On-chain developer bounty board. Post tasks, claim work, get paid in USDC.',
    proof: 'Live demo',
    repo: 'https://github.com/Sharif899/arcbounty',
    live: 'https://arcbounty.vercel.app',
  },
  {
    title: 'ORO',
    description: 'AI execution layer for capital: set a strategy, ORO monitors and executes.',
    proof: 'Live demo',
    repo: 'https://github.com/Sharif899/oro',
    live: 'https://orobest.vercel.app',
  },
  {
    title: 'ShelbyChat',
    description: 'Decentralised chat on Shelby Protocol, with messages stored on-chain.',
    proof: 'Live demo',
    repo: 'https://github.com/Sharif899/shelbychat',
    live: 'https://shelbychatt.vercel.app',
  },
]

export interface Principle {
  index: string
  title: string
  body: string
}

export const principles: Principle[] = [
  {
    index: '01',
    title: 'Score against a rubric, not a feeling',
    body: 'A verdict that cannot be explained cannot be defended. Every response I score is judged on named criteria — factual accuracy, reasoning, instruction adherence, helpfulness, safety — each with a rationale and evidence quoted from the response itself.',
  },
  {
    index: '02',
    title: 'Agreement is the metric',
    body: 'If two annotators cannot agree, the rubric is the problem, not the annotators. I measure inter-annotator agreement (Cohen’s kappa) on every evaluation I run, and I treat a low kappa as a finding about the task design — not a reason to average the disagreement away.',
  },
  {
    index: '03',
    title: 'Adversarial by default',
    body: 'A model that passes a benchmark can still be talked into compliance. I test with roleplay, authority framing, escalation and encoding before I trust a safety score — and I report the attack success rate plainly, even when it is 50%.',
  },
  {
    index: '04',
    title: 'Calibration before claims',
    body: 'A model that is 90% confident and right 60% of the time is not 90% confident. I measure calibration — expected calibration error, Brier score, reliability bins — and I scale confidence before I quote it.',
  },
  {
    index: '05',
    title: 'Nothing leaves the room',
    body: 'Evaluation data is often the most sensitive data a company holds. My tooling is offline and deterministic: no API keys, no network calls, no client data in the repository. The method is public; the data stays private.',
  },
]

export interface Engagement {
  title: string
  scope: string
  proof: string
}

export const engagements: Engagement[] = [
  {
    title: 'LLM evaluation & benchmarking',
    scope:
      'Rubric design, evaluation datasets, pairwise RLHF comparison, factual-accuracy checks, red-teaming and calibration — for teams that need to know, with numbers, whether their model is ready.',
    proof: '12,000+ responses scored · 75,000+ test cases supported · 97% quality rating',
  },
  {
    title: 'Annotation QA & data quality',
    scope:
      'QA frameworks and reviewer calibration for image, video and text labelling — checks, agreement measurement and reviewer feedback loops that raise the data instead of just counting it.',
    proof: '3,000+ contributor submissions audited · promoted to QA Reviewer in one year',
  },
  {
    title: 'KYC & onboarding systems',
    scope:
      'Identity verification and digital onboarding in Java and Spring Boot: document validation, duplicate detection, idempotent requests, audit-logged workflows and Postgres-backed storage.',
    proof: '6 years at Seamfix · duplicate records −75% · API time −39%',
  },
  {
    title: 'Full-stack product builds',
    scope:
      'Production web products in Next.js, TypeScript and Supabase — from a live property marketplace to the evaluation tools on this page.',
    proof: 'OsogboRent live at osogborent.com · 6 open-source tools shipped in 2026',
  },
]

export interface ExperienceRole {
  role: string
  org: string
  meta: string
  dates: string
  outcomes: string[]
}

export const experience: ExperienceRole[] = [
  {
    role: 'AI Trainer & Annotation QA Reviewer',
    org: 'iMerit',
    meta: 'Remote · Freelance',
    dates: '2019 — Present',
    outcomes: [
      'Evaluated 12,000+ LLM responses across 8+ projects at a 97% quality rating.',
      'Audited 3,000+ contributor submissions.',
      'Promoted from AI Annotator to QA Reviewer after one year.',
    ],
  },
  {
    role: 'AI Evaluation Engineer',
    org: 'Databricks',
    meta: 'Remote · Part-time',
    dates: 'Jul 2020 — Present',
    outcomes: [
      'Designed evaluation datasets and scoring frameworks supporting 75,000+ LLM test cases.',
      'Built Python evaluation pipelines for 20+ ML models with SQL, Apache Spark and MLflow.',
      'Cut evaluation turnaround by about 25% and manual evaluation effort by about 30%.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    org: 'Seamfix Nigeria',
    meta: 'Lagos · Full-time',
    dates: '2020 — Present · promoted 2022',
    outcomes: [
      'Identity verification, KYC and digital onboarding in Java, Spring Boot, Python and PostgreSQL.',
      'Reduced duplicate records by 75% and API response time by 39% on systems handling 20,000+ requests a day.',
      'Mentored 80+ interns.',
    ],
  },
  {
    role: 'AI Training Expert',
    org: 'micro1 — Runway Annotations Project',
    meta: 'Remote · Project-based',
    dates: 'Project-based',
    outcomes: [
      'Image and video annotation and computer-vision labelling.',
      'AI data QA with CVAT, Labelbox, SuperAnnotate and Roboflow.',
    ],
  },
]

export interface CapabilityGroup {
  category: string
  items: string[]
}

export const capabilities: CapabilityGroup[] = [
  {
    category: 'AI evaluation & training data',
    items: [
      'LLM evaluation',
      'RLHF',
      'Rubric design',
      'Annotation QA',
      'Cohen’s kappa',
      'Hallucination detection',
      'Red-teaming',
      'Calibration',
    ],
  },
  { category: 'Languages', items: ['Python', 'Java', 'TypeScript', 'SQL'] },
  {
    category: 'Data & ML',
    items: ['pandas', 'NumPy', 'scikit-learn', 'Apache Spark', 'MLflow'],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'PostgreSQL', 'Supabase', 'Docker'],
  },
  { category: 'Web', items: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'] },
]

export const education = [
  {
    degree: 'PhD, Data Science',
    school: 'Obafemi Awolowo University',
    year: '2019',
    detail: 'Thesis on data quality and annotation consistency.',
  },
  {
    degree: 'MSc, Data Science and Artificial Intelligence',
    school: 'Ladoke Akintola University of Technology',
    year: '2015',
    detail: '',
  },
  {
    degree: 'BSc, Computer Science',
    school: 'Obafemi Awolowo University',
    year: '2011',
    detail: '',
  },
]

export const certifications = [
  {
    name: 'ISTQB Certified Tester — AI Testing (CT-AI v2.0)',
    issuer: 'ISTQB',
    year: 'Jan 2026',
  },
  {
    name: 'Google Cloud Professional Machine Learning Engineer',
    issuer: 'Google Cloud',
    year: 'Jul 2025',
  },
  {
    name: 'AWS Certified Machine Learning Engineer — Associate',
    issuer: 'Amazon Web Services',
    year: 'Feb 2025',
  },
]

export interface WritingItem {
  title: string
  description: string
  href: string
}

export const writing: WritingItem[] = [
  {
    title: 'How I score an LLM response',
    description:
      'The rubric, the pairwise comparison and the agreement check behind llm-eval-toolkit — and the limits of deterministic scoring, stated plainly.',
    href: 'https://github.com/Sharif899/llm-eval-toolkit#readme',
  },
  {
    title: 'How I test a model that wants to comply',
    description:
      'Ten attack techniques, refusal classification and what an attack success rate of 50% actually means — from ai-safety-red-teaming.',
    href: 'https://github.com/Sharif899/ai-safety-red-teaming#readme',
  },
  {
    title: 'How I measure annotation quality',
    description:
      'Ten named QA checks and IoU-based agreement: what a κ of 0.886 tells you about a labelling team — from annotation-qa-toolkit.',
    href: 'https://github.com/Sharif899/annotation-qa-toolkit#readme',
  },
  {
    title: 'How I calibrate a classifier',
    description:
      'Expected calibration error, Brier score and temperature scaling, with the caveat that fitting on the data you measure flatters the result — from ml-evaluation-toolkit.',
    href: 'https://github.com/Sharif899/ml-evaluation-toolkit#readme',
  },
]

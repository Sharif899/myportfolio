export const siteConfig = {
  name: 'Sherif Olabode',
  role: 'Senior AI Evaluator & Trainer',
  title: 'Sherif Olabode | Senior AI Evaluator & Trainer',
  description:
    'I decide whether AI systems are good enough to ship. Seven years evaluating large language models, a PhD in data science, and open-source evaluation tooling that makes those judgements reproducible.',
  url: 'https://0xninofi.vercel.app',
  scholarProfile: 'https://scholar.google.com/citations?user=9wQ8BHMAAAAJ&hl=en',
  author: 'Sherif Olabode',
  location: 'Lagos, Nigeria · working remotely',
  email: 'sharifninolee@gmail.com',
  keywords: [
    'LLM evaluation',
    'RLHF',
    'AI evaluation',
    'annotation QA',
    'red teaming',
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
  { label: 'Beliefs', href: '#beliefs' },
  { label: 'Notes', href: '#notes' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tools', href: '#expertise' },
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
    id: 'llmevaltoolkit',
    index: '01',
    title: 'llmevaltoolkit',
    oneLiner: 'Rubric-based LLM evaluation with a paper trail.',
    problem:
      'LLM evaluation done by feel does not scale and cannot be audited. Two reviewers can read the same response and reach different verdicts, and nobody can say why.',
    approach:
      'Deterministic 1–5 rubric scoring on factual accuracy, reasoning quality, instruction adherence, helpfulness and safety; pairwise RLHF comparison with a tie rule; factual checks against a reference; and Cohen’s kappa so annotator agreement is itself measured. Python standard library only, offline, no API key.',
    outcome:
      'On the example set, response A wins 10 of 10 pairwise comparisons and scores 1.0 on factual accuracy, while response B’s contradictions are caught. The toolkit turns a judgement into a number with a paper trail.',
    evidence: ['42 tests passing', 'CI green', 'Offline · deterministic'],
    stack: ['Python', 'Standard library', 'pytest', 'CLI'],
    repo: 'https://github.com/Sharif899/llmevaltoolkit',
    year: '2026',
  },
  {
    id: 'kyconboardingservice',
    index: '02',
    title: 'kyconboardingservice',
    oneLiner: 'Identity onboarding that rejects bad documents and survives retries.',
    problem:
      'An onboarding system has to do three things at once: reject invalid identity documents, catch the same person applying twice, and survive a retried request without creating a second application. Getting any one wrong costs trust.',
    approach:
      'Java 21 and Spring Boot. Document-number rules per type (NIN, passport, driving licence), duplicate detection that answers 409 with the existing application, idempotency keys on creation, and a state machine (pending, under review, verified, rejected) with an audit log entry for every transition. A Postgres profile targets a separate Supabase project; document numbers are masked to the last four digits in every response and log line.',
    outcome:
      '54 tests passing, CI green. The design reflects the production outcomes from Seamfix: duplicate records down 75% and API response time down 39% on systems handling 20,000+ requests a day.',
    evidence: ['54 tests passing', 'CI green', 'PostgreSQL / Supabase profile'],
    stack: ['Java 21', 'Spring Boot 3', 'JPA', 'PostgreSQL', 'JUnit 5'],
    repo: 'https://github.com/Sharif899/kyconboardingservice',
    year: '2026',
  },
  {
    id: 'aisafetyredteaming',
    index: '03',
    title: 'aisafetyredteaming',
    oneLiner: 'Adversarial testing that shows you the number you would rather not see.',
    problem:
      'A model that passes a benchmark can still be talked into harmful compliance. Roleplay, authority framing, multi-step escalation and encoding tricks are how that happens. A single safety score hides it.',
    approach:
      'Ten attack techniques, refusal classification, unsafe-output detection by harm category, and attack success rate plus a consistency score, all offline and deterministic. The mock target model’s compliance responses are realistic but never actionable: the toolkit measures vulnerability, it does not teach it.',
    outcome:
      '82 tests passing, CI green. The example run throws 180 attacks at the mock model. It complies with half of them (ASR 50.0%), and its answers are consistent 0.0% of the time. The number is ugly, and it is exactly what the tool is for.',
    evidence: ['82 tests passing', 'CI green', 'ASR 50.0% · consistency 0.0% on the example run'],
    stack: ['Python', 'Standard library', 'pytest', 'CLI'],
    repo: 'https://github.com/Sharif899/aisafetyredteaming',
    year: '2026',
  },
  {
    id: 'annotationqatoolkit',
    index: '04',
    title: 'annotationqatoolkit',
    oneLiner: 'Catches the labelling mistakes that become model mistakes.',
    problem:
      'Labelling errors compound into model errors, and two annotators disagreeing silently is worse than disagreeing loudly. A dataset with an out-of-bounds box or a duplicate nobody noticed is a dataset that teaches the wrong thing.',
    approach:
      'Readers for COCO, YOLO, Pascal VOC, Labelbox, SuperAnnotate and Roboflow exports; ten named QA checks: out-of-bounds and degenerate boxes, orphans, unknown classes, duplicates, heavy overlap, tiny boxes, empty images, near-duplicate class names, rare classes; and annotator agreement by Cohen’s kappa and IoU-based box matching.',
    outcome:
      '88 tests passing, CI green. On the deliberately imperfect example set the toolkit finds 7 issues (1 error, 6 warnings) and measures agreement at κ 0.886 with a box match rate of 0.833. That is agreement you can quote, not assume.',
    evidence: ['88 tests passing', 'CI green', 'κ 0.886 · match rate 0.833 on the example set'],
    stack: ['Python', 'Standard library', 'pytest', 'CLI'],
    repo: 'https://github.com/Sharif899/annotationqatoolkit',
    year: '2026',
  },
  {
    id: 'northstarevalplatform',
    index: '05',
    title: 'northstarevalplatform',
    oneLiner: 'Client work: an evaluation platform that tells a team whether a model is safe to release.',
    problem:
      'Northstar AI Systems needed to know, before every release, whether their customer-support assistant was reliable, accurate and safe, and where a new model or prompt had regressed. A benchmark score does not answer that. A release decision needs the failure, the evidence for it, and a human in the loop.',
    approach:
      'A deterministic platform, not a judge model. CSV and JSONL dataset loading with strict validation; a configurable LLM client over the standard library, keys from the environment only; five-metric 1–5 scoring (factual accuracy, relevance, instruction following, citation quality, safety) with a structured rationale for every score; citation checks against the actual source documents, so invented citations and unsupported claims are penalised; A/B comparison with per-category deltas and item-level improvements and regressions; a persisted human review queue for low-confidence results; Markdown and JSON reports; a CLI and a web UI over the same code paths. A design report documents the scoring model, the honest limits of automated judging, and a ten-step production-hardening plan.',
    outcome:
      '123 tests passing, CI green. On the 28-item sample dataset the candidate model scores 4.45 against a 5.00 baseline, a 42.9-point pass-rate drop concentrated in safety and citation, with 12 regressions and none improved. The two safety failures are the release blockers, and the review queue is where a human overrules the scorer.',
    evidence: ['123 tests passing', 'CI green', 'Client work · Northstar AI Systems'],
    stack: ['Python', 'FastAPI', 'SQLite', 'pytest', 'CLI'],
    repo: 'https://github.com/Sharif899/northstarevalplatform',
    year: '2026',
  },
  {
    id: 'yoruballmbenchmark',
    index: '06',
    title: 'yoruballmbenchmark',
    oneLiner: 'A benchmark that scores LLMs in Yoruba, not in translation.',
    problem:
      'Most LLM benchmarks are English. A model can look fluent in Yoruba while failing the basics: wrong numbers, missing diacritics that change meaning, refusals it cannot phrase, instructions it ignores. There was no standard way to measure any of that.',
    approach:
      '60 items across six categories (factual QA, maths, instruction following, safety, translation, reasoning), each with a Yoruba prompt, a Yoruba reference and English glosses. Deterministic five-criterion rubric scoring with Yoruba adaptations: diacritic-folded matching reported separately and never scored, Yoruba number words compared as values, Yoruba reasoning markers and refusal phrases. A CLI scores any model’s recorded responses strictly, and three documented rule-based mocks show what the numbers mean.',
    outcome:
      '117 tests passing, CI green. The strong Yoruba mock scores 4.667 with a 100% pass rate; the English-biased mock scores 3.077 with an 8.3% pass rate, passing only the five Yoruba-to-English translation items. The gap between those two numbers is the benchmark doing its job.',
    evidence: ['117 tests passing', 'CI green', '60 items · 6 categories'],
    stack: ['Python', 'Standard library', 'pytest', 'CLI'],
    repo: 'https://github.com/Sharif899/yoruballmbenchmark',
    year: '2026',
  },
  {
    id: 'liveredteaming',
    index: '07',
    title: 'liveredteaming',
    oneLiner: 'Live red teaming that shows which jailbreaks actually work on real models.',
    problem:
      'A model that refuses a direct harmful request is not necessarily safe. Role-play, hypothetical framing and encoding are how a refusal gets talked around, and a safety score that only tests direct requests will never see it.',
    approach:
      'The same 18 harmful requests and 10 attack techniques from my red teaming toolkit, run against Gemini and GPT-OSS 120B over their live APIs, with no mock target anywhere. 360 live attacks, scored with a deterministic refusal classifier, and every response saved so the numbers can be reproduced.',
    outcome:
      'Gemini lets 13.9% through, and its safety depends heavily on framing: role-play breaks it 83.3% of the time, while direct requests fail 94.4% of the time. GPT-OSS 120B refuses 99.4% of everything and holds the line across every framing. Its one counted success is a prompt it misread as a question about forgetting a passport, so its true harmful-content rate is zero. 119 tests passing, CI green.',
    evidence: ['119 tests passing', 'CI green', 'ASR 13.9% Gemini · 0.6% GPT-OSS 120B'],
    stack: ['Python', 'Standard library', 'pytest', 'CLI'],
    repo: 'https://github.com/Sharif899/liveredteaming',
    year: '2026',
  },
  {
    id: 'llmevalleaderboard',
    index: '08',
    title: 'llmevalleaderboard',
    oneLiner: 'A leaderboard of live results, not another toolkit.',
    problem:
      'Most evaluation repos ship a toolkit and a demo run. A recruiter cannot tell whether the numbers came from a real model or a script. What was missing was a public artifact with real results from real models.',
    approach:
      '100 items: 60 from my Yoruba benchmark, run live for the first time, plus 40 new general items. Two live models, Gemini and GPT-OSS 120B, at temperature 0, scored with a deterministic five-criterion rubric, with bootstrap 95% confidence intervals and a reproducible runner. Every response saved.',
    outcome:
      'Gemini scores 3.820 with a 49.0% pass rate; GPT-OSS 120B scores 3.804 with a 47.0% pass rate, effectively tied. Both models refused all 20 harmful requests. The Yoruba items are where the models diverge most: Gemini leads on Yoruba, GPT-OSS leads on the general set. 65 tests passing, CI green.',
    evidence: ['65 tests passing', 'CI green', 'Gemini 3.820 · GPT-OSS 120B 3.804'],
    stack: ['Python', 'Standard library', 'pytest', 'CLI'],
    repo: 'https://github.com/Sharif899/llmevalleaderboard',
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
    title: 'mlevaluationtoolkit',
    description:
      'Precision, recall and F1, confusion analysis, error slices and calibration over saved predictions.',
    proof: '93 tests · accuracy 0.840 · ECE 0.091 → 0.046 after temperature scaling',
    repo: 'https://github.com/Sharif899/mlevaluationtoolkit',
  },
  {
    title: 'sparkmlflowevalpipeline',
    description:
      'Pure-Python scoring (rubrics, factual checks, calibration, kappa), a PySpark job for distributed scoring, and MLflow run tracking and comparison.',
    proof: '87 tests · CI green · model-a mean 3.885 vs model-b 3.52',
    repo: 'https://github.com/Sharif899/sparkmlflowevalpipeline',
  },
  {
    title: 'sqlevalanalytics',
    description:
      'PostgreSQL-first analytics for AI evaluation operations: annotator agreement, review turnaround, reject rates, calibration, duplicates and workload, over ten queries a QA lead actually runs.',
    proof: '34 tests · agreement 80.0% · κ 0.643',
    repo: 'https://github.com/Sharif899/sqlevalanalytics',
  },
  {
    title: 'dockerevalservice',
    description:
      'The evaluation API, containerised: deterministic rubric scoring and pairwise comparison over PostgreSQL, with migrations, a multi-stage image and compose for the whole stack.',
    proof: 'CI green · FastAPI + PostgreSQL · Docker',
    repo: 'https://github.com/Sharif899/dockerevalservice',
  },
  {
    title: 'OsogboRent',
    description:
      'Houses and shops for rent and sale in Osogbo, Nigeria. Search by area, type and price, with a request board and agent dashboard.',
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

export interface Belief {
  index: string
  title: string
  body: string
  showsUpLabel: string
  showsUpHref: string
}

export const beliefs: Belief[] = [
  {
    index: '01',
    title: 'If two annotators disagree, the rubric is broken',
    body: 'Disagreement is not noise to average away. It is the rubric telling you the task is unclear, the categories overlap, or the instructions contradict each other. I measure agreement (Cohen’s kappa) on every evaluation I run, and I treat a low kappa as a finding about the task design. Fix the rubric, then re-score. Do not average two wrong answers and call the middle right.',
    showsUpLabel: 'Kappa and IoU agreement, measured in annotationqatoolkit',
    showsUpHref: 'https://github.com/Sharif899/annotationqatoolkit',
  },
  {
    index: '02',
    title: 'A leaderboard measures the benchmark, not the model',
    body: 'A model can top a public leaderboard and still be talked into harmful compliance in three turns. I score against a rubric I can defend, then I attack the model (roleplay, authority framing, escalation, encoding) and I quote the attack success rate as it is. In the example run for the red teaming toolkit it is 50%. A safety number you can trust has to survive being ugly.',
    showsUpLabel: 'Ten attack techniques and ASR scoring in aisafetyredteaming',
    showsUpHref: 'https://github.com/Sharif899/aisafetyredteaming',
  },
  {
    index: '03',
    title: 'A confidence number that is not calibrated is a guess',
    body: 'A model that says it is 90% sure and is right 60% of the time is not confident. It is loud. I measure expected calibration error and Brier score, and I scale the confidence before I quote it. And I say plainly when the scaling was fitted on the same data it is measured on, because that flatters the result and most people will not tell you.',
    showsUpLabel: 'ECE, Brier score and temperature scaling in mlevaluationtoolkit',
    showsUpHref: 'https://github.com/Sharif899/mlevaluationtoolkit',
  },
  {
    index: '04',
    title: 'A verdict you cannot explain is not a verdict',
    body: '“The model felt wrong” is not an evaluation. Every response I score is judged on named criteria (factual accuracy, reasoning, instruction adherence, helpfulness, safety), each with a rationale and a quote from the response itself. If I cannot show my working, I do not ship the score.',
    showsUpLabel: 'Rubric scoring with evidence quotes in llmevaltoolkit',
    showsUpHref: 'https://github.com/Sharif899/llmevaltoolkit',
  },
]

export const beliefsCoda =
  'One more thing, less a belief than a rule: nothing leaves the room. The data you evaluate on is usually the most sensitive thing a company holds: real prompts, real failures, real customers. My tools run offline, with no API key and no network call. The method is public and the code is on GitHub. The data stays where it is.'

export interface Story {
  index: string
  title: string
  paragraphs: string[]
  source: string
}

export const stories: Story[] = [
  {
    index: '01',
    title: 'The duplicate that cost a company its customers’ trust',
    paragraphs: [
      'At Seamfix, the same person kept coming back as two customers. A retried request, a mistyped document number, a second application. Each one created a new record. Each new record meant a support ticket, a confused agent, and a customer asked to prove who they were twice.',
      'The fix was not a better form. It was a rule: a document number belongs to one application, and a retried request returns the application that already exists instead of making a second one. Duplicate records fell 75%. API response time fell 39% on systems handling 20,000+ requests a day.',
      'The KYC service on this page is the same decision, rebuilt in the open: a state machine with an audit log, duplicate detection that answers with the existing application, and idempotency keys so a retry can never create a second customer.',
    ],
    source: 'Seamfix Nigeria, 2020–present · figures from the CV',
  },
  {
    index: '02',
    title: 'The ugly number I published anyway',
    paragraphs: [
      'The first time I ran the red teaming toolkit end to end, the mock model complied with half of 180 attacks. Fifty per cent. I could have made the mock safer (softened its responses, tuned it until the number looked respectable) and nobody reading the README would have known.',
      'I left it. A toolkit that only reports good numbers is a press release, not a test. The point of the tool is to show you the number you would rather not see, because that is the only number worth acting on.',
      'Consistency: 0.0%. The model contradicts itself on the same request. That is in the README too.',
    ],
    source: 'aisafetyredteaming, example run · 180 attacks, ASR 50.0%',
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
      'Rubric design, evaluation datasets, pairwise RLHF comparison, factual-accuracy checks, red teaming and calibration, for teams that need to know, with numbers, whether their model is ready.',
    proof: '12,000+ responses scored · 75,000+ test cases supported · 99% quality rating',
  },
  {
    title: 'Annotation QA & data quality',
    scope:
      'QA frameworks and reviewer calibration for image, video and text labelling: checks, agreement measurement and reviewer feedback loops that raise the data instead of just counting it.',
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
      'Production web products in Next.js, TypeScript and Supabase, from a live property marketplace to the evaluation tools on this page.',
    proof: 'OsogboRent live at osogborent.com · 12 open-source evaluation tools shipped in 2026',
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
    dates: '2019–Present',
    outcomes: [
      'Evaluated 12,000+ LLM responses across 8+ projects at a 99% quality rating.',
      'Audited 3,000+ contributor submissions.',
      'Promoted from AI Annotator to QA Reviewer after one year.',
    ],
  },
  {
    role: 'AI Evaluation Engineer',
    org: 'Databricks',
    meta: 'Remote · Part-time',
    dates: 'Jul 2020–Present',
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
    dates: '2020–Present · promoted 2022',
    outcomes: [
      'Identity verification, KYC and digital onboarding in Java, Spring Boot, Python and PostgreSQL.',
      'Reduced duplicate records by 75% and API response time by 39% on systems handling 20,000+ requests a day.',
      'Mentored 80+ interns.',
    ],
  },
  {
    role: 'AI Training Expert',
    org: 'micro1, Runway Annotations Project',
    meta: 'Remote · Project-based',
    dates: 'Project-based',
    outcomes: [
      'Image and video annotation and computer-vision labelling.',
      'AI data QA with CVAT, Labelbox, SuperAnnotate and Roboflow.',
    ],
  },
]

export interface Capability {
  name: string
  why: string
}

export interface CapabilityGroup {
  category: string
  items: Capability[]
}

export const capabilities: CapabilityGroup[] = [
  {
    category: 'AI evaluation & training data',
    items: [
      { name: 'LLM evaluation', why: 'the day job: scoring responses against a rubric, with the working shown.' },
      { name: 'RLHF', why: 'pairwise comparison is how a preference becomes a number.' },
      { name: 'Rubric design', why: 'a rubric is a contract: if it cannot be explained, it cannot be defended.' },
      { name: 'Annotation QA', why: 'labels are the training data. Bad labels are a bad model, later.' },
      { name: 'Cohen’s kappa', why: 'the one number that says whether your annotators agree or are guessing together.' },
      { name: 'Hallucination detection', why: 'factual checks against a reference. Not a second opinion from the same model.' },
      { name: 'Red-teaming', why: 'benchmarks flatter models. Adversaries do not.' },
      { name: 'Calibration', why: 'confidence you can quote has to be measured first.' },
    ],
  },
  {
    category: 'Languages',
    items: [
      { name: 'Python', why: 'the scoring itself is stdlib-only Python. A scoring harness should have no moving parts.' },
      { name: 'Java', why: 'what Seamfix runs in production. Boring, typed, auditable.' },
      { name: 'TypeScript', why: 'the product work: OsogboRent and this site.' },
      { name: 'SQL', why: 'evaluation at Databricks scale runs on SQL and Spark, not spreadsheets.' },
    ],
  },
  {
    category: 'Data & ML',
    items: [
      { name: 'pandas', why: 'every report in the toolkits starts as a DataFrame.' },
      { name: 'NumPy', why: 'the arithmetic under the metrics.' },
      { name: 'scikit-learn', why: 'the reference implementation I check my own metrics against.' },
      { name: 'Apache Spark', why: 'evaluation pipelines for 20+ models at Databricks, and the Spark + MLflow pipeline I shipped in 2026.' },
      { name: 'MLflow', why: 'runs, parameters and metrics logged where anyone can find them.' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Spring Boot', why: 'the KYC service: state machines, idempotency keys, audit logs.' },
      { name: 'PostgreSQL', why: 'the KYC service’s production store, via Supabase.' },
      { name: 'Supabase', why: 'auth, storage and Postgres for OsogboRent.' },
      { name: 'Docker', why: 'the KYC service and the evaluation API ship containerised. Everything else runs as plain Python, because it does not need a container.' },
    ],
  },
  {
    category: 'Web',
    items: [
      { name: 'Next.js', why: 'this site and OsogboRent.' },
      { name: 'React', why: 'the UI layer for both.' },
      { name: 'Tailwind CSS', why: 'utility CSS: fast to write, easy to delete.' },
      { name: 'Node.js', why: 'the runtime behind the product work.' },
    ],
  },
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
    name: 'ISTQB Certified Tester – AI Testing (CT-AI v2.0)',
    issuer: 'ISTQB',
    year: 'Jan 2026',
  },
  {
    name: 'Google Cloud Professional Machine Learning Engineer',
    issuer: 'Google Cloud',
    year: 'Jul 2025',
  },
  {
    name: 'AWS Certified Machine Learning Engineer – Associate',
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
      'The rubric, the pairwise comparison and the agreement check behind llmevaltoolkit, and the limits of deterministic scoring, stated plainly.',
    href: 'https://github.com/Sharif899/llmevaltoolkit#readme',
  },
  {
    title: 'How I test a model that wants to comply',
    description:
      'Ten attack techniques, refusal classification and what an attack success rate of 50% actually means, from aisafetyredteaming.',
    href: 'https://github.com/Sharif899/aisafetyredteaming#readme',
  },
  {
    title: 'How I measure annotation quality',
    description:
      'Ten named QA checks and IoU-based agreement: what a κ of 0.886 tells you about a labelling team, from annotationqatoolkit.',
    href: 'https://github.com/Sharif899/annotationqatoolkit#readme',
  },
  {
    title: 'How I calibrate a classifier',
    description:
      'Expected calibration error, Brier score and temperature scaling, with the caveat that fitting on the data you measure flatters the result, from mlevaluationtoolkit.',
    href: 'https://github.com/Sharif899/mlevaluationtoolkit#readme',
  },
]

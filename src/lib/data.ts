export const siteConfig = {
  name: "Sherif Olabode",
  title: "Sherif Olabode — Senior AI Evaluator & Trainer",
  description:
    "Senior AI Evaluator & Trainer specialising in LLM evaluation, RLHF and QA. 12,000+ LLM responses evaluated at a 97% quality rating, 75,000+ test cases supported, and a software engineer building the systems behind the evaluation.",
  url: "https://0xninofi.vercel.app",
  author: "Sherif Olabode",
  keywords: [
    "LLM evaluation",
    "RLHF",
    "AI evaluation",
    "annotation QA",
    "red-teaming",
    "software engineer",
    "Python",
    "Java",
    "Spring Boot",
    "Next.js",
    "Nigerian developer",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Sharif899",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sherif-olabode-128306415",
    icon: "linkedin",
  },
  {
    label: "X",
    href: "https://x.com/0xNinofi",
    icon: "twitter",
  },
  {
    label: "Email",
    href: "mailto:sharifninolee@gmail.com",
    icon: "mail",
  },
];

export const stats = [
  { label: "LLM responses evaluated", value: "12,000+" },
  { label: "LLM test cases supported", value: "75,000+" },
  { label: "Quality rating", value: "97%" },
  { label: "Years in AI evaluation", value: "7" },
];

export const whatIDo = [
  "LLM evaluation & RLHF",
  "Annotation QA & calibration",
  "Hallucination & safety testing",
  "Backend systems (Java, Spring Boot, PostgreSQL)",
  "Full-stack products (Next.js, TypeScript, Supabase)",
];

export const experience = [
  {
    role: "AI Trainer & Annotation QA Reviewer",
    org: "iMerit",
    location: "Remote, Freelance",
    dates: "2019–Present",
    bullets: [
      "Evaluated 12,000+ LLM responses across 8+ projects at a 97% quality rating.",
      "Audited 3,000+ contributor submissions.",
      "Promoted from AI Annotator to QA Reviewer after one year.",
    ],
  },
  {
    role: "AI Evaluation Engineer",
    org: "Databricks",
    location: "Remote, Part-time",
    dates: "Jul 2020–Present",
    bullets: [
      "Python evaluation pipelines for 20+ ML models.",
      "Evaluation datasets and scoring frameworks supporting 75,000+ LLM test cases.",
      "SQL, Apache Spark, MLflow.",
    ],
  },
  {
    role: "Senior Software Engineer",
    org: "Seamfix Nigeria",
    location: "Lagos",
    dates: "2020–Present · promoted 2022",
    bullets: [
      "Identity verification, KYC and digital onboarding in Java, Spring Boot, Python and PostgreSQL.",
      "Mentored 80+ interns.",
    ],
  },
  {
    role: "AI Training Expert",
    org: "micro1 — Runway Annotations Project",
    location: "Remote",
    dates: "Project-based",
    bullets: [
      "Image and video annotation and computer-vision labelling.",
      "AI data QA with CVAT, Labelbox, SuperAnnotate and Roboflow.",
    ],
  },
];

export const education = [
  {
    degree: "Ph.D., Data Science",
    school: "Obafemi Awolowo University",
    year: "2019",
    detail: "Thesis on data quality and annotation consistency.",
  },
  {
    degree: "M.Sc., Data Science and Artificial Intelligence",
    school: "Ladoke Akintola University of Technology",
    year: "2015",
    detail: "",
  },
  {
    degree: "B.Sc., Computer Science",
    school: "Obafemi Awolowo University",
    year: "2011",
    detail: "",
  },
];

export const certifications = [
  {
    name: "ISTQB Certified Tester – AI Testing (CT-AI v2.0)",
    issuer: "ISTQB",
    year: "Jan 2026",
  },
  {
    name: "Google Cloud Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    year: "Jul 2025",
  },
  {
    name: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    year: "Feb 2025",
  },
];

export const skills = [
  {
    category: "AI evaluation & training data",
    items: [
      "LLM evaluation",
      "RLHF",
      "Rubric design",
      "Annotation QA",
      "Cohen's kappa",
      "Hallucination detection",
      "Red-teaming",
      "Calibration",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "Java", "TypeScript", "SQL", "Solidity"],
  },
  {
    category: "Data & ML",
    items: ["pandas", "NumPy", "scikit-learn", "Apache Spark", "MLflow"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "PostgreSQL", "Supabase", "Docker"],
  },
  {
    category: "Web",
    items: ["Next.js", "React", "Tailwind CSS", "Node.js"],
  },
];

export interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  status: string;
  year: string;
  repo: string;
  live?: string;
  proof: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "OsogboRent",
    description:
      "Houses & shops for rent and sale in Osogbo, Nigeria. Search by area, property type and price, featured and recent listings, request board, agent dashboard.",
    tags: ["Next.js 14", "TypeScript", "Tailwind", "Supabase"],
    category: "Web app",
    status: "Live",
    year: "2026",
    repo: "https://github.com/Sharif899/houseplug",
    live: "https://osogborent.com",
    proof: "Live site · tests + CI green",
  },
  {
    id: 2,
    title: "llm-eval-toolkit",
    description:
      "Offline, deterministic, rubric-based LLM evaluation: 1–5 scoring, pairwise RLHF comparison, hallucination checks, annotation QA with Cohen's kappa.",
    tags: ["Python", "Standard library", "pytest", "CLI"],
    category: "AI evaluation",
    status: "Open source",
    year: "2026",
    repo: "https://github.com/Sharif899/llm-eval-toolkit",
    proof: "42 tests passing",
  },
  {
    id: 3,
    title: "kyc-onboarding-service",
    description:
      "Identity verification & KYC onboarding in Java and Spring Boot: document validation, duplicate detection, idempotent requests, verification workflow with audit log, Postgres profile.",
    tags: ["Java 21", "Spring Boot 3", "JPA", "H2 / PostgreSQL", "JUnit 5"],
    category: "Backend",
    status: "Open source",
    year: "2026",
    repo: "https://github.com/Sharif899/kyc-onboarding-service",
    proof: "54 tests passing · CI green",
  },
  {
    id: 4,
    title: "ai-safety-red-teaming",
    description:
      "Offline, deterministic red-teaming for LLMs: 10 attack techniques, refusal classification, unsafe-output detection, attack success rate and consistency scoring.",
    tags: ["Python", "Standard library", "pytest", "CLI"],
    category: "AI safety",
    status: "Open source",
    year: "2026",
    repo: "https://github.com/Sharif899/ai-safety-red-teaming",
    proof: "82 tests passing · example run: 50% attack success rate, 0% consistency",
  },
  {
    id: 5,
    title: "Archy",
    description:
      "Agent-to-agent job marketplace on Arc Network. Agents post jobs, lock USDC in escrow, bid, and get paid on approval, with on-chain reputation.",
    tags: ["Next.js 14", "TypeScript", "Supabase", "Arc", "USDC", "Circle App Kit"],
    category: "Web3",
    status: "Live",
    year: "2026",
    repo: "https://github.com/Sharif899/archy",
    live: "https://archy.vercel.app",
    proof: "Live demo",
  },
  {
    id: 6,
    title: "Arc Terminal",
    description:
      "DeFi terminal for Arc Network: send USDC, swap EURC, bridge chains, portfolio and markets.",
    tags: ["Next.js 14", "TypeScript", "Supabase", "Circle App Kit"],
    category: "Web3",
    status: "Live",
    year: "2026",
    repo: "https://github.com/Sharif899/arcterminal",
    live: "https://arcterminal.vercel.app",
    proof: "Live demo",
  },
];

export interface MoreProject {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  live: string;
}

export const moreProjects: MoreProject[] = [
  {
    title: "ChainPulse",
    description:
      "AI-powered DeFi analytics: market scores, whale alerts, wallet reputation, verified on-chain.",
    tags: ["Next.js", "OpenGradient", "AI", "DeFi"],
    repo: "https://github.com/Sharif899/chainpulse",
    live: "https://chainpuls.vercel.app",
  },
  {
    title: "CertVault",
    description:
      "Tamper-proof certificates on Shelby + Aptos. Issue, store and verify credentials from a URL.",
    tags: ["Next.js", "Shelby Protocol", "Web3", "Credentials"],
    repo: "https://github.com/Sharif899/certvault",
    live: "https://certvault-gamma.vercel.app",
  },
  {
    title: "ArcBounty",
    description:
      "On-chain developer bounty board. Post tasks, claim work, get paid in USDC via Arc.",
    tags: ["Next.js", "Arc SDK", "Supabase", "USDC"],
    repo: "https://github.com/Sharif899/arcbounty",
    live: "https://arcbounty.vercel.app",
  },
  {
    title: "ORO",
    description:
      "AI execution layer for capital: set a strategy, ORO monitors and executes.",
    tags: ["Next.js", "AI", "DeFi", "zkTLS", "TEEs"],
    repo: "https://github.com/Sharif899/oro",
    live: "https://orobest.vercel.app",
  },
  {
    title: "ShelbyChat",
    description:
      "Decentralised chat on Shelby Protocol: messages stored permanently on-chain.",
    tags: ["Next.js", "Shelby Protocol", "Web3", "Decentralised"],
    repo: "https://github.com/Sharif899/shelbychat",
    live: "https://shelbychatt.vercel.app",
  },
];

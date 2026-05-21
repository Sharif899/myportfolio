export const siteConfig = {
  name: "Sharif",
  title: "Sharif — Fullstack Vibecoder",
  description:
    "Full stack vibecoder building modern web apps, Web3 products, AI tools, and experimental internet experiences.",
  url: "https://sharif.dev",
  ogImage: "/og.png",
  author: "Sharif",
  keywords: [
    "fullstack developer",
    "web3",
    "AI tools",
    "Next.js",
    "React",
    "vibecoder",
    "software engineer",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sharif",
    icon: "github",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/sharif",
    icon: "twitter",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sharif",
    icon: "linkedin",
  },
  {
    label: "Farcaster",
    href: "https://warpcast.com/sharif",
    icon: "farcaster",
  },
];

export const skills = [
  {
    category: "Frontend",
    color: "#00FFFF",
    items: [
      { name: "Next.js", level: 95 },
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
      { name: "Three.js", level: 70 },
    ],
  },
  {
    category: "Backend",
    color: "#9B30FF",
    items: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "Prisma", level: 85 },
      { name: "GraphQL", level: 78 },
      { name: "REST APIs", level: 92 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    category: "Web3",
    color: "#FF2D78",
    items: [
      { name: "Solidity", level: 80 },
      { name: "Ethers.js", level: 85 },
      { name: "wagmi", level: 88 },
      { name: "Hardhat", level: 78 },
      { name: "IPFS", level: 72 },
      { name: "The Graph", level: 70 },
    ],
  },
  {
    category: "AI & Tools",
    color: "#39FF14",
    items: [
      { name: "OpenAI API", level: 90 },
      { name: "LangChain", level: 78 },
      { name: "Vercel AI SDK", level: 88 },
      { name: "Pinecone", level: 72 },
      { name: "Docker", level: 80 },
      { name: "Git", level: 92 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "NeuralDrop",
    description:
      "AI-powered NFT generation platform where users describe their vision and get unique on-chain art. Supports multi-chain deployment with gas optimization.",
    tags: ["Next.js", "OpenAI", "Solidity", "wagmi", "IPFS"],
    category: "Web3 + AI",
    status: "Live",
    year: "2024",
    gradient: "from-cyan-500 via-blue-600 to-purple-700",
    accentColor: "#00FFFF",
    link: "https://neuraldrop.xyz",
    github: "https://github.com/sharif/neuraldrop",
    featured: true,
  },
  {
    id: 2,
    title: "ContextOS",
    description:
      "An AI second brain — a personal knowledge management tool with RAG-powered semantic search, auto-tagging, and chat interface over your notes.",
    tags: ["Next.js", "LangChain", "Pinecone", "Postgres", "Vercel AI"],
    category: "AI Tools",
    status: "Live",
    year: "2024",
    gradient: "from-violet-600 via-purple-700 to-pink-700",
    accentColor: "#9B30FF",
    link: "https://contextos.app",
    github: "https://github.com/sharif/contextos",
    featured: true,
  },
  {
    id: 3,
    title: "ChainPulse",
    description:
      "Real-time DeFi analytics dashboard with wallet tracking, protocol health scores, and AI-generated market summaries across 12 chains.",
    tags: ["React", "The Graph", "Ethers.js", "D3.js", "Node.js"],
    category: "Web3",
    status: "Live",
    year: "2023",
    gradient: "from-pink-600 via-rose-700 to-orange-600",
    accentColor: "#FF2D78",
    link: "https://chainpulse.io",
    github: "https://github.com/sharif/chainpulse",
    featured: true,
  },
  {
    id: 4,
    title: "Vibe Studio",
    description:
      "Collaborative browser-based code editor with AI pair-programming, real-time multiplayer, and instant Vercel deployment from the browser.",
    tags: ["Next.js", "WebSockets", "Monaco", "OpenAI", "Vercel API"],
    category: "Dev Tools",
    status: "Beta",
    year: "2024",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    accentColor: "#39FF14",
    link: "https://viberstudio.dev",
    github: "https://github.com/sharif/vibe-studio",
    featured: false,
  },
  {
    id: 5,
    title: "Fomosphere",
    description:
      "Social prediction market on Farcaster — users bet on trending topics using FOMO tokens. Fully onchain, composable with Frames v2.",
    tags: ["Farcaster", "Frames", "Solidity", "Base", "Next.js"],
    category: "Web3",
    status: "Live",
    year: "2024",
    gradient: "from-orange-500 via-amber-600 to-yellow-500",
    accentColor: "#FF6B00",
    link: "https://fomosphere.xyz",
    github: "https://github.com/sharif/fomosphere",
    featured: false,
  },
  {
    id: 6,
    title: "Dopamine",
    description:
      "Habit tracker with AI behavioral coaching, streak analytics, and gamified reward systems. 12k+ active users.",
    tags: ["React Native", "Expo", "Node.js", "Postgres", "OpenAI"],
    category: "Mobile App",
    status: "Live",
    year: "2023",
    gradient: "from-blue-600 via-indigo-700 to-violet-700",
    accentColor: "#6366F1",
    link: "https://dopamineapp.io",
    github: "https://github.com/sharif/dopamine",
    featured: false,
  },
];

export const stats = [
  { label: "Projects Shipped", value: "30+" },
  { label: "GitHub Stars", value: "2.4k" },
  { label: "Years Building", value: "5+" },
  { label: "Chains Deployed", value: "8" },
];

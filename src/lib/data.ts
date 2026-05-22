export const siteConfig = {
  name: "Sharif",
  title: "Sharif — Fullstack Vibecoder",
  description:
    "Nigerian-born fullstack vibecoder building real-world Web3 products, AI execution layers, and tools that actually ship.",
  url: "https://myportfolio.vercel.app",
  ogImage: "/og.png",
  author: "Sharif",
  keywords: [
    "fullstack developer",
    "web3",
    "AI tools",
    "Next.js",
    "React",
    "vibecoder",
    "Nigerian developer",
    "blockchain",
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
    href: "https://github.com/Sharif899",
    icon: "github",
  },
  {
    label: "Twitter",
    href: "https://x.com/0xNinofi",
    icon: "twitter",
  },
  {
    label: "Email",
    href: "mailto:sherifolabode@gmail.com",
    icon: "mail",
  },
];

export const skills = [
  {
    category: "Frontend",
    color: "#00FFFF",
    items: [
      { name: "Next.js", level: 95 },
      { name: "React", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 82 },
    ],
  },
  {
    category: "Backend",
    color: "#9B30FF",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Supabase", level: 88 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "Prisma", level: 78 },
    ],
  },
  {
    category: "Web3",
    color: "#FF2D78",
    items: [
      { name: "Solidity", level: 80 },
      { name: "Ethers.js", level: 85 },
      { name: "wagmi", level: 88 },
      { name: "Arc SDK", level: 85 },
      { name: "IPFS", level: 72 },
    ],
  },
  {
    category: "AI & Tools",
    color: "#39FF14",
    items: [
      { name: "OpenAI API", level: 88 },
      { name: "Vercel AI SDK", level: 85 },
      { name: "Git", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 95 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AssetDot",
    description:
      "RWA tokenization platform on Portaldot. Tokenize Lagos real estate & African farmland — trade and bridge across chains with ZKP privacy.",
    tags: ["Next.js", "ink!", "ZKP", "Polkadot", "Web3"],
    category: "Web3",
    status: "Live",
    year: "2026",
    gradient: "from-cyan-500 via-blue-600 to-purple-700",
    accentColor: "#00FFFF",
    link: "https://assetdot.vercel.app",
    github: "https://github.com/Sharif899",
    featured: true,
  },
  {
    id: 2,
    title: "Arc Terminal",
    description:
      "Full-featured DeFi trading terminal. Send USDC, swap EURC, bridge chains, manage payroll and storefronts — all in one place on Arc Testnet.",
    tags: ["Next.js", "Arc SDK", "USDC", "DeFi"],
    category: "Web3",
    status: "Live",
    year: "2026",
    gradient: "from-violet-600 via-purple-700 to-pink-700",
    accentColor: "#9B30FF",
    link: "https://arcterminal.vercel.app",
    github: "https://github.com/Sharif899",
    featured: true,
  },
  {
    id: 3,
    title: "ORO",
    description:
      "AI-powered execution layer for capital. Set your strategy once — ORO monitors, adapts, and executes 24/7 with 99.6% accuracy and zero emotion.",
    tags: ["Next.js", "AI", "DeFi", "zkTLS", "TEEs"],
    category: "AI + Web3",
    status: "Live",
    year: "2026",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    accentColor: "#FF6B00",
    link: "https://orobest.vercel.app",
    github: "https://github.com/Sharif899",
    featured: true,
  },
  {
    id: 4,
    title: "ShelbyChat",
    description:
      "Decentralized, permanent, uncensorable chat built on Shelby Protocol. Every message is a permanent blob on-chain — no deletion, no censorship, ever.",
    tags: ["Next.js", "Shelby Protocol", "Web3", "Decentralized"],
    category: "Web3",
    status: "Live",
    year: "2026",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    accentColor: "#39FF14",
    link: "https://shelbychatt.vercel.app",
    github: "https://github.com/Sharif899",
    featured: false,
  },
  {
    id: 5,
    title: "ChainPulse",
    description:
      "AI-powered DeFi analytics dashboard powered by OpenGradient. Live market scores, whale alerts, wallet reputation analysis — all verified on-chain.",
    tags: ["Next.js", "OpenGradient", "AI", "DeFi", "TEE"],
    category: "AI + Web3",
    status: "Live",
    year: "2026",
    gradient: "from-blue-600 via-indigo-700 to-violet-700",
    accentColor: "#6366F1",
    link: "https://chainpuls.vercel.app",
    github: "https://github.com/Sharif899",
    featured: false,
  },
  {
    id: 6,
    title: "CertVault",
    description:
      "Issue tamper-proof certificates stored permanently on Shelby Protocol. Anyone can verify authenticity instantly with just a link — certificates that cannot be faked.",
    tags: ["Next.js", "Shelby Protocol", "Web3", "Credentials"],
    category: "Web3",
    status: "Live",
    year: "2026",
    gradient: "from-pink-600 via-rose-700 to-orange-600",
    accentColor: "#FF2D78",
    link: "https://certvaultt.vercel.app",
    github: "https://github.com/Sharif899",
    featured: false,
  },
  {
    id: 7,
    title: "ArcBounty",
    description:
      "Onchain developer bounty board. Post tasks, claim work, get paid in real USDC via Arc SDK with sub-second settlement. No middleman.",
    tags: ["Next.js", "Arc SDK", "Supabase", "USDC"],
    category: "Web3",
    status: "Live",
    year: "2026",
    gradient: "from-yellow-500 via-orange-600 to-red-600",
    accentColor: "#FF6B00",
    link: "https://arcbounty.vercel.app",
    github: "https://github.com/Sharif899",
    featured: false,
  },
  {
    id: 8,
    title: "OsogboRent",
    description:
      "Osogbo's most trusted property platform. Verified listings of houses, shops and apartments for rent or sale across Osun State, Nigeria.",
    tags: ["Next.js", "Supabase", "Real Estate", "Nigeria"],
    category: "Web App",
    status: "Live",
    year: "2026",
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    accentColor: "#10B981",
    link: "https://osogborent.com",
    github: "https://github.com/Sharif899",
    featured: false,
  },
];

export const stats = [
  { label: "Projects Shipped", value: "8+" },
  { label: "Chains Deployed", value: "4+" },
  { label: "Years Building", value: "3+" },
  { label: "Based In", value: "🇳🇬" },
];

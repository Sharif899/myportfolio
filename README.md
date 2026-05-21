# Sharif Portfolio — vibecoder.dev

A premium personal portfolio site built with Next.js 14, Tailwind CSS, and Framer Motion. Clean, futuristic, interactive, and fast.

## ✨ Features

- **Loading animation** — Cyberpunk terminal boot screen
- **Hero section** — Typewriter effect, animated stats, social links
- **About section** — Bio, skill pillars, origin story timeline
- **Skills section** — Animated progress bars organized by domain
- **Projects section** — Filterable project grid with hover states
- **Contact section** — Working form + social links
- **Cursor glow** — Subtle cursor-tracking radial glow
- **Scanline effect** — Subtle CRT scanline overlay
- **Smooth scroll** — Native smooth scrolling between sections
- **SEO optimized** — Full metadata, OpenGraph, Twitter cards
- **Responsive** — Mobile-first, looks great on all screens
- **Dark mode** — Permanent dark mode with cyberpunk aesthetic

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion v11
- **Typography**: Syne (display), JetBrains Mono (code), DM Sans (body)
- **Icons**: Lucide React
- **Type system**: TypeScript

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone or download the project
cd sharif-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
sharif-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + metadata
│   │   └── page.tsx            # Main page composition
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky navbar with active section detection
│   │   │   └── Footer.tsx      # Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero with typewriter + parallax
│   │   │   ├── About.tsx       # Bio + pillars + timeline
│   │   │   ├── Skills.tsx      # Skill bars by category
│   │   │   ├── Projects.tsx    # Filterable project grid
│   │   │   └── Contact.tsx     # Contact form + socials
│   │   └── ui/
│   │       ├── Loader.tsx      # Boot screen loading animation
│   │       ├── CursorGlow.tsx  # Mouse-tracking glow effect
│   │       ├── ScanlineEffect.tsx
│   │       ├── SectionWrapper.tsx
│   │       ├── ProjectCard.tsx
│   │       └── SocialIcon.tsx
│   ├── lib/
│   │   ├── data.ts             # ← ALL YOUR CONTENT LIVES HERE
│   │   └── utils.ts
│   └── styles/
│       └── globals.css         # Global styles + CSS variables
├── public/                     # Static assets
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
└── package.json
```

## ✏️ Customization

### Update your content

All portfolio content is centralized in **`src/lib/data.ts`**:

```ts
// Update personal info
export const siteConfig = {
  name: "Sharif",
  title: "Sharif — Fullstack Vibecoder",
  url: "https://yoursite.com",
  // ...
}

// Update social links (href values)
export const socialLinks = [...]

// Add/edit projects
export const projects = [...]

// Add/remove skills
export const skills = [...]
```

### Add your photo

Replace the avatar placeholder in `src/components/sections/About.tsx`:

```tsx
// Find the avatar div and replace with:
<Image
  src="/images/sharif.jpg"  // Add to /public/images/
  alt="Sharif"
  width={128}
  height={128}
  className="object-cover"
/>
```

### Update the contact form

The form in `Contact.tsx` simulates a submission. Wire it up to a real email service:

**Option 1 — Resend (recommended):**
```bash
npm install resend
```
Create `src/app/api/contact/route.ts` and POST to it.

**Option 2 — EmailJS (client-side, no backend):**
```bash
npm install @emailjs/browser
```

**Option 3 — Formspree (easiest):**
Change form `action` to your Formspree endpoint.

### Add your resume

Drop `resume.pdf` into `/public/` — the Resume button in the Hero links to it.

### Custom domain fonts

Fonts load from Google Fonts via `globals.css`. To self-host, download the font files and add them to `/public/fonts/`.

## 🌐 Deploy to Vercel

### Method 1 — Vercel CLI (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from project root)
vercel

# Production deploy
vercel --prod
```

### Method 2 — GitHub + Vercel Dashboard

1. Push your code to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy**

That's it. Vercel handles the rest automatically.

### Method 3 — One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/sharif-portfolio)

### Environment Variables

No environment variables are required for basic deployment.

If you add a contact form API (Resend, etc.), add:
```
RESEND_API_KEY=your_key_here
```

## 🎨 Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `cyber-500` | `#00FFFF` | Primary accent, borders, highlights |
| `neon.pink` | `#FF2D78` | Danger, special callouts |
| `neon.purple` | `#9B30FF` | Secondary accent |
| `neon.green` | `#39FF14` | Success states |
| `dark-950` | `#04040c` | Background |
| `dark-800` | `#10101c` | Surface |

### Typography

| Font | Usage |
|------|-------|
| Syne | Headings, display text |
| JetBrains Mono | Code, labels, tags |
| DM Sans | Body text, descriptions |

### Key CSS classes

```css
.glass         /* Frosted glass background */
.glass-card    /* Card with hover glow */
.cyber-text    /* Cyan-to-purple gradient text */
.cyber-btn     /* Diagonal-clipped cyberpunk button */
.neon-border   /* Cyan glowing border */
.tag-pill      /* Small monospace tag */
```

## 📊 Performance

Target scores (before custom images/content):
- **Lighthouse Performance**: 95+
- **Accessibility**: 95+
- **SEO**: 100
- **Best Practices**: 100

## 🧩 Adding New Sections

1. Create `src/components/sections/NewSection.tsx`
2. Add to the nav links in `src/lib/data.ts`
3. Import and render in `src/app/page.tsx`

## 📝 License

MIT — use freely for your own portfolio.

---

Built with ⚡ by Sharif

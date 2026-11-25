# Sherif Olabode — Senior Portfolio (v2)

A personal portfolio for Sherif Olabode, Senior AI Evaluator & Trainer
(LLM evaluation, RLHF & QA) and Software Engineer, Ph.D. Data Science.

## Design

v2 is a full rethink, not a polish of v1. Light, editorial, typography-led:
warm paper background, ink text, one restrained pine accent, Fraunces
serif display type with Inter body text (loaded via `next/font`, self-hosted
at build — no runtime font dependency). No dark mode, no loading screens,
no typewriters, no gradients, no glassmorphism. Restrained scroll reveals
only, respecting `prefers-reduced-motion`.

The page is structured as a visitor's questions, in order:

1. **Hero** — positioning: "I decide whether AI systems are good enough to ship",
   with a proof strip of linked evidence instead of a stats wall, and a
   "Currently" line (building a Spark + MLflow evaluation pipeline).
2. **Selected Work** — four case studies with depth (problem → approach →
   outcome → evidence): llm-eval-toolkit, kyc-onboarding-service,
   ai-safety-red-teaming, annotation-qa-toolkit; the fact column alternates
   sides so the four entries do not read as one repeated card. Plus a compact
   "More work" list (ml-evaluation-toolkit, OsogboRent, ChainPulse, CertVault,
   ArcBounty, ORO, ShelbyChat).
3. **What I Believe** — four convictions, each with a receipt (a link to the
   tool where the belief shows up), plus a coda: nothing leaves the room.
4. **Notes from the Work** — two short stories with a decision in them: the
   Seamfix duplicate-records fix, and the ugly 50% attack-success number
   published anyway. Each carries its source.
5. **What I can be hired for** — four engagement types as an index list, each
   with a proof line.
6. **Experience** — "Where the numbers come from": timeline with outcomes,
   not duties.
7. **Tools** — "What I reach for, and why": every tool with one sentence
   explaining the choice. No tag clouds, no percentages.
8. **Education & Credentials** — PhD / MSc / BSc and three certifications,
   framed as why the PhD matters.
9. **Writing** — the repos' READMEs are the writing; no invented blog posts.
10. **Contact** — real email and links, availability, no form.

Every number on the page comes from the CV or the public repositories.
No fake testimonials, clients, quotes or images. The copy is written to
sound like one person, not a template: opinions with edges, uneven
sentences, and receipts next to every claim.

Every number on the page comes from the CV or the public repositories.
No fake testimonials, clients, quotes or images.

## Stack

Next.js 15, React 18, TypeScript, Tailwind CSS. No animation library — a
small `Reveal` component (IntersectionObserver + CSS) handles scroll reveals.
Fonts via `next/font/google` (Fraunces + Inter).

## Run

```bash
npm install
npm run build
npm start
```

The CV is served from `public/sherif-olabode-cv.pdf`.

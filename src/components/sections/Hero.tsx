import { ArrowDown } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { siteConfig } from '@/lib/data'

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <Reveal>
          <p className="kicker">
            Senior AI Evaluator &amp; Trainer · {siteConfig.location}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl md:text-6xl"
          >
            I decide whether AI systems are{' '}
            <em className="not-italic text-pine">good enough to ship.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            I have spent seven years scoring large language models, auditing the
            people who label their data, and building the software that turns
            those judgements into something you can check. A verdict you cannot
            explain is a guess. So I build the explanation into the tool.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 max-w-2xl border-l-2 border-pine pl-4 text-base leading-relaxed text-ink-muted">
            <a className="text-link" href="#education">PhD, Data Science</a>
            {' · '}
            <a className="text-link" href="#experience">iMerit since 2019</a>
            {' · '}
            <a className="text-link" href="#experience">Databricks since 2020</a>
            {' · '}
            <a className="text-link" href="#experience">12,000+ responses scored at 97% quality</a>
            {' · '}
            <a className="text-link" href="#work">10 open-source evaluation tools</a>
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10">
            <a href="#work" className="btn-primary">
              Read the work
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <p className="mt-6 max-w-2xl border-l-2 border-pine pl-4 text-base leading-relaxed text-ink-muted">
              I shipped the Northstar evaluation platform for a client and a
              Yoruba LLM benchmark, and I am taking on remote evaluation and
              engineering work. Write to me:{' '}
              <a className="text-link" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import NextLink from 'next/link';
import { Link } from '@/components/ui/link';
import { Prompt } from '@/components/prompt';
import { ModeToggle } from '@/components/mode-toggle';
import { CompanyPopover } from '@/components/company-popover';

const work: { year: string; role: string; org: string; blurb: string }[] = [
  {
    year: '2025—',
    role: 'Senior Software Engineer',
    org: 'Hammer Media · DollarWise',
    blurb:
      'Hammer Media builds DollarWise, a personal-finance platform; I focus on resilient, scalable infrastructure for it.',
  },
  {
    year: '2024–25',
    role: 'Software Engineer, Frontend Lead',
    org: 'Perigon',
    blurb:
      'Turns real-time news and event data into actionable insights via AI-driven pipelines and developer-friendly APIs.',
  },
  {
    year: '2023–24',
    role: 'Software Engineer',
    org: 'Next Phase Solutions',
    blurb:
      'Built software for large enterprise and government customers. Acquired by Naviant in 2024.',
  },
  {
    year: '2023',
    role: 'Software Engineer',
    org: 'ActiveProspect',
    blurb: 'A SaaS platform for consent-based marketing and lead certification.',
  },
  {
    year: '2021–22',
    role: 'Full-Stack Developer',
    org: 'Givinga',
    blurb:
      'A fintech platform offering philanthropy-as-a-service through a giving API.',
  },
  {
    year: '2021—',
    role: 'Industry Mentor',
    org: 'BrainStation',
    blurb:
      'A digital-skills training company; I mentor web-development students.',
  },
  {
    year: '2018–21',
    role: 'SVP, Investigations',
    org: 'Vcheck',
    blurb:
      'A background-investigation and due-diligence firm; I led investigations teams.',
  },
  {
    year: '2017–18',
    role: 'Private Investigator',
    org: 'iUnlimited Investigative Services',
    blurb:
      'A private investigation firm; I worked as an investigator and regional training coordinator.',
  },
  {
    year: '2011–19',
    role: 'HUMINT Collector',
    org: 'U.S. Army',
    blurb:
      'Served as a Human Intelligence (HUMINT) Collector, 314th Military Intelligence Battalion.',
  },
];

const tools: [string, string][] = [
  ['machine', 'macOS · Fedora · zsh · cmux · Ghostty'],
  ['editor', 'Zed · JetBrains Mono'],
  ['ai', 'opencode · T3 Code · Claude Code · Cursor · Codex'],
  [
    'stack',
    'Vite + React · Vue · Laravel · Convex · TS · Tailwind · Postgres · Vercel · Cloudflare · AWS',
  ],
  ['hardware', 'Neo60 CU (HHKB) · Cherry MX Black · DCS · MX Master 3S'],
];

const navClass = 'hover:text-(--color-accent) transition-colors';

export default function Home() {
  return (
    <div className='min-h-[calc(100dvh-5rem)] flex flex-col justify-center space-y-12'>
      <section>
        <Prompt cmd='whoami' caret />
        <h1 className='text-2xl sm:text-3xl font-semibold tracking-tight mb-2'>
          <Link href='https://opencv.app/@sean'>Sean Gil</Link>
        </h1>
        <p className='text-(--color-dim) text-sm mb-3'>
          software engineer · technical consultant · army veteran
        </p>
        <p className='leading-relaxed text-(--color-fg)'>
          Building resilient, scalable infrastructure for{' '}
          <Link href='https://dollarwise.com'>DollarWise</Link> @ Hammer Media.
          Based in Austin, TX.
        </p>
      </section>

      <section>
        <Prompt cmd='ls ~/tools' />
        <p className='text-(--color-dim) text-sm mb-4'>
          I build my own tooling for coding agents &mdash;{' '}
          <Link href='https://www.narulabs.co/f'>Naru Labs ↗</Link>
        </p>
        <dl className='font-mono text-sm'>
          {tools.map(([key, value]) => (
            <div
              key={key}
              className='flex items-baseline gap-4 py-1 border-b border-(--color-border) last:border-b-0'
            >
              <dt className='text-(--color-dim) uppercase tracking-wider w-[12ch] shrink-0'>
                {key}
              </dt>
              <dd className='text-(--color-fg)'>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <Prompt cmd='cat work.log' />
        <dl className='font-mono text-sm'>
          {work.map((w, i) => (
            <div
              key={i}
              className='flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 py-2 border-b border-(--color-border) last:border-b-0'
            >
              <dt className='text-(--color-dim) tabular-nums sm:w-[8ch] shrink-0'>
                {w.year}
              </dt>
              <dd className='text-(--color-fg)'>
                {w.role}
                <span className='text-(--color-dim)'> @ </span>
                <CompanyPopover name={w.org} blurb={w.blurb} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className='flex items-center justify-between text-sm text-(--color-dim)'>
        <nav className='flex items-center gap-4'>
          <a
            href='https://github.com/sean35mm'
            target='_blank'
            rel='noopener noreferrer'
            className={navClass}
          >
            github
          </a>
          <a
            href='https://www.linkedin.com/in/seanhgil/'
            target='_blank'
            rel='noopener noreferrer'
            className={navClass}
          >
            linkedin
          </a>
          <NextLink href='/blog' className={navClass}>
            blog
          </NextLink>
        </nav>
        <ModeToggle />
      </section>
    </div>
  );
}

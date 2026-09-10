import { Link } from '@/components/ui/link';
import { CompanyPopover } from '@/components/company-popover';
import { KeyboardPlayground } from '@/components/keyboard-playground';
import { SelectedProjects } from '@/components/selected-projects';
import type { ReactNode } from 'react';

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
    role: 'Human Intelligence Collector',
    org: 'U.S. Army',
    blurb:
      'Served as a Human Intelligence (HUMINT) Collector, 314th Military Intelligence Battalion.',
  },
];

const tools: [string, ReactNode][] = [
  ['machine', 'macOS · Omarchy · zsh · cmux · Ghostty'],
  ['editor', 'Zed · JetBrains Mono'],
  [
    'ai',
    <>
      opencode · T3 Code · Claude Code · Cursor · Codex ·{' '}
      <Link href='https://www.narulabs.co/'>Naru Labs</Link>
    </>,
  ],
  [
    'stack',
    'Vite + React · Vue · Laravel · Convex · TS · Tailwind · Postgres · Vercel · Cloudflare · AWS',
  ],
  ['hardware', <KeyboardPlayground key='hardware' />],
];

export default function Home() {
  return (
    <div className='space-y-20 sm:space-y-24'>
      <section aria-labelledby='intro-heading' className='max-w-[68ch] pt-4 sm:pt-10'>
        <p className='mb-3 text-sm text-(--color-dim)'>Austin, Texas</p>
        <h1 id='intro-heading' className='text-3xl sm:text-4xl font-semibold tracking-[-0.035em] leading-tight'>
          <Link href='https://opencv.app/@sean'>Sean Gil</Link>
        </h1>
        <p className='mt-6 text-base sm:text-lg leading-relaxed text-(--color-fg)'>
          I&rsquo;m a software engineer, technical consultant, and Army veteran. I
          build resilient infrastructure for{' '}
          <Link href='https://dollarwise.com'>DollarWise</Link> at Hammer Media.
        </p>
        <p className='mt-4 text-base leading-relaxed text-(--color-dim)'>
          I also build my own tooling for coding agents through{' '}
          <Link href='https://www.narulabs.co/f'>Naru Labs</Link>.
        </p>
      </section>

      <SelectedProjects />

      <section aria-labelledby='work-heading'>
        <div className='section-heading'>
          <h2 id='work-heading' className='text-xl font-semibold tracking-tight'>
            Work
          </h2>
          <p className='text-sm text-(--color-dim)'>2011—present</p>
        </div>
        <ol className='work-list'>
          {work.map((w) => (
            <li key={`${w.year}-${w.org}`} className='work-item'>
              <time className='work-year tabular-nums text-sm text-(--color-dim)'>
                {w.year}
              </time>
              <div className='min-w-0'>
                <CompanyPopover name={w.org} blurb={w.blurb} />
                <p className='mt-1 text-sm leading-relaxed text-(--color-dim)'>
                  {w.role}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby='tools-heading'>
        <div className='section-heading'>
          <h2 id='tools-heading' className='text-xl font-semibold tracking-tight'>
            Tools I use
          </h2>
          <p className='text-sm text-(--color-dim)'>A current snapshot</p>
        </div>
        <dl className='tools-list text-sm'>
          {tools.map(([key, value]) => (
            <div key={key} className='tool-row'>
              <dt className='text-(--color-dim)'>{key}</dt>
              <dd className='leading-relaxed text-(--color-fg)'>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

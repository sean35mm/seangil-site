import type { Metadata } from 'next';
import { Link } from '@/components/ui/link';
import { Prompt } from '@/components/prompt';

export const metadata: Metadata = {
  title: 'uses — Sean Gil',
  description: 'Tools, hardware, and software I use day to day.',
};

const sections: { title: string; rows: [string, React.ReactNode][] }[] = [
  {
    title: 'machine',
    rows: [
      ['os', 'macOS · Fedora Linux'],
      ['shell', 'zsh'],
      ['terminal', 'cmux · Ghostty'],
    ],
  },
  {
    title: 'editor',
    rows: [
      ['editor', 'Zed'],
      ['font', 'JetBrains Mono'],
    ],
  },
  {
    title: 'ai',
    rows: [
      ['primary', 'opencode'],
      ['also', 'T3 Code · Claude Code · Cursor · Codex'],
    ],
  },
  {
    title: 'stack',
    rows: [
      ['primary', 'Vite + React'],
      ['also', 'Vue · Laravel · Convex · + other JS frameworks'],
      ['languages', 'TypeScript · JavaScript · Java · Python'],
      ['styling', 'Tailwind · CSS'],
      ['tooling', 'pnpm · bun'],
      ['data', 'Postgres · MongoDB'],
      ['infra', 'Vercel · Cloudflare · DigitalOcean · Laravel Cloud · AWS'],
    ],
  },
  {
    title: 'hardware',
    rows: [
      ['keyboard', 'Neo60 CU (HHKB layout)'],
      ['switches', 'Cherry MX Black MX2A'],
      ['keycaps', 'DCS'],
      ['mouse', 'Logitech MX Master 3S'],
    ],
  },
];

export default function Uses() {
  return (
    <div className='space-y-8'>
      <section>
        <Prompt cmd='cat ~/uses.toml' />
        <p className='text-(--color-dim) text-sm'>
          Tools, hardware, and software I use day to day. Inspired by{' '}
          <Link href='https://uses.tech'>uses.tech</Link>.
        </p>
      </section>

      {sections.map((section) => (
        <section key={section.title}>
          <h2 className='text-(--color-meta) text-sm mb-2'>[{section.title}]</h2>
          <dl className='font-mono text-sm'>
            {section.rows.map(([key, value]) => (
              <div
                key={key}
                className='flex items-baseline gap-4 py-1 border-b border-(--color-border) last:border-b-0'
              >
                <dt className='text-(--color-dim) w-[12ch] shrink-0'>{key}</dt>
                <dd className='text-(--color-fg)'>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}

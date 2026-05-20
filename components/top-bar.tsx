import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';

const navItems = [
  { href: '/', label: 'home' },
  { href: '/blog', label: 'blog' },
  { href: '/uses', label: 'uses' },
  { href: 'https://github.com/sean35mm', label: 'github', external: true },
];

export function TopBar() {
  return (
    <header className='sticky top-0 z-50 border-b border-(--color-border) bg-(--color-bg)/85 backdrop-blur'>
      <div className='max-w-3xl mx-auto px-4 h-10 flex items-center justify-between text-sm'>
        <div className='font-semibold tracking-tight'>
          <span className='text-(--color-accent)'>sean@gil</span>
          <span className='text-(--color-dim)'>:</span>
          <span className='text-(--color-meta)'>~</span>
          <span className='text-(--color-dim)'>$</span>
        </div>
        <nav className='flex items-center gap-4 text-(--color-dim)'>
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-(--color-accent) transition-colors'
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className='hover:text-(--color-accent) transition-colors'
              >
                {item.label}
              </Link>
            )
          )}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}

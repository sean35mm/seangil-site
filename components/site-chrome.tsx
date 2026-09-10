'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '@/components/mode-toggle';

const navLinkClass =
  'site-nav-link rounded-sm px-1 py-2 text-sm text-(--color-dim) transition-colors duration-150 hover:text-(--color-fg)';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className='site-header max-w-4xl w-full mx-auto px-5 sm:px-8'>
      <nav aria-label='Primary navigation' className='flex items-center justify-between py-5'>
        <div className='flex items-center gap-4'>
          <NextLink
            href='/'
            aria-current={pathname === '/' ? 'page' : undefined}
            className={navLinkClass}
          >
            Home
          </NextLink>
          <NextLink
            href='/blog'
            aria-current={pathname.startsWith('/blog') ? 'page' : undefined}
            className={navLinkClass}
          >
            Writing
          </NextLink>
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className='max-w-4xl w-full mx-auto px-5 sm:px-8 py-8 text-sm text-(--color-dim)'>
      <div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-(--color-border) pt-5'>
        <span>Sean Gil · Austin, TX</span>
        <nav aria-label='Social links' className='flex items-center gap-4'>
          <a
            href='https://github.com/sean35mm'
            target='_blank'
            rel='noopener noreferrer'
            className='site-nav-link py-2 transition-colors duration-150 hover:text-(--color-fg)'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/seanhgil/'
            target='_blank'
            rel='noopener noreferrer'
            className='site-nav-link py-2 transition-colors duration-150 hover:text-(--color-fg)'
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // next-themes pattern: defer rendering until mounted to avoid hydration mismatch
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const label = mounted ? (resolvedTheme === 'light' ? 'dark' : 'light') : '';

  return (
    <button
      type='button'
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      aria-label='toggle color mode'
      className='inline-flex items-center justify-center min-w-[7ch] text-(--color-dim) hover:text-(--color-accent) transition-colors'
    >
      <span aria-hidden='true' className='text-(--color-border)'>
        [
      </span>
      <span className='inline-block w-[5ch] text-center tabular-nums'>
        {label}
      </span>
      <span aria-hidden='true' className='text-(--color-border)'>
        ]
      </span>
    </button>
  );
}

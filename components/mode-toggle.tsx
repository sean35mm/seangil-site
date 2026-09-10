'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // next-themes pattern: defer rendering until mounted to avoid hydration mismatch
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';
  const label = mounted ? `${targetTheme} mode` : 'theme';

  return (
    <button
      type='button'
      onClick={() => setTheme(targetTheme)}
      aria-label={mounted ? `Switch to ${targetTheme} mode` : 'Change color theme'}
      className='theme-toggle inline-flex min-h-10 min-w-[12ch] items-center justify-end rounded-sm px-1 text-sm text-(--color-dim) transition-colors duration-150 hover:text-(--color-fg)'
    >
      <span className='inline-block w-[10ch] text-right'>{label}</span>
    </button>
  );
}

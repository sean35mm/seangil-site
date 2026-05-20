import NextLink from 'next/link';
import type { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const baseClass =
  'text-(--color-accent) underline decoration-dotted decoration-(--color-border) underline-offset-4 transition-colors hover:decoration-(--color-accent)';

export function Link({ href, children, className }: LinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  const cls = className ? `${baseClass} ${className}` : baseClass;

  if (isExternal) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' className={cls}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cls}>
      {children}
    </NextLink>
  );
}

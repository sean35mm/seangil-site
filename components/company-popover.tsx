'use client';

import { useEffect, useId, useRef, useState } from 'react';

interface CompanyPopoverProps {
  name: string;
  blurb: string;
}

export function CompanyPopover({ name, blurb }: CompanyPopoverProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <span ref={wrapperRef} className='relative inline-block'>
      <button
        ref={buttonRef}
        type='button'
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className='cursor-pointer text-(--color-accent) underline decoration-dotted decoration-(--color-border) underline-offset-4 transition-colors hover:decoration-(--color-accent)'
      >
        {name}
      </button>
      {open && (
        <span
          id={panelId}
          role='region'
          aria-label={`About ${name}`}
          className='absolute left-0 top-full z-50 mt-2 block w-[min(20rem,80vw)] border border-(--color-border) bg-(--color-bg) p-3 text-xs leading-relaxed text-(--color-dim) shadow-lg shadow-black/30'
        >
          {blurb}
        </span>
      )}
    </span>
  );
}

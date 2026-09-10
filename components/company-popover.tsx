interface CompanyPopoverProps {
  name: string;
  blurb: string;
}

export function CompanyPopover({ name, blurb }: CompanyPopoverProps) {
  return (
    <details className='company-details'>
      <summary className='company-summary cursor-pointer rounded-sm text-base font-medium text-(--color-fg)'>
        {name}
      </summary>
      <p className='mt-2 max-w-[65ch] text-sm leading-relaxed text-(--color-dim)'>
        {blurb}
      </p>
    </details>
  );
}

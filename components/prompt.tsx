import { Caret } from '@/components/caret';

interface PromptProps {
  cmd: string;
  caret?: boolean;
}

export function Prompt({ cmd, caret = false }: PromptProps) {
  return (
    <div className='text-sm text-(--color-dim) mb-3 select-none'>
      <span className='text-(--color-accent)'>$</span>{' '}
      <span className='text-(--color-fg)'>{cmd}</span>
      {caret && <Caret />}
    </div>
  );
}

import { Link } from '@/components/ui/link';
import { Prompt } from '@/components/prompt';

export default function NotFound() {
  return (
    <div className='space-y-4'>
      <Prompt cmd='cd ./that-page' />
      <pre className='text-(--color-fg) whitespace-pre-wrap font-mono text-sm'>
{`bash: cd: ./that-page: No such file or directory
exit status: 1`}
      </pre>
      <p className='text-(--color-dim) text-sm'>
        That route doesn&rsquo;t exist. Try <Link href='/'>~</Link> or{' '}
        <Link href='/blog'>~/blog</Link>.
      </p>
    </div>
  );
}

import { Link } from '@/components/ui/link';
export default function NotFound() {
  return (
    <section aria-labelledby='not-found-heading' className='max-w-[60ch] pt-10 sm:pt-20'>
      <p className='mb-3 text-sm text-(--color-dim)'>404</p>
      <h1 id='not-found-heading' className='text-3xl sm:text-4xl font-semibold tracking-[-0.035em]'>
        Page not found
      </h1>
      <p className='mt-5 leading-relaxed text-(--color-dim)'>
        That address doesn&rsquo;t lead anywhere. Return <Link href='/'>home</Link>{' '}
        or browse the <Link href='/blog'>writing archive</Link>.
      </p>
    </section>
  );
}

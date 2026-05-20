import { Link } from '@/components/ui/link';
import { Prompt } from '@/components/prompt';

export default function Home() {
  return (
    <div className='min-h-[calc(100dvh-9rem)] flex flex-col justify-center space-y-10'>
      <section>
        <Prompt cmd='whoami' caret />
        <h1 className='text-2xl sm:text-3xl font-semibold tracking-tight mb-4'>
          <Link href='https://opencv.app/@sean'>Sean Gil</Link>
        </h1>
        <div className='space-y-4 leading-relaxed text-(--color-fg)'>
          <p>
            Software Engineer, Technical Consultant and Army Veteran.
          </p>
          <p>
            I joined Hammer Media as a Senior Software Engineer, where I&rsquo;ll
            be focused on building resilient, scalable technology for their
            flagship product,{' '}
            <Link href='https://dollarwise.com'>DollarWise</Link>. For updates,
            connect on{' '}
            <Link href='https://www.linkedin.com/in/seanhgil/'>LinkedIn</Link>.
          </p>
          <p>
            Previously at <Link href='https://perigon.io'>Perigon</Link>, we
            delivered the power of contextual intelligence&mdash;turning
            real&#8209;time news and event data into actionable insights with
            AI&#8209;driven pipelines and developer&#8209;friendly APIs.
          </p>
          <p>
            Before that, I built and configured software solutions for large
            enterprise and government customers as a software engineer at{' '}
            <Link href='https://npsols.com/'>Next Phase Solutions</Link> based
            in Orlando, FL. (Acquired by Naviant in 2024)
          </p>
          <p>
            I&rsquo;m passionate about making web development accessible and
            currently channel this drive at{' '}
            <Link href='https://brainstation.io'>BrainStation</Link>{' '}as a web
            development mentor. Off duty, you&rsquo;ll find me volunteering
            through <Link href='https://veterati.com'>Veterati</Link> and{' '}
            <Link href='https://streetwisepartners.org/'>
              Streetwise Partners
            </Link>
            .
          </p>
          <p>
            Born and raised in Southern California, but now enjoy life in
            Austin, TX with my beautiful wife, son, and bombay cat. When
            I&rsquo;m not coding, I am either{' '}
            <Link href='https://www.tiktok.com/@giltypleasure'>cooking</Link>{' '}
            or... who am I kidding, I am talking with robots.
          </p>
          <p>
            You can check out my projects on my{' '}
            <Link href='https://github.com/sean35mm'>Github</Link> or explore my
            thoughts on my <Link href='/blog'>blog</Link>.
          </p>
        </div>
      </section>

      <section>
        <Prompt cmd='cat ~/.now' />
        <pre className='text-sm text-(--color-fg) whitespace-pre-wrap font-mono'>
{`# now
location  : Austin, TX
focus     : DollarWise @ Hammer Media (resilient, scalable infra)
side      : web dev mentorship @ BrainStation
reading   : open to recs — ping me on LinkedIn`}
        </pre>
      </section>
    </div>
  );
}

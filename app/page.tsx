import { CustomLink } from '@/components/ui/CustomLink';

export default function Home() {
  return (
    <div>
      <div className='mt-10 space-y-5 leading-relaxed'>
        <h1 className='mt-6 text-3xl sm:text-4xl font-semibold tracking-tight'>
          <CustomLink url='https://opencv.app/@sean'>Sean Gil</CustomLink>
        </h1>
        <p className='mt-3'>
          Software Engineer, Technical Consultant and Army Veteran.
        </p>
        <p>
          I joined Hammer Media as a Senior Software Engineer, where I’ll be
          focused on building resilient, scalable technology for their flagship
          product,{' '}
          <CustomLink url='https://dollarwise.com'>DollarWise</CustomLink>. For
          updates, connect on{' '}
          <CustomLink url='https://www.linkedin.com/in/seanhgil/'>
            LinkedIn
          </CustomLink>
          .
        </p>
        <p>
          Previously at{' '}
          <CustomLink url='https://perigon.io'>Perigon</CustomLink>, we
          delivered the power of contextual intelligence—turning real‑time news
          and event data into actionable insights with AI‑driven pipelines and
          developer‑friendly APIs.
        </p>
        <p>
          Before that, I built and configured software solutions for large
          enterprise and government customers as a software engineer at{' '}
          <CustomLink url={'https://npsols.com/'}>
            Next Phase Solutions
          </CustomLink>{' '}
          based in Orlando, FL. (Acquired by Naviant in 2024)
        </p>
        <p>
          I’m passionate about making web development accessible and currently
          channel this drive at{' '}
          <CustomLink url='https://brainstation.io'>BrainStation</CustomLink> as
          a web development mentor. Off duty, you&rsquo;ll find me volunteering
          through <CustomLink url='https://veterati.com'>Veterati</CustomLink>{' '}
          and{' '}
          <CustomLink url='https://streetwisepartners.org/'>
            Streetwise Partners
          </CustomLink>
          .
        </p>
        <p>
          Born and raised in Southern California, but now enjoy life in Austin,
          TX with my beautiful wife, son, and bombay cat. When I&apos;m not
          coding, I am either{' '}
          <CustomLink url='https://www.tiktok.com/@giltypleasure'>
            cooking
          </CustomLink>{' '}
          or... who am I kidding, I AM CODING.
        </p>
        <p>
          You can check out my projects on my{' '}
          <CustomLink url='https://github.com/sean35mm'>Github</CustomLink> or
          explore my thoughts on my <CustomLink url='/blog'>blog</CustomLink>.
        </p>
      </div>
    </div>
  );
}

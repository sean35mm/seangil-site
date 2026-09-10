import Image from 'next/image';
import { Link } from '@/components/ui/link';
import styles from './selected-projects.module.css';

export function SelectedProjects() {
  return (
    <section aria-labelledby='projects-heading'>
      <div className='section-heading'>
        <h2 id='projects-heading' className='text-xl font-semibold tracking-tight'>
          Things I&rsquo;ve made
        </h2>
        <Link href='https://www.narulabs.co/' className='text-sm'>
          Naru Labs catalog
        </Link>
      </div>

      <div className={styles.list}>
        <article className={styles.project}>
          <div className={styles.copy}>
            <h3 className='text-lg font-semibold tracking-tight'>
              <Link href='https://github.com/sean35mm/weaver'>Weaver</Link>
            </h3>
            <p className='text-sm leading-relaxed text-(--color-fg)'>
              Helps coding agents see who&rsquo;s working on what before they edit the
              same files.
            </p>
            <p className='text-sm leading-relaxed text-(--color-dim)'>
              Local-first coordination. No account or background service.
            </p>
            <Link href='https://sean35mm.github.io/weaver/' className='text-sm'>
              Read the docs
            </Link>
          </div>

          <pre className={styles.code} aria-label='Documented Weaver coordination workflow'>
            <code>{`weaver status
weaver claim 'src/auth/**'
weaver done`}</code>
          </pre>
        </article>

        <article className={styles.project}>
          <div className={styles.copy}>
            <h3 className='text-lg font-semibold tracking-tight'>
              <Link href='https://opencv.app'>OpenCV</Link>
            </h3>
            <p className='text-sm leading-relaxed text-(--color-fg)'>
              A CV builder with live preview and a profile you can publish and share.
            </p>
            <p className='text-sm leading-relaxed text-(--color-dim)'>
              The editor and public profile use the same structured content.
            </p>
            <Link href='https://github.com/sean35mm/cv-builder' className='text-sm'>
              View source
            </Link>
          </div>

          <a
            href='https://opencv.app'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.imageLink}
            aria-label='Visit OpenCV'
          >
            <Image
              src='/projects/opencv.png'
              alt='OpenCV marketing homepage with profile address builder'
              width={760}
              height={450}
              className={styles.image}
            />
          </a>
        </article>
      </div>
    </section>
  );
}

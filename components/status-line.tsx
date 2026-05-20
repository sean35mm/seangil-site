const BUILD_DATE = new Date().toISOString().slice(0, 10);
const BRANCH = process.env.VERCEL_GIT_COMMIT_REF ?? 'main';
const SHA = (process.env.VERCEL_GIT_COMMIT_SHA ?? 'local').slice(0, 7);

export function StatusLine() {
  return (
    <footer className='border-t border-(--color-border) text-xs text-(--color-dim) mt-16'>
      <div className='max-w-3xl mx-auto px-4 h-8 flex items-center gap-4'>
        <span>
          <span className='text-(--color-meta)'>branch</span>:{BRANCH}
        </span>
        <span className='text-(--color-border)'>·</span>
        <span>
          <span className='text-(--color-meta)'>build</span>:{SHA}
        </span>
        <span className='text-(--color-border)'>·</span>
        <span>
          <span className='text-(--color-meta)'>deployed</span>:{BUILD_DATE}
        </span>
      </div>
    </footer>
  );
}

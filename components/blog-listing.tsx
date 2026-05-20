import Link from 'next/link';
import type { Post } from '@/lib/posts';

function isoDate(d: string) {
  return d.slice(0, 10);
}

interface BlogListingProps {
  posts: Post[];
}

export function BlogListing({ posts }: BlogListingProps) {
  return (
    <ul className='font-mono text-sm leading-relaxed'>
      {posts.map((post) => (
        <li key={post.slug} className='py-3 border-b border-(--color-border) last:border-b-0'>
          <div className='flex items-baseline gap-4'>
            <span className='text-(--color-dim) tabular-nums shrink-0'>
              {isoDate(post.date)}
            </span>
            <Link
              href={post.slug}
              className='text-(--color-accent) hover:underline decoration-dotted underline-offset-4'
            >
              {post.slugAsParams}.mdx
            </Link>
          </div>
          <div className='mt-1 pl-[11ch] text-(--color-fg)'>
            <span className='text-(--color-meta) mr-2'>→</span>
            <span>{post.title}</span>
          </div>
          {post.description && (
            <div className='pl-[11ch] text-(--color-dim) mt-0.5'>
              {post.description}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

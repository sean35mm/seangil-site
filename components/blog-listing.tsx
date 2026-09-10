import Link from 'next/link';
import type { Post } from '@/lib/posts';
import {
  convertDateFormat,
  convertDateToIso,
} from '@/components/helpers/convertDateFormat';

interface BlogListingProps {
  posts: Post[];
}

export function BlogListing({ posts }: BlogListingProps) {
  return (
    <ol className='writing-list'>
      {posts.map((post) => (
        <li key={post.slug} className='writing-item'>
          <div className='min-w-0'>
            <Link
              href={post.slug}
              className='writing-link rounded-sm text-base font-medium text-(--color-fg) underline decoration-(--color-link-line) underline-offset-4 transition-colors duration-150 hover:text-(--color-accent) hover:decoration-(--color-accent)'
            >
              {post.title}
            </Link>
            {post.description && (
              <p className='mt-2 max-w-[65ch] text-sm leading-relaxed text-(--color-dim)'>
                {post.description}
              </p>
            )}
          </div>
          <time dateTime={convertDateToIso(post.date)} className='writing-date tabular-nums text-sm text-(--color-dim)'>
            {convertDateFormat(post.date)}
          </time>
        </li>
      ))}
    </ol>
  );
}

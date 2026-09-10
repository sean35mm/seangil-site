import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import NextLink from 'next/link';
import { Mdx } from '@/components/mdx-components';
import {
  convertDateFormat,
  convertDateToIso,
} from '@/components/helpers/convertDateFormat';
import { getAllPosts } from '@/lib/posts';

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join('/');
  const posts = await getAllPosts();
  return posts.find((post) => post.slugAsParams === slug) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const resolved = await params;
  const post = await getPostFromParams(resolved);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const resolved = await params;
  const post = await getPostFromParams(resolved);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <NextLink
        href='/blog'
        className='inline-block rounded-sm py-2 text-sm text-(--color-dim) underline decoration-(--color-link-line) underline-offset-4 transition-colors duration-150 hover:text-(--color-fg)'
      >
        Back to writing
      </NextLink>
      <header className='article-header max-w-[68ch]'>
        <h1 className='text-3xl sm:text-4xl font-semibold tracking-[-0.035em] leading-tight text-pretty'>
          {post.title}
        </h1>
        {post.description && (
          <p className='mt-5 leading-relaxed text-(--color-dim)'>{post.description}</p>
        )}
        <time dateTime={convertDateToIso(post.date)} className='mt-4 block text-sm text-(--color-dim) tabular-nums'>
          {convertDateFormat(post.date)}
        </time>
      </header>
      <div className='article-body prose max-w-[70ch]'>
        <Mdx source={post.body} />
      </div>
    </article>
  );
}

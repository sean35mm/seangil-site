import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Mdx } from '@/components/mdx-components';
import { Prompt } from '@/components/prompt';
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
      <Prompt cmd={`cat ~/blog/${post.slugAsParams}.mdx`} />
      <header className='mb-6'>
        <h1 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
          {post.title}
        </h1>
        {post.description && (
          <p className='mt-2 text-(--color-dim)'>{post.description}</p>
        )}
        <p className='mt-2 text-xs text-(--color-meta) tabular-nums'>
          {post.date.slice(0, 10)}
        </p>
      </header>
      <hr className='border-(--color-border) mb-6' />
      <div className='prose prose-invert max-w-none prose-headings:text-(--color-fg) prose-p:text-(--color-fg) prose-li:text-(--color-fg) prose-strong:text-(--color-fg) prose-a:text-(--color-accent) prose-a:no-underline hover:prose-a:underline prose-a:decoration-dotted prose-a:underline-offset-4 prose-hr:border-(--color-border) prose-code:text-(--color-meta) prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-(--color-border) prose-blockquote:text-(--color-dim)'>
        <Mdx source={post.body} />
      </div>
    </article>
  );
}

import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';

import { Metadata } from 'next';
import { Mdx } from '@/components/mdx-components';

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
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
  return allPosts.map((post) => ({
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
    <article className='py-6 prose dark:prose-invert'>
      <h1 className='mb-2'>{post.title}</h1>
      {post.description && (
        <p className='text-xl mt-0 text-slate-700 dark:text-slate-200'>
          {post.description}
        </p>
      )}
      <hr className='my-4' />
      <Mdx code={post.body.code} />
    </article>
  );
}

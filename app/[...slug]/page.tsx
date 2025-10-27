import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allPages } from 'contentlayer/generated';

import { Mdx } from '@/components/mdx-components';

async function getPageFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join('/');
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const resolved = await params;
  const page = await getPageFromParams(resolved);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export async function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split('/'),
  }));
}

export default async function PagePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const resolved = await params;
  const page = await getPageFromParams(resolved);

  if (!page) {
    notFound();
  }

  return (
    <article className='py-10 prose dark:prose-invert'>
      <h1>{page.title}</h1>
      {page.description && <p className='text-xl'>{page.description}</p>}
      <hr />
      <Mdx code={page.body.code} />
    </article>
  );
}

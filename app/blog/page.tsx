import NextLink from 'next/link';
import { BlogListing } from '@/components/blog-listing';
import { Prompt } from '@/components/prompt';
import { getAllPosts } from '@/lib/posts';

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div>
      <NextLink
        href='/'
        className='inline-block text-sm text-(--color-dim) hover:text-(--color-accent) transition-colors mb-6'
      >
        cd ~
      </NextLink>
      <Prompt cmd='ls -lah ~/blog' />
      <BlogListing posts={posts} />
    </div>
  );
}

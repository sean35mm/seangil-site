import { BlogListing } from '@/components/blog-listing';
import { getAllPosts } from '@/lib/posts';

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className='space-y-12'>
      <header className='max-w-[65ch] pt-4 sm:pt-10'>
        <p className='mb-3 text-sm text-(--color-dim)'>Notes and essays</p>
        <h1 className='text-3xl sm:text-4xl font-semibold tracking-[-0.035em] leading-tight'>
          Writing
        </h1>
        <p className='mt-5 leading-relaxed text-(--color-dim)'>
          Thoughts on software, careers, and the paths between them.
        </p>
      </header>
      <BlogListing posts={posts} />
    </div>
  );
}

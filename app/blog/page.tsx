import { BlogListing } from '@/components/blog-listing';
import { Prompt } from '@/components/prompt';
import { getAllPosts } from '@/lib/posts';

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div>
      <Prompt cmd='ls -lah ~/blog' />
      <BlogListing posts={posts} />
    </div>
  );
}

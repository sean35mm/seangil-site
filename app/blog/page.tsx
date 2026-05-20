import { convertDateFormat } from '@/components/helpers/convertDateFormat';
import { BlogLink } from '@/components/ui/BlogLink';
import { getAllPosts } from '@/lib/posts';

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className='prose dark:prose-invert'>
      {posts.map((post) => (
        <article
          key={post.slug}
          className='rounded-xl px-4 pt-4 pb-1 my-4 dark:bg-slate-700 dark:bg-opacity-25 border-black border-2'
        >
          <BlogLink url={post.slug}>
            <span className='text-2xl font-bold'>{post.title}</span>
          </BlogLink>
          {post.date && (
            <p className='text-sm'>{convertDateFormat(post.date)}</p>
          )}
          {post.description && <p className='text-lg'>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}

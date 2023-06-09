import { allPosts } from '@/.contentlayer/generated'
import { CustomLink } from '@/components/ui/CustomLink'

export default function Blog() {
	return (
		<div className='prose dark:prose-invert'>
			{allPosts.map((post) => (
				<article
					key={post._id}
					className='rounded-xl p-4 my-4 dark:bg-slate-700 dark:bg-opacity-25'
				>
					<CustomLink url={post.slug}>
						<span className='text-2xl font-bold'>{post.title}</span>
					</CustomLink>
					{post.description && <p className='text-lg'>{post.description}</p>}
				</article>
			))}
		</div>
	)
}

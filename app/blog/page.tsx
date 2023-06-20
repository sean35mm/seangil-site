import { allPosts } from '@/.contentlayer/generated'
import { CustomLink } from '@/components/ui/CustomLink'
import { convertDateFormat } from '@/components/helpers/convertDateFormat'

export default function Blog() {
	const sortedPosts = allPosts.sort(
		(a, b) => Date.parse(b.date) - Date.parse(a.date)
	)

	return (
		<div className='prose dark:prose-invert'>
			{sortedPosts.map((post) => (
				<article
					key={post._id}
					className='rounded-xl px-4 pt-4 pb-1 my-4 dark:bg-slate-700 dark:bg-opacity-25 border-black border-2'
				>
					<CustomLink url={post.slug}>
						<span className='text-2xl font-bold'>{post.title}</span>
					</CustomLink>
					{post.date && (
						<p className='text-sm'>{convertDateFormat(post.date)}</p>
					)}
					{post.description && <p className='text-lg'>{post.description}</p>}
				</article>
			))}
		</div>
	)
}

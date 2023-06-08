import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link'
import { CustomLink } from '@/components/ui/CustomLink'

export default function Blog() {
	return (
		<div className='prose dark:prose-invert'>
			{allPosts.map((post) => (
				<article key={post._id}>
					<CustomLink url={post.slug}>
						<span className='text-3xl font-bold'>{post.title}</span>
					</CustomLink>
					{post.description && <p className='text-lg'>{post.description}</p>}
				</article>
			))}
		</div>
	)
}

import React from 'react'

type Props = {
	url: string
	children: React.ReactNode
}

export const BlogLink = (props: Props) => {
	return (
		<a
			href={props.url}
			className='dark:text-[#DEF81D] text-slate-800 underline underline-offset-2 dark:hover:text-white'
		>
			{props.children}
		</a>
	)
}

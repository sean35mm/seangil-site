import React from 'react'

type Props = {
	url: string
	children: React.ReactNode
}

export const CustomLink = (props: Props) => {
	return (
		<a
			target='_blank'
			rel='noopener noreferrer'
			href={props.url}
			className='dark:text-[#DEF81D] text-purple-600 underline underline-offset-2 dark:hover:text-white'
		>
			{props.children}
		</a>
	)
}

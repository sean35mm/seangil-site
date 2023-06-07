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
			className='text-lime underline underline-offset-2'
		>
			{props.children}
		</a>
	)
}

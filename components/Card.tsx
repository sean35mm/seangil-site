/* eslint-disable @next/next/no-img-element */
import React from 'react';

type Props = {
	image: string;
	alt: string;
	title: string;
	body: string;
};

const Card = (cardProps: Props) => {
	return (
		<div className='card bg-neutral m-4 w-[22rem] sm:w-96 shadow-xl'>
			<figure>
				<img src={cardProps.image} alt={cardProps.alt} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{cardProps.title}</h2>
				<p>{cardProps.body}</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-outline text-secondary rounded-xl'>Learn More</button>
				</div>
			</div>
		</div>
	);
};

export default Card;

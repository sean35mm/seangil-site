import React from 'react';
import Card from './Card';

const Work = () => {
	return (
		<div className='my-16'>
			<code className='text-2xl text-primary md:text-3xl font-bold tracking-widest'>Work</code>
			<div className='mt-10 flex flex-col sm:flex-row'>
				<Card image={''} alt={''} title={'Project Title'} body={'Project Body...'} />
				<Card image={''} alt={''} title={'Project Title'} body={'Project Body...'} />
				<Card image={''} alt={''} title={'Project Title'} body={'Project Body...'} />
			</div>
		</div>
	);
};

export default Work;

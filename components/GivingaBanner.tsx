import React from 'react';
import Link from 'next/link';

const GivingaBanner = () => {
	return (
		<Link href={'/givinga'}>
			<div className='sm:w-1/5 m-2 cursor-pointer border-black border bg-gradient-to-b from-emerald-400 to-emerald-900 rounded-lg flex hover:shadow-black hover:shadow-2xl'>
				<div className='mx-auto my-auto text-center text-blue-200 p-2'>
					<h2 className='font-bold text-lg'>Givinga</h2>
					<p>Transform workplace giving for all!</p>
				</div>
			</div>
		</Link>
	);
};

export default GivingaBanner;

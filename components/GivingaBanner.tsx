import React from 'react';
import Link from 'next/link';

const GivingaBanner = () => {
	return (
		<Link href={'/givinga'}>
			<div className='md:w-1/3 md:h-auto h-28 m-2 cursor-pointer border-black border bg-gradient-to-b from-emerald-400 to-emerald-800 rounded-lg flex hover:shadow-black hover:shadow-2xl'>
				<div className='mx-auto my-auto text-center text-b p-2'>
					<h2 className='font-bold text-lg xl:text-2xl'>Givinga</h2>
					<p>Transform workplace giving for all!</p>
				</div>
			</div>
		</Link>
	);
};

export default GivingaBanner;

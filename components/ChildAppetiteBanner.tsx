import React from 'react';
import Link from 'next/link';

const ChildAppetiteBanner = () => {
	return (
		<Link href={'/childappetite'}>
			<div className='md:w-1/3 md:h-auto h-28 m-2 cursor-pointer border-black border bg-gradient-to-b from-cyan-400 to-blue-500 rounded-lg flex hover:shadow-black hover:shadow-2xl'>
				<div className='mx-auto my-auto text-center text-yellow-300 p-2'>
					<h2 className='font-bold text-lg xl:text-2xl'>Child Appetite LLC</h2>
					<p>Bringing art to life - by Iris Kwon</p>
				</div>
			</div>
		</Link>
	);
};

export default ChildAppetiteBanner;

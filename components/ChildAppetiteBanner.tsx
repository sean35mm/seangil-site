import React from 'react';
import Link from 'next/link';

type Props = {};

const ChildAppetiteBanner = (props: Props) => {
	return (
		<Link href={'/childappetite'}>
			<div className='sm:w-1/5 cursor-pointer bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg flex hover:shadow-white hover:shadow-lg'>
				<div className='mx-auto my-auto text-center  text-yellow-200'>
					<h2 className='font-bold text-lg'>Child Appetite LLC</h2>
					<p>Bringing art to life - by Iris Kwon</p>
				</div>
			</div>
		</Link>
	);
};

export default ChildAppetiteBanner;

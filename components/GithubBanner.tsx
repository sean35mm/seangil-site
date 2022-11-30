import React from 'react';
import Link from 'next/link';

const GithubBanner = () => {
	return (
		<Link href={'https://github.com/sean35mm'}>
			<div className='sm:w-3/12 xl:w-1/5 m-2 cursor-pointer border-black border bg-gradient-to-b from-slate-400 to-slate-800 rounded-lg flex hover:shadow-black hover:shadow-2xl'>
				<div className='mx-auto my-auto text-center text-white p-2'>
					<h2 className='font-bold text-lg xl:text-2xl'>GitHub</h2>
					<p>Check out my GitHub Profile to checkout more projects!</p>
				</div>
			</div>
		</Link>
	);
};

export default GithubBanner;

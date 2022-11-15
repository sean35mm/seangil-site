import React from 'react';
import Image from 'next/image';

import photo from '../assets/photo.jpg';

function About() {
	return (
		<div className='prose text-center sm:w-1/4'>
			<Image src={photo} width={250} height={200} alt='my photo' />
			<h3>Hello, I&apos;m Sean!</h3>
			<p>US Army Veteran, Software Engineer, & Cat Dad</p>
			<p>
				By day, I am bringing art to life at{' '}
				<span className='text-blue-500'>
					<a href='https://childappetite.com/'>Child Appetite</a>
				</span>{' '}
				as a developer and mentoring STEM students at{' '}
				<a href='https://streetwisepartners.org/'>StreetWise Partners</a>!
			</p>
			<p>By night, I cooking, exploring all things tech, and working on projects.</p>
			<p>
				Most recently, I operated on both the front and back end at{' '}
				<a href='https://www.givinga.com/'>Givinga</a>, a FinTech firm with a mission to redefine
				philanthropy by providing open access to modern tools and technology.
			</p>
		</div>
	);
}

export default About;

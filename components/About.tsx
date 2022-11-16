import React from 'react';
import Image from 'next/image';

import photo from '../assets/photo-2.jpg';

import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { GrContactInfo, GrMedium } from 'react-icons/gr';

function About() {
	return (
		<div className='prose text-center sm:w-1/4'>
			<Image src={photo} width={225} height={300} alt='my photo' />
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
			<nav className='flex justify-around p-2 border border-black rounded-lg'>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://docs.google.com/document/d/1LR1nrSU6qsE9i5i5SKGlJUNgpLVNzyKes7GtToqBq4Y/edit?usp=sharing'
				>
					<GrContactInfo />
				</a>
				<a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/seanhgil/'>
					<BsLinkedin />
				</a>
				<a target='_blank' rel='noopener noreferrer' href='https://github.com/sean35mm'>
					<BsGithub />
				</a>
				<a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/seantographer'>
					<BsInstagram />
				</a>
				<a target='_blank' rel='noopener noreferrer' href='https://medium.com/@seanicus'>
					<GrMedium />
				</a>
			</nav>
		</div>
	);
}

export default About;

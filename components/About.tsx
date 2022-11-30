import React from 'react';
import Image from 'next/image';

import photo from '../assets/photo-2.jpg';

import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { GrContactInfo, GrMedium } from 'react-icons/gr';

function About() {
	return (
		<div className='prose text-center md:w-1/4'>
			<Image src={photo} width={225} height={300} alt='my photo' className='rounded-lg' />
			<h3>Hello, I&apos;m Sean!</h3>
			<p>US Army Veteran, Software Engineer, & Cat Dad</p>
			<p>
				I am bringing art to life at{' '}
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://childappetite.com/'
					className='font-bold text-primary'
				>
					Child Appetite
				</a>{' '}
				as a developer and I am a teaching assistant at{' '}
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://brainstation.io/'
					className='font-bold text-primary'
				>
					BrainStation
				</a>
				!
			</p>
			<p>
				Also I am a STEM mentor at{' '}
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://streetwisepartners.org/'
					className='font-bold text-primary'
				>
					StreetWise Partners
				</a>
				!
			</p>
			<p>
				Most recently, I operated on both the front and back end at{' '}
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.givinga.com/'
					className='font-bold text-primary'
				>
					Givinga
				</a>
				, a FinTech firm with a mission to redefine philanthropy by providing
				open access to modern tools and technology.
			</p>
			<nav className='flex justify-around p-2 border border-black rounded-lg'>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://docs.google.com/document/d/1LR1nrSU6qsE9i5i5SKGlJUNgpLVNzyKes7GtToqBq4Y/edit?usp=sharing'
				>
					<GrContactInfo />
				</a>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.linkedin.com/in/seanhgil/'
				>
					<BsLinkedin />
				</a>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://github.com/sean35mm'
				>
					<BsGithub />
				</a>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.instagram.com/seantographer'
				>
					<BsInstagram />
				</a>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://medium.com/@seanicus'
				>
					<GrMedium />
				</a>
			</nav>
		</div>
	);
}

export default About;

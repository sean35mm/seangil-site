import React from 'react';
import Link from 'next/link';

import { FiDownload, FiInstagram } from 'react-icons/fi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

type Props = {};

const Contact = (props: Props) => {
	return (
		<section className='w-11/12 tracking-wider my-40 text-white'>
			<h1 className='text-white text-4xl xl:text-6xl md:ml-4 lg:ml-16'>
				Get in Touch
			</h1>
			<div className='md:ml-16 mt-4'>
				<h3 className='text-xl italic'>
					If you&apos;re interested in working together, feel free to contact me
					through email or social media.
				</h3>
				<div className='my-14'>
					<ul className='flex flex-wrap'>
						<li className='btn m-2'>
							<FiDownload />
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://docs.google.com/document/d/1LR1nrSU6qsE9i5i5SKGlJUNgpLVNzyKes7GtToqBq4Y/edit?usp=sharing'
							>
								<span className='ml-2'>Resume</span>
							</a>
						</li>
						<li className='btn m-2'>
							<BsLinkedin />
							<a
								target='_blank'
								rel='noopener noreferrer'
								href={'https://www.linkedin.com/in/seanhgil/'}
							>
								<span className='ml-2'>LinkedIn</span>
							</a>
						</li>
						<li className='btn m-2'>
							<BsGithub />
							<a
								target='_blank'
								rel='noopener noreferrer'
								href={'https://github.com/sean35mm'}
							>
								<span className='ml-2'>Github</span>
							</a>
						</li>
						<li className='btn m-2'>
							<FiInstagram />
							<a
								target='_blank'
								rel='noopener noreferrer'
								href={'https://www.instagram.com/seantographer/'}
							>
								<span className='ml-2'>Instagram</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Contact;

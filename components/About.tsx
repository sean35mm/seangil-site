import Image from 'next/image';
import { FiDownload, FiArrowUpRight } from 'react-icons/fi';
import photo from '../assets/photo-2.jpg';

function About() {
	return (
		<section className='w-11/12 rounded-2xl p-8 md:p-14 lg:p-18 my-8'>
			<div className='flex flex-col md:flex-row'>
				<Image
					className='rounded-full'
					src={photo}
					objectFit='fill'
					alt='photo'
					width={559}
					height={761}
				/>

				<div className='text-white md:w-3/4 md:ml-10 lg:mt-24 xl:mt-40 xl:w-4/6'>
					<h1 className='text-4xl xl:text-7xl mb-4 mt-10 md:mt-0'>About me</h1>
					<p>
						Hello! I&apos;m Sean Gil, a software developer and US Army Veteran based in Greater Los Angeles.
						I began my career in the intelligence space, collaborating with the
						armed forces and various three letter agencies. I utilized my skills
						and credentials to make an impact in the private sector and
						eventually became the Senior Vice President of Investigations at one
						of the nation&apos;s fastest growing due diligence firms. After
						nearly a decade in investigations, I pivoted careers into tech after
						discovering my passion for coding and solving problems.
					</p>
					<br />
					<p>
						Currently, I am bringing art to life at Child Appetite and teaching
						web development basics at BrainStation. I also volunteer at Streetwise Partners.
					</p>
					<div className='mt-6 flex justify-start'>
						<button className='btn'>
							<FiDownload /> <span className='ml-2'>Resume</span>
						</button>
						<button className='btn mx-4'>
							<FiArrowUpRight /> <span className='ml-2'>LinkedIn</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;

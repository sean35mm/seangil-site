import Image from 'next/image';
import { FiDownload, FiArrowUpRight } from 'react-icons/fi';
import photo from '../assets/photo-2.jpg';

function About() {
	return (
		<section className='w-11/12 rounded-2xl p-8 md:p-14 lg:p-18 h-screen'>
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
					<h1 className='text-4xl xl:text-6xl mb-4 mt-10 md:mt-0'>About me</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
						veritatis earum sunt, temporibus dicta numquam perspiciatis,
						doloribus autem voluptates libero ab, voluptatibus enim incidunt est
						in ex! Eaque, nostrum adipisci.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni quidem, vitae obcaecati necessitatibus illo nisi illum, eos dignissimos, tenetur hic porro itaque velit enim amet ipsam ipsa in nobis.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis a dolor repellendus illum, quia totam voluptates, modi sint nulla fugit molestias, distinctio accusamus. Ex eaque facere voluptatem tempora tenetur.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempore, sed ipsa cum illum officiis aliquid voluptate fugit explicabo accusamus officia facere eos, et harum distinctio unde. Aperiam, incidunt earum!
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

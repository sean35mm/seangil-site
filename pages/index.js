import { CustomLink } from '../components/CustomLink';
import Image from 'next/image';
import resume from '../assets/resume.svg';
import { FaFileDownload } from 'react-icons/fa';

export default function Home() {
	return (
		<main className='bg-black flex justify-center items-center h-screen'>
			<div className='mx-auto w-3/4 text-secondary tracking-wider'>
				<h1>
					Hi, I&apos;m{' '}
					<CustomLink url='https://read.cv/seangil'>Sean</CustomLink>, a
					software engineer based in Los Angeles, CA and Austin, TX.
				</h1>
				<h2>
					Currently helping web dev become accessible for all at{' '}
					<CustomLink url='https://brainstation.io'>BrainStation</CustomLink>.
				</h2>
				<div className='flex flex-col items-center mt-10'>
					<h3 className='flex mb-2 items-center'>
						<FaFileDownload className='mr-1' />
						Resume
					</h3>
					<Image src={resume} alt='resume' width={100} height={100} />
				</div>
			</div>
		</main>
	);
}

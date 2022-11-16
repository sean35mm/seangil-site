import About from '../components/About';
import ChildAppetiteBanner from '../components/ChildAppetiteBanner';
import GivingaBanner from '../components/GivingaBanner';
import GithubBanner from '../components/GithubBanner';

export default function Home() {
	return (
		<main className='flex justify-center items-center h-screen bg-black'>
			<div className='mockup-window border border-black bg-secondary m-4'>
				<div className='sm:flex px-4 py-16 bg-base-100 justify-evenly'>
					<About />
					<ChildAppetiteBanner />
					<GivingaBanner />
					<GithubBanner />
				</div>
			</div>
		</main>
	);
}

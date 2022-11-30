import About from '../components/About';
import ChildAppetiteBanner from '../components/ChildAppetiteBanner';
import GithubBanner from '../components/GithubBanner';
import GivingaBanner from '../components/GivingaBanner';
import ParticleComponent from '../components/ParticleComponent';

export default function Home() {
	return (
		<main className='flex justify-center items-center min-h-screen'>
			<div className='mockup-window border border-black bg-secondary m-4 w-11/12'>
				<div className='sm:flex px-4 py-16 bg-base-200 justify-evenly'>
					<About />
					<ChildAppetiteBanner />
					<GivingaBanner />
					<GithubBanner />
				</div>
			</div>
			<ParticleComponent />
		</main>
	);
}

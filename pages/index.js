import About from '../components/About';
import ChildAppetiteBanner from '../components/ChildAppetiteBanner';

export default function Home() {
	return (
		<main className='flex justify-center items-center h-screen'>
			<div className='mockup-window border bg-primary m-4'>
				<div className='sm:flex px-4 py-16 bg-base-200 justify-evenly'>
					<About />
					<ChildAppetiteBanner />
					<ChildAppetiteBanner />
					<ChildAppetiteBanner />
				</div>
			</div>
		</main>
	);
}

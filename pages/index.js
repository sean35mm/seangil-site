import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';

export default function Home() {
	return (
		<main className='bg-black min-h-screen w-full'>
			<div className='flex justify-center'>
				<Hero />
			</div>
			<div>
				<About />
				<Projects />
			</div>
		</main>
	);
}

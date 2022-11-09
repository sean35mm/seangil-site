import Hero from '../components/Hero';
import Work from '../components/Work';

export default function Home() {
	return (
		<>
			<div className='flex justify-center align-middle'>
				<Hero />
			</div>
			<div className='flex justify-center'>
				<Work />
			</div>
		</>
	);
}

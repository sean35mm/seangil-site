import Hero from "../components/Hero";

export default function Home() {
	return (
		<main className="bg-black h-screen w-full flex justify-center">
			{/* <div className='prose'>
				<h1 className="text-lime">
					Re-vamping my website - checkout the progress on the development
					branch on{' '}
					<a className="text-secondary" href='https://github.com/sean35mm/seangil-site/tree/develop'>
						Github
					</a>
					!
				</h1>
			</div> */}

			<Hero />
		</main>
	);
}

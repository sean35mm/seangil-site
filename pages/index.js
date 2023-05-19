export default function Home() {
	return (
		<main className='bg-black grid h-screen place-items-center'>
			<div className='mx-auto w-3/4 text-secondary tracking-wider'>
				<h1>
					Hi, I&apos;m{' '}
					<a
						href='https://read.cv/seangil'
						className='text-lime underline underline-offset-2'
					>
						Sean
					</a>
					, a software engineer based in Los Angeles, CA and soon Austin, TX.
				</h1>
				<h2>
					Currently helping web dev become accessible for all at BrainStation.
				</h2>
			</div>
		</main>
	);
}

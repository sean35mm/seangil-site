import { CustomLink } from '@/components/ui/CustomLink'

export default function Home() {
	return (
		<div className='prose dark:prose-invert'>
			<div className='mx-auto text-secondary tracking-wider'>
				<div className='flex flex-col items-center mt-10'></div>
				<h4>
					Hi, I&apos;m{' '}
					<CustomLink url='https://read.cv/seangil'>Sean</CustomLink>.{' '}
				</h4>
				<p>
					Currently helping web dev become accessible for all at{' '}
					<CustomLink url='https://brainstation.io'>BrainStation</CustomLink>{' '}
					and giving back to the community at{' '}
					<CustomLink url='https://veterati.com'>Veterati</CustomLink> and{' '}
					<CustomLink url='https://streetwisepartners.org/'>
						Streetwise Partners
					</CustomLink>
					.
				</p>
				<p>Currently in between Los Angeles, CA and Austin, TX.</p>
				<p>
					When I&apos;m not coding, I am either{' '}
					<CustomLink url=''>cooking</CustomLink> or playing
				</p>
			</div>
		</div>
	)
}

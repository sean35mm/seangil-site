import { CustomLink } from '@/components/ui/CustomLink'
import Image from 'next/image'

import logo from 'public/sg-logo.png'

export default function Home() {
	return (
		<div className='prose dark:prose-invert'>
			<div className='flex justify-center items-center'>
				<Image src={logo} alt='logo' width={300} height={300} />
			</div>
			<div className='mx-auto tracking-wider'>
				<div className='flex flex-col items-center mt-10'></div>
				<h3>
					Hi, I&apos;m{' '}
					<CustomLink url='https://read.cv/seangil'>Sean</CustomLink>.{' '}
				</h3>
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
				<p>In between Los Angeles, CA and Austin, TX.</p>
				<p>
					When I&apos;m not coding, I am either{' '}
					<CustomLink url='https://www.tiktok.com/@giltypleasure'>
						cooking
					</CustomLink>{' '}
					or playing Overwatch with my wife and friends!
				</p>

				<p>
					You can check out my projects on my{' '}
					<CustomLink url='https://github.com/sean35mm'>Github</CustomLink> or
					read my <CustomLink url='/blog'>blog</CustomLink>.
				</p>
			</div>
		</div>
	)
}

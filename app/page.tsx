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
				<h4>
					Hi, I&apos;m{' '}
					<CustomLink url='https://read.cv/seangil'>Sean</CustomLink> - Software
					Engineer, Technical Consultant and Army Veteran.
				</h4>
				<br />
				<p>
					Currently delivering the power of contextual intelligence with AI at{' '}
					<CustomLink url='https://goperigon.com'>Perigon</CustomLink> based in Austin, TX. Need an API key? Catch me on <CustomLink url='https://www.linkedin.com/in/seanhgil/'>LinkedIn</CustomLink>!
				</p>
				<p>
					Previously built and configured software solutions for large
					enterprise and government customers as a software engineer at{' '}
					<CustomLink url={'https://npsols.com/'}>
						Next Phase Solutions
					</CustomLink>{' '}
					based in Orlando, FL. (Acquired by Naviant in 2024)
				</p>
				<p>
					I’m passionate about making web development accessible and currently
					channel this drive at{' '}
					<CustomLink url='https://brainstation.io'>BrainStation</CustomLink> as
					a web development mentor. Off duty, you&rsquo;ll find me volunteering
					through <CustomLink url='https://veterati.com'>Veterati</CustomLink>{' '}
					and{' '}
					<CustomLink url='https://streetwisepartners.org/'>
						Streetwise Partners
					</CustomLink>
					.
				</p>
				<p>
					Born and raised in Southern California, but now enjoy life in Austin,
					TX with my beautiful wife and our two cats. When I&apos;m not coding,
					I am either{' '}
					<CustomLink url='https://www.tiktok.com/@giltypleasure'>
						cooking
					</CustomLink>{' '}
					or playing Overwatch with my wife and friends!
				</p>

				<p>
					You can check out my projects on my{' '}
					<CustomLink url='https://github.com/sean35mm'>Github</CustomLink> or
					explore my thoughts on my <CustomLink url='/blog'>blog</CustomLink>.
				</p>
			</div>
		</div>
	)
}

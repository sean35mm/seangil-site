import Image from 'next/image';
import Link from 'next/link';

import architecture from '../assets/ca-arch.png';
import figma from '../assets/ca-figma.png';
import logo from '../assets/ca-logo.png';

import { BsArrowRight } from 'react-icons/bs';

type Props = {};

const childappetite = (props: Props) => {
	return (
		<div className='flex justify-center bg-black'>
			<div className='rounded-2xl w-9/12 my-20 bg-secondary'>
				<div className='flex px-4 py-16 bg-base-200'>
					<div className='prose max-w-none mx-auto'>
						<Image src={logo} alt='logo' width={700} height={450} />
						<div className='flex justify-around mt-20'>
							<div>
								<h4>Primary Technologies:</h4>
								<ul>
									<li>React / Next.js</li>
									<li>Hygraph (GraphCMS)</li>
									<li>Stripe</li>
									<li>SnipCart</li>
								</ul>
							</div>
							<div>
								<h4>Links:</h4>
								<ul>
									<li>
										<a
											href='https://childappetite.com/'
											target='_blank'
											rel='noopener noreferrer'
										>
											Current Site
										</a>
									</li>
									<li>
										<a
											href='https://github.com/sean35mm/ca-prod'
											target='_blank'
											rel='noopener noreferrer'
										>
											Site in Development
										</a>
									</li>
									<li>
										<a
											href='https://www.instagram.com/child_appetite/'
											target='_blank'
											rel='noopener noreferrer'
										>
											Instagram
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='flex px-16 py-16 bg-base-200'>
					<div className='prose max-w-none mx-auto'>
						<h2 className='underline'>Problem</h2>
						<p>
							Iris Kwon (founder) launched her art brand in 2019 with the
							intention of having a creative outlet with her own style - which
							is vastly different than her full time position as a Design
							Director, where she mainly creates user experiences for tech
							companies. She chose Shopify as her quick solution because of it’s
							streamlined experience for merchants; however, she has found out
							that full customization is difficult and costly on Shopify’s
							platform. There are alternatives like Etsy, but through the years,
							she realized that she doesn’t need all the bells and whistles
							these platforms offer - it’s a side gig for fun afterall. As her
							initial discounted subscription to Shopify comes to an end, so
							does her willingness to continue with Shopify.{' '}
						</p>
						<h2 className='underline'>Project Overview</h2>
						<p>
							At its core, we aimed to create a website that focused on her art
							and not a retail marketplace. As the designer, Iris wanted to
							utilize the website not only as a showcase of her work but a
							portfolio she could share with the world.{' '}
						</p>
						<p>
							The Shopify platform primarily focuses just on the ecommerce
							element of the website, with additional pages as secondary
							elements. After some tweaking utilizing Shopify’s template
							language Liquid, we managed to get the site to and workable
							version of what she wanted.
						</p>
						<div className='flex justify-center'>
							<Image src={figma} alt='figma' />
						</div>
						<h2 className='underline'>Engineering Abstract</h2>
						<p>
							Engineering efforts began with identifying what technologies were
							needed to bring the artist vision to life:
						</p>
						<Image src={architecture} alt='figma' />
						<h4>Hygraph</h4>
						<p>
							Hygraph is the first native GraphQL CMS. It is a frontend and
							backend agnostic API-first solution that checked all the boxes
							that I needed. From developing the schema to content modeling,
							Hygraph enabled us to unify the tech stack. Bonus: its free and
							extremely user friendly - which was especially important if I was
							going to show Iris on how to use it.
						</p>
						<h4>GraphQL</h4>
						<p>
							I opted to use GraphQL to handle network requests. Yes, probably
							overkill for a small web app, BUT we know that it scales, we know
							that there is a ton of documentation/tutorials, and when the time
							comes to migrate to TypeScript, they complement each other well.{' '}
						</p>
						<h4>React / Next.js</h4>
						<p>
							For a small time business and artist brand, a library like React
							is not exactly necessary to bring the idea to life, but we wanted
							to use something that could scale with additional implementations
							like NFT’s. React with the Next.js layer was the natural choice.
							Its seamless integration with Hygraph aphQL allows the app to
							hydrate and update itself without much developer intervention
							(which is important because I am the only developer ha!). I wanted
							to make this as developer friendly as possible while keeping the
							focus on the user experience.{' '}
						</p>
						<h4>Cloudinary</h4>
						<p>
							Cloudinary manages images and video in the cloud. When I first
							started developing, there were some performance issues, primarily
							because the art files provided were too complex and large in size.
							Cloudinary allowed us to edit and transform the images on demand -
							also free (for now)!
						</p>

						<div className='divider'></div>

						<div className='text-center'>
							<h3>Thanks for Reading!</h3>
							<p>
								It&apos;s my turn to listen this time around and I am incredibly
								excited to meet you!
							</p>
							<p>
								Shoot me an email or drop me a message on{' '}
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://www.linkedin.com/in/seanhgil/'
								>
									LinkedIn
								</a>
								!
							</p>
						</div>
						<div className='divider'></div>
						<div className='text-center'>
							<p>Check out my next project!</p>

							<div className='flex justify-center'>
								<Link href={'/'}>
									<button className='btn mx-4 border-black border-[1px]'>
										Home
									</button>
								</Link>
								<Link href={'/givinga'}>
									<button className='btn mx-4 border-black border-[1px]'>
										Next Project{'  '}
										<BsArrowRight />
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default childappetite;

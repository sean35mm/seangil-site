import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import givingaHero from '../assets/givinga-hero.png';
import givingaArch from '../assets/new-arch.png';

import { BsArrowRight } from 'react-icons/bs';

type Props = {};

const givinga = (props: Props) => {
	return (
		<div className='flex justify-center bg-neutral'>
			<div className='mockup-window bg-secondary w-11/12 m-4'>
				<div className='flex px-4 py-16 bg-base-200'>
					<div className='prose max-w-none mx-auto'>
						<h1 className='text-center'>Givinga</h1>
						<div className='flex justify-center'>
							<Image alt='hero' src={givingaHero} />
						</div>
						<p className='text-center'>
							Givinga provides 2 main applications, the admin panel and white
							label product.
						</p>
						<h2 className='underline'>The Problem</h2>
						<p>
							When I first came onboard with Givinga, the state of these two
							apps were very underperformant. They had been built by a series of
							contractors that passed through the company over a period of a few
							years. There were components with thousands of lines of unreadable
							code, tons of packages being unused, and so many different design
							patterns, that they decided to hire their own internal developers.
						</p>
						<p>
							Once I came onboard, the question changed from HOW do we unify and
							evolve the codebase to WHEN do we rewrite the entire application?
						</p>
						<h2 className='underline'>Project Overview</h2>
						<p>
							At its core, the application was written in React, but with a
							number of mixed .jsx and .tsx files. The app overall did not have
							any type safety so we started utilizing propTypes UNTIL it was
							apparent that most efforts were futile with client requests coming
							in daily. After much deliberation with stakeholders, executives,
							and the engineering team, we decided it would be better to rewrite
							the entire application with better architecture and clean,
							reusable code.
						</p>
						<div className='flex justify-center'>
							<Image alt='new architecture' src={givingaArch} />
						</div>
						<h2 className='underline'>Engineering Abstract</h2>
						<h4>AppSync + GraphQL</h4>
						<p>
							Appsync is the magic that we used as our primary method to handle
							requests. By leveraging GraphQL, we had control over specific
							queries and mutations with Lambda resolvers that hit our different
							endpoints. This allowed us to stagger the loading time across the
							app, making for a much more responsive and performant application.
							Furthermore, we were able to use AWS codegen to automatically
							reproduce endpoints as we added on to the app. As a bonus, the
							documentation for the GraphQL library allowed for a lot of
							self-documentting code, which complemented well with TypeScript
							very well.{' '}
						</p>
						<h4>Next.js + TypeScript</h4>
						<p>
							The older app was a regular React 16 application. We opted to
							utilize Next.js because its icredible speed, easy deployment, and
							easy setup. We also wanted to utilize Next.js support for
							server-side rendering (SSR) and optimized bundling.{' '}
						</p>
						<p>
							Type safety was a big topic of discussion during our conversations
							of the new app. Since we were connecting to AWS services and
							producing a scalable app, we wanted to be certain that we had type
							safety in both the front and back end. AWS AppSync and Codegen
							already had integrations for type safety so utilizing TypeScript
							was the natural choice. It is true that it is a bit cumbersome in
							the beginning, but the trade off in time is absolutely worth its
							ability to give us a type safe and bug-(mostly)free app.
						</p>
						<h4>Jest + Cypress</h4>
						<p>
							Effective unit testing with Jest allowed for shallow mounting of
							components, simulating UI interactions, and model mocking. The
							integration of end to end testing with Cypress came a bit later,
							once we hired a QA analyst. With the speed at which the project
							evolved, testing was a necessity to ensure all features were
							accounted for and new features didn&apos;t introduce regressions.
						</p>
						<h4>Node + TypeScript</h4>
						<p>
							Previously, our entire backend was written in Scala. As great and
							function as Scala is, it was difficult for us to maintain a Scala
							contractor full time. The team decided that it would have a
							rewrite as well to Node in TypeScript.
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
							<p>Stay tuned for more!</p>

							<div className='flex justify-center'>
								<Link href={'/'}>
									<button className='btn mx-2 btn-primary'>Home</button>
								</Link>
								<Link href={'https://github.com/sean35mm'}>
									<button className='btn btn-primary'>
										Checkout my GitHub!
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

export default givinga;

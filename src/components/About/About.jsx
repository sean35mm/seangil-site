import React from 'react';
import './About.scss';

export default function About() {
	return (
		<div className='about' id='about'>
			<div className='about__container'>
				<div className='about__text'>
					<div className='about__text-left'>
						<p className='about__text--title'>ABOUT ME</p>
					</div>
					<div className='about__text-right'>
						<div className='about__paragraph1'>
							<p>
								Hi I'm Sean, a <b>Software Engineer & Veteran</b> based in
								Southern California. By day, I am operating on both the front
								and back end at Givinga, a FinTech firm with a mission to
								redefine philanthropy by providing open access to modern tools
								and technology. By night, I am cooking, exploring all things
								tech, and recording podcasts. I began my career in the military
								intelligence world but eventually found myself in the private
								sector conducting investigations for Fortune 100 companies and
								nearly every single top ranked private equity firm. I led a
								financial services investigations firm as a Senior Vice
								President until my passion for development took over. Whenever
								possible, I apply my love for tech to help those looking to
								learn development through various mentorship programs.
							</p>
						</div>
						<div className='about__paragraph2'>
							<p>
								My approach to development is to place heavy emphasis on the
								engineering architecture and methodology versus the specific
								coding language itself. With a deep love for software
								development, paired with an unbarred mindset, I creatively and
								efficiently ship great products.
							</p>
							<br />
							<p>
								I am based in the Greater Los Angeles and Orange County area,
								but have collaborated with engineers globally to deliver client
								work. If you're interested in tech and career development, check
								out my podcast,{' '}
								<a href='https://anchor.fm/lofitech'>LoFi Tech Podcast</a>,
								where I post weekly shows!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

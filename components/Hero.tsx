import React from 'react';

const Hero = () => {
	return (
		<section className='w-11/12 max-h-[703px] bg-secondary text-black rounded-2xl'>
			<div className='flex justify-around p-32 h-full'>
				<h1 className='text-9xl flex items-start'>Hello,</h1>
				<div className='flex items-end'>
					<div>
						<h3 className='text-xl'>I&apos;m Sean Gil</h3>
						<h3>
							/ sh-aW-n · g<i>il</i> /
						</h3>
						<h3>Noun</h3>
						<br />
						<ol>
							<li>
								1. Software Engineer, full stack with a knack for the front end.
							</li>
              <li>
                2. US Army Veteran and former Senior VP of a due diligence firm
              </li>
              <li>
                3. Currently teaching web development basics at BrainStation
              </li>
              <li>
                4. _______
              </li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

import React from 'react';

const Hero = () => {
	return (
		<section className='w-11/12 h-[703px] bg-secondary text-black rounded-2xl p-8 md:p-24 lg:p-32 my-10'>
			<div className='md:flex justify-around  h-full'>
				<h1 className='text-8xl md:text-9xl flex items-start'>Hello,</h1>
				<div className='flex items-end'>
					<div className='mt-10 md:m-0'>
						<h3 className='text-md'>I&apos;m</h3>
            <h3 className='text-2xl'>Sean Gil</h3>
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
                2. US Army Veteran and former Senior VP in Financial Investigations
              </li>
              <li>
                3. Currently teaching web development basics at BrainStation
              </li>
              <li>
                4. ___
              </li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

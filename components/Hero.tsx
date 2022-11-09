import React from 'react';

const Hero = () => {
	return (
		<div className='mockup-code flex flex-col mt-8 md:w-1/2'>
			<pre data-prefix='1'>
				<code className='text-xs text-primary'>intro</code>
			</pre>
			<pre data-prefix='2'>
				<code className='text-2xl md:text-3xl font-bold tracking-widest'>Sean Gil</code>
			</pre>
			<pre data-prefix='3'>
				<code className='text-xs sm:text-sm text-primary'>Full Stack Software Engineer</code>
			</pre>
			<pre data-prefix='4'>
				<code className='text-xs sm:text-sm text-primary'>
					US Army Veteran and Former Startup SVP
				</code>
			</pre>
			<pre data-prefix='5'>
				<code className='text-xs sm:text-sm text-primary'>Based in LA and Orange County, CA</code>
			</pre>
			<pre data-prefix='6'>
				<code>...</code>
			</pre>
			<pre data-prefix='7'></pre>
			<pre data-prefix='8'></pre>
			<pre data-prefix='9'></pre>
			<pre data-prefix='10'></pre>
			<br />
			<div className='flex flex-col sm:flex-row sm:justify-evenly self-center sm:self-auto'>
				<code className='btn btn-outline btn-primary w-32 rounded-lg m-2'>About</code>
				<code className='btn btn-outline btn-primary w-32 rounded-lg m-2'>Resume</code>
				<code className='btn btn-outline btn-primary w-32 rounded-lg m-2'>Blog</code>
				<div className='dropdown dropdown-top'>
					<code tabIndex={0} className='btn btn-outline btn-primary rounded-lg w-32 m-2'>
						Socials
					</code>
					<ul tabIndex={0} className='dropdown-content menu bg-base-100 m-2'>
						<li>LinkedIn</li>
						<li>LinkedIn</li>
						<li>LinkedIn</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Hero;

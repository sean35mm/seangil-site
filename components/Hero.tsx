import React from 'react';

const Hero = () => {
	return (
		<div className='mockup-code flex flex-col mx-2 mt-8 md:w-1/2'>
			<pre data-prefix='1'>
				<code className='text-xs text-secondary'>intro</code>
			</pre>
			<pre data-prefix='2'>
				<code className='text-2xl md:text-3xl font-bold tracking-widest'>Sean Gil</code>
			</pre>
			<pre data-prefix='3'>
				<code className='text-xs sm:text-sm text-secondary'>Full Stack Software Engineer</code>
			</pre>
			<pre data-prefix='4'>
				<code className='text-xs sm:text-sm text-secondary'>
					US Army Veteran and Former Startup SVP
				</code>
			</pre>
			<pre data-prefix='5'>
				<code className='text-xs sm:text-sm text-secondary'>Based in LA and Orange County, CA</code>
			</pre>
			<pre data-prefix='6'>
				<code>...</code>
			</pre>
			<pre data-prefix='7'></pre>
			<pre data-prefix='8'></pre>
			<pre data-prefix='9'></pre>
			<code className='btn btn-outline w-32 flex self-center'>Resume</code>

			{/* <pre data-prefix='11'></pre>
			<pre data-prefix='12'></pre>
			<pre data-prefix='13'></pre>
			<pre data-prefix='14'></pre>
			<pre data-prefix='15'></pre>
			<pre data-prefix='16'></pre>
			<pre data-prefix='17'></pre>
			<pre data-prefix='18'></pre>
			<pre data-prefix='19'></pre>
			<pre data-prefix='20'></pre> */}
		</div>
	);
};

export default Hero;

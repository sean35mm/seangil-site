import React from 'react';

type Props = {};

const WindowMockup = (props: Props) => {
	return (
		<div className='mockup-window bg-base-300 border mt-10 mb-10 w-11/12'>
			<div className='flex justify-center py-16 bg-base-200'>
				<div className='flex flex-col'>
					<pre data-prefix='$' className='text-primary font-bold'>
						<code>
							{' '}
							<span className='text-sm'>intro</span> <span className='text-xl'>Sean Gil</span>
						</code>
					</pre>
					<pre className='text-primary font-bold text-sm'>
						<code> / sh-AW-n · gil /</code>
					</pre>
					<br />
					<pre data-prefix='>' className='text-error-content'>
						<code> Full Stack Engineer based in Great Los Angeles County</code>
					</pre>
					<pre data-prefix='>' className='text-error-content'>
						<code>
							{' '}
							Disciplined military veteran with a passion for technology and public service
						</code>
					</pre>
					<pre data-prefix='>' className='text-error-content'>
						<code> Former Senior VP of a financial services firm</code>
					</pre>
				</div>
			</div>
		</div>
	);
};

export default WindowMockup;

import React from 'react';
import './Intro.scss';

export default function Intro() {
	return (
		<div className='intro' id='intro'>
			<div className='intro__text'>
				<p className='subheading'>INTRO</p>
				<h1> Sean Gil</h1>
				<h4>
					/ <b>sh</b>-AW-n &middot; g<i>il</i> /
				</h4>
				<h4>
					<b>Noun</b>
				</h4>
				<ul className='intro__def'>
					<li>
						1. Full Stack Engineer at Givinga, headquartered in Boston, MA
					</li>
					<li>
						2. US Army Veteran and former Senior Vice President of a financial
						services firm
					</li>
					<li>
						3. Podcast Host and Content Creator (Tech, Career Development, &
						Life)
					</li>
					<li>
						4. <span class='blink'>__</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

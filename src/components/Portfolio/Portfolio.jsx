import React from 'react';
import './Portfolio.scss';
// import stock from '../../Assets/Images/stock.png';
// import flix from '../../Assets/Images/flix.png';
// import bd from '../../Assets/Images/bd.png';

export default function Portfolio() {
	return (
		<div className='portfolio' id='portfolio'>
			<div className='portfolio__works instock'>
				<div id='color-overlay'></div>
				<h2 className='portfolio__works--title'>' InStock '</h2>
				<h4 className='portfolio__works--desc'>Inventory & Warehouse Management System</h4>
				<h6 className='portfolio__works--stack'>React, Express, Node, RESTful API</h6>
				<a
					target='_blank'
					rel='noreferrer noopener'
					href='https://github.com/sean35mm/ari-instock'
					className='portfolio__works--link'
				>
					GitHub
				</a>
			</div>
			<div className='portfolio__works bespoke'>
				<div id='color-overlay'></div>
				<h2 className='portfolio__works--title'>' BespokeDiligence '</h2>
				<h4 className='portfolio__works--desc'>Investigations Network Platform and Forum</h4>
				<h6 className='portfolio__works--stack'>React, Redux, Node, Express, MongoDB Atlas</h6>
				<a
					target='_blank'
					rel='noreferrer noopener'
					className='portfolio__works--link'
					href='https://github.com/sean35mm/BespokeDiligence'
				>
					GitHub
				</a>
			</div>
			<div className='portfolio__works brainflix'>
				<div id='color-overlay'></div>
				<h2 className='portfolio__works--title'>' BrainFlix '</h2>
				<h4 className='portfolio__works--desc'>Video play & upload // YouTube Clone</h4>
				<h6 className='portfolio__works--stack'>Vanilla JS, HTML, CSS/Sass, Node, Express</h6>
				<a
					target='_blank'
					rel='noreferrer noopener'
					className='portfolio__works--link'
					href='https://github.com/sean35mm/brainflix'
				>
					GitHub
				</a>
			</div>
		</div>
	);
}

import React from 'react';
import './Contact.scss';
import resume from '../../Assets/Files/resume.pdf';

//Imgs
// import github from "../../Assets/Images/github.png";
// import instagram from "../../Assets/Images/instagram.png";
// import linkedin from "../../Assets/Images/linkedin.png";

export default function Contact() {
	return (
		<div className='contact' id='contact'>
			<div className='contact__container'>
				<p className='contact__title'>CONTACT</p>
				<p className='contact__desc'>
					I'm always available to discuss exciting projects. If you'd like to
					contact me, use one of the links below or download my resume!
				</p>

				<div className='contact__main'>
					<div className='contact__main--left'>
						<a
							target='_blank'
							rel='noreferrer noopener'
							href='https://github.com/sean35mm'
						>
							- github.
						</a>
						<a
							target='_blank'
							rel='noreferrer noopener'
							href='https://www.linkedin.com/in/seanhgil/'
						>
							- linkedin.
						</a>
						<a
							target='_blank'
							rel='noreferrer noopener'
							href='https://anchor.fm/ggoom'
						>
							- ggoom podcast.
						</a>
						<a
							target='_blank'
							rel='noreferrer noopener'
							href='https://www.instagram.com/seantographer/'
						>
							- instagram.
						</a>
					</div>
					<div className='contact__main--right'>
						<a target='_blank' rel='noreferrer noopener' href={resume}>
							<button>RESUME</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

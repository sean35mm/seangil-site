import React from "react";
import "./Contact.scss";
import resume from "../../Assets/Files/resume.pdf";

//Imgs
// import github from "../../Assets/Images/github.png";
// import instagram from "../../Assets/Images/instagram.png";
// import linkedin from "../../Assets/Images/linkedin.png";

export default function Contact() {
	return (
		<div className='contact' id='contact'>
			<div className='contact__container'>
				<div className='contact__left'>
					<h1>Connect with me</h1>
					<div className='contact__socials'>
						<a href='https://github.com/sean35mm'>
							<b>- github.</b>
						</a>
						<a href='https://www.linkedin.com/in/seanhgil/'>
							<b>- linkedin.</b>
						</a>
						<a href='https://www.instagram.com/seantographer/'>
							<b>- instagram.</b>
						</a>
					</div>
				</div>
				<div className='contact__right'>
					<p>
						I am always open to new opportunities and projects. Feel free to download my resume and
						contact me.
					</p>
					<a href={resume}>
						<button>RESUME</button>
					</a>
				</div>
			</div>
		</div>
	);
}

import React from "react";
import "./About.scss";

//Imgs
import bootstrap from "../../Assets/Images/bootstrap.png";
import css3 from "../../Assets/Images/css3.png";
import firebase from "../../Assets/Images/firebase.png";
import git from "../../Assets/Images/git.png";
import heroku from "../../Assets/Images/heroku.png";
import html from "../../Assets/Images/html.png";
import javascript from "../../Assets/Images/javascript.png";
import material from "../../Assets/Images/material.png";
import mongodb from "../../Assets/Images/mongodb.png";
import node from "../../Assets/Images/node.png";
import postman from "../../Assets/Images/postman.png";
import react from "../../Assets/Images/react.png";
import sass from "../../Assets/Images/sass.png";

export default function About() {
	return (
		<div className='about' id='about'>
			<div className='about__container'>
				{/* <div className='prof-pic'>
					<img className='sean-pic' src={profilePic} alt='profile' />
				</div> */}
				<div className='about__text'>
					<div className='about__text-left'>
						<h3 className='about__text--title'>About Me</h3>
					</div>
					<div className='about__text-right'>
						<div className='about__paragraph1'>
							<p>
								Hello! I'm Sean Gil, a Software Developer and Veteran. I specialize in modern
								languages and frameworks like JavaScript, React.js, and Node.js. Most recently, I
								applied my military intelligence experience to the private sector and led a
								financial services startup in Los Angeles as a Senior Vice President of
								Investigations. I transitioned my skills over to my passion in development and
								technology. My field of interests are building new web technologies/products and
								public service. Whenever possible, I also apply my passion for develolping solutions
								for career transitioning Veterans and small business owners.
							</p>
						</div>
						<div className='about__paragraph2'>
							<p>
								My approach to development is to place heavy emphasis on the engineering thought
								process and logic moreso than the language used itself. With a deep love for
								software development, paired with an unbarred mindset, I creatively and efficiently
								ship great products.
							</p>
							<br />
							<p>
								I am based in the Greater Los Angeles and Orange County area, but will travel as
								needed.
							</p>
						</div>
					</div>
				</div>
				<div className='about__skills'>
					<div>
						<h3 className='about__text--title'>Skills &amp; Tools</h3>
					</div>
					<div className='about__skills-icons'>
						<div className='about__skills-icons--card'>
							<img src={javascript} alt='js' />
							<p>JavaScript</p>
						</div>
						<div className='about__skills-icons--card'>
							<img src={react} alt='react' />
							<p>React</p>
						</div>
						<div className='about__skills-icons--card'>
							<img src={node} alt='node' />
							<p>Node</p>
						</div>
						<div className='about__skills-icons--card'>
							<img src={mongodb} alt='mongo' />
							<p>MongoDB</p>
						</div>
						<div className='about__skills-icons--card'>
							<img src={html} alt='html' />
							<p>HTML5</p>
						</div>
						<div className='about__skills-icons--card'>
							<img src={css3} alt='css3' />
							<p>CSS3</p>
						</div>
						<div className='about__skills-icons--card'>
							<img src={sass} alt='sass' />
							<p>Sass</p>
						</div>
						<div className='about__skills-icons--card'>
							<img src={material} alt='material ui' />
							<p>Material UI</p>
						</div>
						<div className='about__skills-icons--card'>
							<img src={firebase} alt='firebase' />
							<p>Firebase</p>
						</div>
						<div className='about__skills-icons--card'>
							<img src={git} alt='git' />
							<p>Git</p>
						</div>
						<div className='about__skills-icons--card'>
							<img src={bootstrap} alt='bootstrap' />
							<p>Bootstrap 5</p>
						</div>
						<div className='about__skills-icons--card'>
							<img src={postman} alt='postman' />
							<p>Postman</p>
						</div>
						<div className='about__skills-icons--card'>
							<img src={heroku} alt='heroku' />
							<p>Heroku</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

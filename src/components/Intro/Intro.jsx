import React from "react";
import "./Intro.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
					<li>1. Software Developer, specializing in both front and back end development</li>
					<li>2. US Army Veteran and former executive of an LA based startup</li>
					<li>3. Currently consulting for financial firms and developing open source products.</li>
					<li>
						4. <span class='blink'>_</span>
					</li>
				</ul>
			</div>
			<a href='#about'>
				<ExpandMoreIcon fontSize='large' />
			</a>
		</div>
	);
}

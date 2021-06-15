import React from "react";
import "./NavBar.scss";

function NavBar() {
	return (
		<div className='navbar'>
			<div className='navbar__container'>
				<div className='logo'>
					<a href='#intro'>SG</a>
				</div>
				<div className='navbar__links'>
					<a href='#intro'>HOME</a>
					<a href='#about'>ABOUT</a>
					{/* <a href='#portfolio'>WORK</a> */}
					<a href='#contact'>CONTACT</a>
				</div>
			</div>
		</div>
	);
}

export default NavBar;

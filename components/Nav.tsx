import React from 'react';
import Link from 'next/link';

type Props = {};

const Nav = (props: Props) => {
	return (
		<nav>
			<div className='navbar bg-base-100'>
				<a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
			</div>
		</nav>
	);
};

export default Nav;

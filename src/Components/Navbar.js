import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<ul>
				<li>
					<NavLink to='/' activeClassName='active'>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeClassName='active'>
						Contact Me
					</NavLink>
				</li>
				<li>
					<NavLink to='/projects' activeClassName='active'>
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink to='/blogs' activeClassName='active'>
						Blogs
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;

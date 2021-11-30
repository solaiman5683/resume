import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<a
				className='resume_btn'
				href='https://drive.google.com/uc?export=download&id=1_Z45_q2M_x0SHz-BokD1zdbcYGUZIYO2'
				target='_blank'
				rel='noreferrer'>
				Download Resume <i className='fad fa-chevron-double-down'></i>
			</a>
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
			</ul>
		</div>
	);
};

export default Navbar;

import React from 'react';

const SideBar = () => {
	return (
		<div className='sidebar'>
			<div className='profile'>
				<img
					src='https://monnampo.sirv.com/Images/resume_1.svg'
					alt=''
					width='300'
				/>
				<h1 className='name'>Md. Sulaiman Hosain</h1>
				<p className='designation'>Full Stack Web Developer</p>
			</div>
			<div className='social'>
				<ul>
					<li>
						<a
							title='Send a mail to my Email address!'
							href='mailto:solaiman.sh6@gmail.com'
							target='_blank'
							rel='noreferrer'>
							<i class='fas fa-envelope'></i>
						</a>
					</li>
					<li>
						<a
							title='Visit my GitHub Profile'
							href='https://github.com/solaiman5683'
							target='_blank'
							rel='noreferrer'>
							<i class='fab fa-github'></i>
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/sulaimansh6/'
							target='_blank'
							rel='noreferrer'>
							<i class='fab fa-linkedin'></i>
						</a>
					</li>
					<li>
						<a
							href='https://www.facebook.com/solaiman.sh6/'
							target='_blank'
							rel='noreferrer'
							title='Facebook'>
							<i className='fab fa-facebook'></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;

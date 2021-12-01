import React from 'react';

const Project = ({ data }) => {
	const { name, shortDes, picture } = data;
	console.log(data);
	return (
		<div className='project'>
			<div
				className='image'
				style={{
					backgroundImage: `url('${picture}')`,
				}}></div>
			<div className='info'>
				<h2>{name}</h2>
				<p>{shortDes}</p>
				<button>Show Details</button>
			</div>
		</div>
	);
};

export default Project;

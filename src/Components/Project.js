import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Project = ({ data }) => {
	const [modal, setModal] = useState(false);
	const { name, shortDes, picture } = data;
	console.log(data);
	return (
		<div className='project'>
			<div
				className='image'
				style={{
					backgroundImage: `url('${picture}')`,
				}}></div>
			<div className='info p-3'>
				<h2>{name}</h2>
				<p>{shortDes}</p>
				<button
					onClick={() => setModal(true)}
					className='btn btn-warning rounded-pill text-light'>
					Show Details
				</button>
				<MyVerticallyCenteredModal
					show={modal}
					onHide={() => setModal(false)}
					data={data}
				/>
			</div>
		</div>
	);
};

function MyVerticallyCenteredModal(props) {
	const { data } = props;
	function createMarkup() {
		return { __html: data.description };
	}
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					{data.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<a
					href={data.picture}
					title='See Full Size Image'
					target='_blank'
					rel='noreferrer'>
					<img
						src={data.picture}
						alt=''
						className='rounded shadow'
						width='100%'
					/>
				</a>
				<div className='row my-4 align-items-center'>
					<div className='col-md-6'>
						<a
							href={data.image2}
							title='See Full Size Image'
							target='_blank'
							rel='noreferrer'>
							<img
								src={data.image2}
								alt=''
								className='rounded shadow'
								width='100%'
							/>
						</a>
					</div>
					<div className='col-md-6'>
						<a
							href={data.image3}
							title='See Full Size Image'
							target='_blank'
							rel='noreferrer'>
							<img
								src={data.image3}
								alt=''
								className='rounded shadow'
								width='100%'
							/>
						</a>
					</div>
				</div>
				<h5 className='my-3'>{data.shortDes}</h5>
				<a href={data.liveLink} className='btn btn-warning me-4 rounded-pill'>
					Live Site
				</a>

				{data.server && (
					<a href={data.server} className='btn btn-warning me-4 rounded-pill'>
						Server-Side Code
					</a>
				)}
				<a href={data.client} className='btn btn-warning me-4 rounded-pill'>
					Client-Side Code
				</a>
				<div className='py-4' dangerouslySetInnerHTML={createMarkup()} />
			</Modal.Body>
		</Modal>
	);
}

export default Project;

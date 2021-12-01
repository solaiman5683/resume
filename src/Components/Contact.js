import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
	const handleSubmit = e => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);

		emailjs
			.send(
				'service_rsub89w',
				'template_60z4r3p',
				formProps,
				'user_fhbwlG0MfRBOn9U3IrXqH'
			)
			.then(
				function (response) {
					console.log('SUCCESS!', response.status, response.text);
					Swal.fire({
						icon: 'success',
						title: `Thank You ${formProps.name}.`,
						text: 'Have a nice day! 😀',
						showConfirmButton: false,
						timer: 4000,
					});
				},
				function (error) {
					console.log('FAILED...', error);
				}
			);
	};
	return (
		<div className='contact'>
			<form class='decor' onSubmit={handleSubmit}>
				<div className='form-left-decoration'></div>
				<div className='form-right-decoration'></div>
				<div className='circle'></div>
				<div className='form-inner'>
					<h1>Contact Me</h1>
					<input type='text' name='name' placeholder='Enter your name here' />
					<input type='email' name='email' placeholder='Your Email' />
					<textarea
						placeholder='Your Message...'
						name='message'
						rows='5'></textarea>
					<button type='submit' href='/'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;

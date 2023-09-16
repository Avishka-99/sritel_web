import React, {useState} from 'react';
import '../../css/signin.css';
import Toast from '../../componets/Toast';
import * as ToastMessages from '../../componets/ToastMessages';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import {useNavigate} from 'react-router-dom';
export default function Signin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		try {
			Axios.post(API_ENDPOINTS.SIGNIN_URL, {
				email: email,
				password: password,
			}).then((response) => {
				console.log(response.data);
				// if (response.data.type) {
				// 	dispatch(SetUserAction(response.data.type));
				// 	localStorage.setItem('token', response.data.token);
				// 	localStorage.setItem('userId', JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId);
				// 	navigate('/home');
				// 	//window.location.reload(true);
				// } else if (response.data == 'Not verified') {
				// 	ToastMessages.warning('Please verify your account');
				// 	ToastMessages.info('Redirectiong to OTP verification');
				// 	//resetFormData();
				// 	setIsDisabled(true);
				// 	localStorage.setItem('otpemail', email);
				// 	setTimeout(function () {
				// 		navigate('/otp');
				// 	}, 3000);
				// } else {
				// 	ToastMessages.error(response.data);
				// }
				//console.log(response.data);
			});
		} catch (e) {
			console.log('e.error');
		}

		//e.preventDefault();
		//console.log(e.target[0].value);
	};
	return (
		<div className='outerContainer'>
			<div className='innerContainer'>
				<div className='formFields'>
					<div className='signinrow'>
						<input className='signInInput' type='text' onChange={(event) => setEmail(event.target.value)} value={email} required></input>
						<label className='placeholder'>User name*</label>
					</div>
					<div className='signinrow'>
						<input className='signInInput' type='password' onChange={(event) => setPassword(event.target.value)} value={password} required></input>
						<label className='placeholder'>Password*</label>
					</div>
					<div className='submitButton' onClick={handleSubmit}>
						Sign In
					</div>
					<div style={{display: 'flex', flexDirection: 'row'}}>
						<span>Not registered?</span>
						<span className='signInText' style={{textDecoration: 'underline', color: 'dodgerblue'}} onClick={() => navigate('/signup')}>
							Sign up
						</span>
					</div>
				</div>
			</div>
			<Toast duration={3000} />
		</div>
	);
}

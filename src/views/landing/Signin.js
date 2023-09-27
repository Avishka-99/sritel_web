import React, {useState, useEffect} from 'react';
import '../../css/signin.css';
import Toast from '../../componets/Toast';
import * as ToastMessages from '../../componets/ToastMessages';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {SetUserAction} from '../../actions/UserActions';
export default function Signin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [IsDisabled, setIsDisabled] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const showToast = (data) => {
		console.log('hello');
		if (data.type == 'success') {
			ToastMessages.success(data.message);
			ToastMessages.info('Redirecting to OTP verification');
			localStorage.setItem('otpmail', email);
			setIsDisabled(true);
			// setEmail('');
			// setPassword('');
			// // resetFormData();
			// setIsDisabled(true);
			setTimeout(function () {
				navigate('/otp');
			}, 1000);
		} else if (data.type == 'error') {
			ToastMessages.error(data.message);
		} else if (data.type == 'warning') {
			localStorage.setItem('otpmail', email);
			ToastMessages.warning(data.message);
			ToastMessages.info('Redirecting to OTP verification');
			setTimeout(function () {
				navigate('/otp');
			}, 1000);
		}
	};
	const handleSubmit = (e) => {
		try {
			Axios.post(API_ENDPOINTS.SIGNIN_URL, {
				email: email,
				password: password,
			}).then((response) => {
				console.log(response.data);
				if (response.data.type == 'success') {

					if (response.data.user) {
						dispatch(SetUserAction(response.data.user));
						localStorage.setItem("user_id", response.data.user_id)
						navigate('/home');
					} else {
						showToast(response.data);
					}
				} else {
					showToast(response.data);
				}
			});
		} catch (e) {
			console.log('e.error');
		}
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
					{IsDisabled ? (
						<div className='submitButton'>Sign In</div>
					) : (
						<div className='submitButton' onClick={handleSubmit}>
							Sign In
						</div>
					)}

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

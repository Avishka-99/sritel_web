import React, {useState} from 'react';
import '../../css/otp.css';
import Toast from '../../componets/Toast';
import * as ToastMessages from '../../componets/ToastMessages';
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import {useNavigate} from 'react-router-dom';
import OtpInput from 'react-otp-input';
export default function Otp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [otp, setOtp] = useState('');
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
				<div className='formField'>
					<div className='signinrow' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<OtpInput value={otp} onChange={setOtp} numInputs={6} renderSeparator={<span style={{marginRight: '3%'}}></span>} renderInput={(props) => <input {...props} />} inputStyle={{width: '10.5%', height: '48px', outline: '2px solid #7EB693', borderRadius: '5px', border: '0', fontSize: '20px', fontFamily: 'poppins-regular'}} />
					</div>
					<div className='submitButton' onClick={handleSubmit}>
						Verify
					</div>
				</div>
			</div>
			<Toast duration={3000} />
		</div>
	);
}

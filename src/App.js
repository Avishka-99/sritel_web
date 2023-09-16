import logo from './logo.svg';
import './App.css';
import {useSelector} from 'react-redux';
import Signin from './views/landing/Signin';
import Signup from './views/landing/Signup';
import Otp from './views/landing/Otp';
import {Route, Router, Routes} from 'react-router-dom';
function App() {
	console.log(useSelector((state) => state.UserReducer.user));
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Signin />}></Route>
				<Route path='/signup' element={<Signup />}></Route>
				<Route path='/otp' element={<Otp />}></Route>
			</Routes>
		</div>
	);
}

export default App;

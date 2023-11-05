import Axios from 'axios';
export const Axios_user =  Axios.create({
	baseURL: 'http://localhost:5001',
});
export const Axios_packages = Axios.create({
	baseURL: 'http://localhost:5002',
});

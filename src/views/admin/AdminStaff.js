import React, {useState} from 'react';
import '../../css/admin/admin.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Axios_packages} from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
export default function AdminStaff() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [contactNo, setContactno] = useState('');
	const [voiceLimit, setVoiceLimit] = useState('');
	const [smsLimit, setSmsLimit] = useState('');
	const [price, setPrice] = useState('');
	const [type, setType] = useState('');
	const style = {
		position: 'absolute',
		top: '50%',
		left: '45vw',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		boxShadow: 24,
	};
	const handleSubmit = () => {
		Axios_packages.post(API_ENDPOINTS.ADD_PACKAGE_URL, {});
	};
	const closeModal = () => {
		setIsModalVisible(!setIsModalVisible);
		setName('');
		setContactno('');
	};
	return (
		<div className='adminPackages' style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
			<div
				className='adminPackagesTopRow'
				style={{
					width: '90%',
					height: '12%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
				}}
			>
				<div className='adminPackageAddButton' onClick={() => setIsModalVisible(!isModalVisible)}>
					Add
				</div>
			</div>
			<Modal onClose={closeModal} open={isModalVisible} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div
						style={{
							backgroundColor: 'white',
							width: '40vw',
							height: '40vw',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<div className='addNewPackageTitle' style={{display: 'flex', height: '7%', alignItems: 'center', justifyContent: 'center'}}>
							Staff Register Form
						</div>
						<div className='adminPackagerow'>
							<input placeholder='Name*' className='adminPackageInput' type='text' onChange={(event) => setName(event.target.value)} value={name} required></input>
							{/* <label className='adminPackagePlaceholder'>User name*</label> */}
						</div>
						<div className='adminPackagerow'>
							<input placeholder='Email*' className='adminPackageInput' type='text' onChange={(event) => setName(event.target.value)} value={email} required></input>
						</div>
						<div className='adminPackagerow'>
							<input placeholder='Contact no*' className='adminPackageInput' type='text' onChange={(event) => setName(event.target.value)} value={contactNo} required></input>
						</div>
						<div className='adminPackageAddButton' style={{height: '10%', width: '40%', color: 'white'}} onClick={handleSubmit}>
							Add
						</div>
					</div>
				</Box>
			</Modal>
			<div
				className='adminPackagesBottomRow'
				style={{
					width: '90%',
					height: '60%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-start',
					overflow: 'hidden',
					tableLayout: 'fixed',
				}}
			>
				<table class='admin-styled-table'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Contact no</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class='active-row'>
							<td>Melissa</td>
							<td>5150</td>
						</tr>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class='active-row'>
							<td>Melissa</td>
							<td>5150</td>
						</tr>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class='active-row'>
							<td>Melissa</td>
							<td>5150</td>
						</tr>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class='active-row'>
							<td>Melissa</td>
							<td>5150</td>
						</tr>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class='active-row'>
							<td>Melissa</td>
							<td>5150</td>
						</tr>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class='active-row'>
							<td>Melissa</td>
							<td>5150</td>
						</tr>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class='active-row'>
							<td>Melissa</td>
							<td>5150</td>
						</tr>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class='active-row'>
							<td>Melissa</td>
							<td>5150</td>
						</tr>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class='active-row'>
							<td>Melissa</td>
							<td>5150</td>
						</tr>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class='active-row'>
							<td>Melissa</td>
							<td>5150</td>
						</tr>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class='active-row'>
							<td>Melissa</td>
							<td>5150</td>
						</tr>
						<tr>
							<td>Dom</td>
							<td>6000</td>
						</tr>
						<tr class='active-row'>
							<td>Melissa</td>
							<td>5150</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

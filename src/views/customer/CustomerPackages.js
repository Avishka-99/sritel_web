import React, {useState,} from 'react';
import {Modal, Box, Typography} from '@mui/material';
import '../../css/customer/customerpackages.css';
import PackageCard from '../../componets/PackageCard';
export default function CustomerPackages() {
	const [checked, setChecked] = useState('All');
	const package_names = [
		{
			name: 'All',
		},
		{
			name: 'Data',
		},
		{
			name: 'Voice',
		},
	];
	const work_and_learn_packages = [
		{
			name: '7 Days',
			quota: 25,
			duration: 7,
			platforms: ['zoom', 'teams'],
			price: 285,
		},
		{
			name: '21 Days',
			quota: 80,
			duration: 21,
			platforms: ['zoom', 'teams', 'meet'],
			price: 840,
		},
		{
			name: '30 Days',
			quota: 80,
			duration: 30,
			platforms: ['zoom', 'teams', 'meet'],
			price: 1100,
		},
	];
	const unlimited_packages = [
		{
			name: '24 Hours',
			price: 329,
			duration: 24,
		},
		{
			name: '3 Days',
			price: 1100,
			duration: 3,
		},
		{
			name: '30 Days',
			price: 9999,
			duration: 30,
		},
	];
	const activate = () => {
		console.log('Hello');
	};
	const handleSubmit = (name) => {
		console.log(name)
		setChecked(name);
	};
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: 'white',
			}}
		>
			<div className='radioButtonRow'>
				{package_names.map((item) => (
					<div style={checked == item.name ? {backgroundColor: '#5E239D'} : {backgroundColor: '#8a2be2'}} className='RadioButton' onClick={() => handleSubmit(item.name)}>
						{item.name}
					</div>
				))}
			</div>
			<div className='packageContainer'>
				{checked == 'All' ? (
					<>
						<PackageCard type='type8' title='Work and learn' data={work_and_learn_packages} fun={activate} />
						<PackageCard type='type28' title='Unlimited' data={unlimited_packages} fun={activate} />
					</>
				) : checked == 'Work and learn' ? (
					<PackageCard type='type2' title='Work and learn' data={work_and_learn_packages} fun={activate} />
				) : checked == 'Unlimited' ? (
					<PackageCard type='type2' title='Unlimited' data={unlimited_packages} fun={activate} />
				) : (
					<></>
				)}
			</div>
		</div>
		// <Modal open={true} onClose={() => {}} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
		// 	<Box sx={{width: 400}}>
		// 		<Typography id='modal-modal-title' variant='h6' component='h2'>
		// 			Text in a modal
		// 		</Typography>
		// 		<Typography id='modal-modal-description' sx={{mt: 2}}>
		// 			Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
		// 		</Typography>
		// 	</Box>
		// </Modal>
	);
}

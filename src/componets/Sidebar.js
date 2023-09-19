import React, {useEffect, useState} from 'react';
import MenuItem from './MenuItem';
import '../css/Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import FourGMobiledataIcon from '@mui/icons-material/FourGMobiledata';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from 'react-router-dom';
import {Widgets} from '@mui/icons-material';
const ShowSidebar = (props) => {
	const navigate = useNavigate();
	var user = localStorage.getItem('type');
	const [role, setRole] = useState('delivery');
	const [Active, setActive] = useState(1);
	const [expanded, setExpanded] = useState(false);
	const toggleSidebar = () => {
		setExpanded(!expanded);
	};
	/*useEffect(() => {
    navigate('/order');
  })*/
	//console.log(user);
	const customer = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Home', link: 'home', index: '1'},
		{id: 2, icon: <FourGMobiledataIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Packages', link: 'packages', index: '2'},
		{id: 3, icon: <SupportAgentIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Support', link: 'support', index: '3'},
		{id: 4, icon: <LogoutIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Logout', link: 'logout', index: '4'},
	];
	//console.log(restaurant[0].icon.props.sx.fontSize)
	const navigateTo = (page, index) => {
		setActive(index);
		if (page == 'logout') {
			setActive(1);
			localStorage.clear('type');
		}
		navigate('/' + page);
	};
	if (props.type == 'Customer') {
		return (
			<div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`} onSelect={(item) => console.log(item)}>
				<div className={expanded ? 'expand-toggle' : 'expand'} onClick={toggleSidebar}>
					{expanded ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
				</div>
				<div className='menuItemContainer'>
					{customer.map((item) => (
						<MenuItem expanded={expanded ? true : false} key={item.id} icon={item.icon} labelMargin={expanded ? {marginLeft: '10%', height: '100%', display: 'flex', alignItems: 'center'} : {marginLeft: '0%', height: '100%', display: 'flex', alignItems: 'center'}} label={expanded ? item.label : null} style={{width: '100%'}} fun={navigateTo} link={item.link} index={item.index} active={Active} />
					))}
				</div>
			</div>
		);
	}
};
export default function Sidebar(props) {
	const [showSidebar, setShowSidebar] = useState(true);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};
	return (
		<>
			{/* <div onClick={toggleSidebar} className='sidebarButton'>Hello</div> */}
			{showSidebar && <ShowSidebar type={props.type} />}
		</>
	);
}

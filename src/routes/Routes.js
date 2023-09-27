import * as UserViews from '../constants/AllViews';
import React from 'react';

//check madhawa
export const customerRoutes = [
	{id: 1, path: '/home', element: <UserViews.CustomerDashboard />},
	{id: 2, path: '/packages', element: <UserViews.CustomerPackages />},
	{id: 3, path: '/support', element: <UserViews.CustomerSupport />},
];
export const adminRoutes = [
	{id: 1, path: '/home', element: <UserViews.AdminDashboard />},
	{id: 2, path: '/packages', element: <UserViews.AdminPackages />},
	{id: 3, path: '/staff', element: <UserViews.AdminStaff />},
];
export const customerAgentRoutes = [
	{id: 1, path: '/home', element: <UserViews.CustomerAgentDashboard />},
	{id: 2, path: '/customerSupport', element: <UserViews.AgentSupport />},
];


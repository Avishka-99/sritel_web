import * as UserViews from '../constants/AllViews';
import React from 'react';

//check madhawa
export const customerRoutes = [
	{id: 1, path: '/home', element: <UserViews.CustomerDashboard />},
	{id: 2, path: '/packages', element: <UserViews.CustomerPackages />},
	{id: 3, path: '/support', element: <UserViews.CustomerSupport />},
];

import {SET_USER} from '../constants/ActionTypes';
const initialState = {
	user: 'Avishka',
};
const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			//localStorage.setItem('type', action.data);
			return {
				//counter:getFromDatabase(),
				...state,
				user: action.data,
			};
		default:
			return state;
	}
};
export default UserReducer;

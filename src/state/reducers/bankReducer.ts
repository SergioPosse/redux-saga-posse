import {IAction} from '../actions-interface/index';
const initialState:any = {
			count:0,
			users:[],
			loading:false,
			error:null
};

const reducer = (state:any = initialState, action: IAction) => {
	switch (action.type) {
		case "deposit":
			return  state.count + action.payload;
		case "withdraw":
			return state.count - action.payload;
		case "bankrupt":
			return 0;
		case 'GET_USERS_REQUESTED':
			return {...state,loading:true};
		case 'GET_USERS_SUCCESS':
			return {...state,users:action.payload,loading:false};
		// case 'GET_USERS_ERROR':
		// 	return {...state,error:action.payload};
		default:
			return state;
	}
}

export default reducer;
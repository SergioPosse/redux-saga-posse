import {IAction} from '../actions-interface/index';

const initialState = 0;

const reducer = (state:number = initialState, action: IAction) => {
	switch (action.type) {
		case "deposit":
			return  state + action.payload;
		case "withdraw":
			return state - action.payload;
		case "bankrupt":
			return 0;
		default:
			return state;
	}
}

export default reducer;
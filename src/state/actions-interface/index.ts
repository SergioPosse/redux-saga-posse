import {ActionTypes} from '../action-types/index';

interface DepositAction {
	type: ActionTypes.DEPOSIT
	payload: number
}

interface WithdrawAction {
	type: ActionTypes.WITHDRAW
	payload: number
}

interface BankruptAction {
	type: ActionTypes.BANKRUPT
}
interface GetUsersRequested {
	type: ActionTypes.GET_USERS_REQUESTED,
	payload: []
}
interface GetUsersSuccess {
	type: ActionTypes.GET_USERS_SUCCESS,
	payload: []
}
interface GetUsersError {
	type: ActionTypes.GET_USERS_ERROR,
	payload: []
}
export type IAction = DepositAction | WithdrawAction | BankruptAction | GetUsersRequested | GetUsersError | GetUsersSuccess;
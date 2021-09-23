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

export type IAction = DepositAction | WithdrawAction | BankruptAction;
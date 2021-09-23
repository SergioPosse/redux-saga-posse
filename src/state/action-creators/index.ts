import { ActionTypes } from "../action-types";
import { Dispatch } from 'redux';
import { IAction } from "../actions-interface";

//importando IAction ahora el payload respeta el tipo
//porque lo especifique en el tipo que sera el dispatch
//hay que importar el tipo Dispatch de redux y adjuntarle Action

export const depositMoney = (amount:number)=>{
	return (dispatch:Dispatch<IAction>) => {
		dispatch({
			type:ActionTypes.DEPOSIT,
			payload: amount
		})
	}
}

export const withdrawMoney = (amount:number)=>{
	return (dispatch:Dispatch<IAction>) => {
		dispatch({
			type:ActionTypes.WITHDRAW,
			payload: amount
		})
	}
}

export const bankrupt = ()=>{
	return (dispatch:Dispatch<IAction>) => {
		dispatch({
			type:ActionTypes.BANKRUPT
		})
	}
}
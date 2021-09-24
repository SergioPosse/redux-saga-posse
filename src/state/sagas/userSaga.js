import {call, put, takeEvery} from 'redux-saga/effects';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const getApi = ()=>{
	return fetch(apiUrl, {
		method:'GET',
		headers:{
			'Content-Type': 'application/json',
		}
		}).then((response)=>{
			response.json()
		}).catch((e)=>{
			throw e
		})
}

function* fetchUsers (action){
	try{
		const users = yield call(getApi);
		yield put({type:'GET_USERS_SUCCESS', users: users})
	}catch(e){
		yield put({type:'GET_USERS_ERROR', message: e.message})
	}
}

function* userSaga (){
	yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga

import { all, fork, takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { 
    UP,
    UP_SUCCESS,
    UP_FAILURE,
    DOWN,
    DOWN_SUCCESS,
    DOWN_FAILURE,
} from '../reducers/counter'

function upAPI(data){
    return axios.post('/counter/up',data)
}

function* up(action){
    try {
        // const result = yield call(upAPI, action)
        yield call(upAPI,action.payload)
        yield put({
            type: UP_SUCCESS,
        })
    } catch (e) {
        yield put({
            type: UP_FAILURE,
        })
    }
}

function* watchCounterUp(){
    // message:string , call:function
    yield takeLatest(UP,up)
}

export default function* counterSaga(){    
    yield all([
        fork(watchCounterUp)
    ])
}

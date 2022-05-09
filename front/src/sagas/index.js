// side effects redux-saga/effects
import { all } from 'redux-saga/effects'
import takersAll from './takersAll'
import watchCounterUp from './counterSaga'
import userSaga from './userSaga'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3500'


export default function* rootSaga(){
    yield all([
        // takersAll(watchCounterUp),
        takersAll(userSaga)
    ])
}


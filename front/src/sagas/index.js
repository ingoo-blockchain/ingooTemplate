import { all,fork } from 'redux-saga/effects'
import counterSaga from './counterSaga.js'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3500'
axios.defaults.withCredentials = true

export default function* rootSaga(){
    yield all([
        fork(counterSaga)
    ])
}
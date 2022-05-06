// side effects redux-saga/effects
import { all,fork } from 'redux-saga/effects'
import watchCounterUp from './counterSaga'

export default function* rootSaga(){
    yield all([
        fork(watchCounterUp)
    ])
}


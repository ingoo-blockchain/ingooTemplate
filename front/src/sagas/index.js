// side effects redux-saga/effects
import { all } from 'redux-saga/effects'
import takersAll from './takersAll'
import watchCounterUp from './counterSaga'
import userSaga from './userSaga'

console.log( userSaga )

export default function* rootSaga(){
    yield all([
        // takersAll(watchCounterUp),
        takersAll(userSaga)
    ])
}


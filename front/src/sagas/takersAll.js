import { put, all, takeLatest } from 'redux-saga/effects'

const taker = (actionType, func) => function* (action) {
    const [prfix] = actionType.split('_')
    try {
      const result = yield func(action)
      yield put({
        type: `${prfix}_SUCCESS`,
        data: result.data
      })
    } catch (e) {
      yield put({
        type: `${prfix}_FAILURE`,
        data: e.response.data
      })
    }
}

const takesAll = sagaItems => {
    return all(sagaItems.map(saga => { 
      return takeLatest(saga[0],taker(...saga))
    }))   
}

export default takesAll


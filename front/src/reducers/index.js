import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import counter from './counter'
import user from './user'

const persist = {
    key: "user", 
    storage, // 저장 방법 
    whitelist: ["user"] // localstorage 에 저장할 내용
}

const rootReducer = combineReducers({
    counter,
    user
})


export default persistReducer(persist,rootReducer)


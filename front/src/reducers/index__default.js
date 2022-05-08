import { combineReducers } from "redux"
import counter from './counter'
import user from './user'

const persistKey = 'user'
const storageState = localStorage.getItem(persistKey)
localStorage.setItem(persistKey,JSON.stringify(storageState ? JSON.parse(storageState) : user()))

const rootReducer = combineReducers({
    counter,
    user
})


export default rootReducer


import { createAction, handleActions } from 'redux-actions'

const initialState = {
    me:{
        id:null,
        email:null,
        nickname:null,
        provider:null,
    },
    isLogin:false,
}


export const setLogin = createAction(types.setLogin)

console.log(setLogin)

const user = (state, action) => {

}
// https://roy-jung.github.io/201111-concise-redux-saga/
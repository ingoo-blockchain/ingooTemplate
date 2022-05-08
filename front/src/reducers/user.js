import { createAction, handleActions } from 'redux-actions'

const initialState = {
    me:{
        id:null,
        email:null,
        nickname:null,
        provider:null,
    },
    isLogin:false,
    error:null,
    loadding:false
}


const createRequestActionTypes = (base) => {
    const REQUEST = 'REQUEST'
    const SUCCESS = 'SUCCESS'
    const FAILURE = 'FAILURE'

    return [REQUEST, SUCCESS, FAILURE].reduce((requestTypes, type) => {
        requestTypes[type] = createAction(`${base}_${type}`);
        return requestTypes;
    }, {});
};

export const USER_LOGIN = createRequestActionTypes('USER/LOGIN') 


const user = (state = initialState, action) => {
    switch(action.type){
        case USER_LOGIN.REQUEST.toString():{
            return {
                ...state,
                loadding:true,
                error:null,
            }
        }
        case USER_LOGIN.SUCCESS.toString():{
            return {
                ...state,
                loadding:false,
                error:null
            }
        }
        case USER_LOGIN.FAILURE.toString():{
            return {
                ...state,
                loadding:false,
                error:action.payload,
            }
        }
        default:
            return state
    }
}

export default user
// https://roy-jung.github.io/201111-concise-redux-saga/
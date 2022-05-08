const {createAction, handleActions} = require('redux-actions')

const initialState = {
    number: 0,
    loadding:false,
    error:null
}

const UP = 'COUNTER/UP_REQUEST'
const DOWN = 'COUNTER/DOWN_REQUEST'

/*
    COUNTER/UP
*/

/*
    COUNTER/UP_SUCCESS +1
*/

/*
    COUNTER/UP_FAULARE X
*/

export const up = (payload) => ({ type:UP,payload })
export const down = (payload) => ({ type:DOWN,payload })

const counter = (state = initialState, action) => {
    switch(action.type){
        case "COUNTER/UP_REQUEST":
            return {
                ...state,
                loadding:true,
                error:null
            }
        case "COUNTER/UP_SUCCESS":
            return {
                ...state,
                loadding:false,
                number:state.number+1
            }
        case "COUNTER/UP_FAILURE":
            return {
                ...state,
                loadding:false,
                error:'접속에러같음!'
            }

        case "COUNTER/DOWN_REQUEST":
            return {
                ...state,
                loadding:true,
                error:null,
            }
        case "COUNTER/DOWN_SUCCESS":
            return {
                ...state,
                loadding:false,
                number:state.number-1
            }
        case "COUNTER/DOWN_FAULURE":
            return {
                ...state,
                loadding:false,
                error:'서버에서 에러났음'
            }
        default: 
            return state
    }
}

export default counter

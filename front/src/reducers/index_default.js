import { combineReducers } from "redux";
import counter from './counter'

// const rootReducer = combineReducers({
//     counter
// })

// const rootReducer = (state,action) => {
//     return {
//         number:0,
//         name:'ingoo'
//     }
// }

const initialState = {
    number:0
}

// const initialState = {
//     counter:{
//         number:0,
//         name:'ingoo'
//     },
//     comment:{
//         list:[]
//     }
// }

const UP = 'COUNTER/UP'
const DOWN = 'COUNTER/DOWN'

export const up = () => ({type:UP})
export const down = () => ({type:DOWN})

const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case UP:
            return {
                ...state,
                number:state.number + 1
            }
        case DOWN:
            return {
                ...state,
                number:state.number - 1
            }
        default:
            return state 
    }
}

export default rootReducer;
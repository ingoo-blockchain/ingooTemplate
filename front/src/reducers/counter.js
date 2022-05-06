const {createAction, handleActions} = require('redux-actions')

const initialState = {
    number:0
}

export const UP = 'COUNTER/UP'
export const UP_SUCCESS = 'COUNTER/UP_SUCCESS'
export const UP_FAILURE = 'COUNTER/UP_FAILURE'

export const DOWN = 'COUNTER/DOWN'
export const DOWN_SUCCESS = 'COUNTER/DOWN_SUCCESS'
export const DOWN_FAILURE = 'COUNTER/DOWN_FAILURE'

export const up = createAction(UP, payload => payload)
export const down = createAction(DOWN, payload => payload)

const counter = handleActions({
        [UP]: (state,action) => ({ number:state.number + 1 }),
        [DOWN]: (state,action) => ({ number:state.number - 1 })
    },
    initialState
)

export default counter

const initialState = {
    number: 0
}

const counter = (state = initialState, action) => {
    switch(action.type){
        case "UP":
            return {
                ...state,
                number: state.number + 1
            }
        default: 
            return state
    }
}

export default counter
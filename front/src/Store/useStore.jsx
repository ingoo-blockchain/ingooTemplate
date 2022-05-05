import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// const enhancer = process.env.NODE_ENV === 'production'
//                  ? ''
//                  : composeWithDevTools

// const configStore = () => {
//     const store = createStore(rootReducer,enhancer)
//     return store    
// }

const store = createStore(rootReducer,composeWithDevTools()) // rootReducer , enhancer



const Store = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Store
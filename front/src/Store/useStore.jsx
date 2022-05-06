import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const enhancer = process.env.NODE_ENV === 'production'
? compose(applyMiddleware(...middleware)) 
: composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(rootReducer,enhancer)
sagaMiddleware.run(rootSaga)

const Store = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Store
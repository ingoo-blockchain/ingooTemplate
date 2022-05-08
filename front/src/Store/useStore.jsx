import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga' // redux -> object createSagaMiddleware()
import rootSaga from '../sagas'
// import usePersistedState from '../Hook/usePersistedState'


import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"


const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const enhancer = process.env.NODE_ENV === 'production'
? compose(applyMiddleware(...middleware)) // 배포모드
: composeWithDevTools(applyMiddleware(...middleware)) // 개발모드 

const store = createStore(rootReducer,enhancer) // rootReducer , enhancer
sagaMiddleware.run(rootSaga) // sagas/index.js

const persistor = persistStore(store)

const Store = ({children}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default Store
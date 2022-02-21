import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducers from './reducers'

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['UserDetail', 'PostProfilePicture']
}

// const persistedReducer = persistReducer(persistConfig, rootReducers)

// export default () => {
//     let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
//     let persistor = persistStore(store)
//     return {store, persistor}
// }

const persistedReducer = persistReducer(persistConfig, rootReducers) // create a persisted reducer

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk, logger)
)

const  persistor = persistStore(store);

export {store, persistor}

// let store = createStore(rootReducers, applyMiddleware(thunk, logger))
// export default store

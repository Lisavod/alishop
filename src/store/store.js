import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'; //persist any users state to localStorage
import storage from 'redux-persist/lib/storage'; //by default in all browsers will use local storage
//root-reducer
import { rootReducer } from './root-reducer';
import thunk from 'redux-thunk';

// const middleWares = [
//     process.env.NODE_ENV === 'development' && logger,
//     thunk
// ].filter(Boolean); //tells us whther we are on production or development mode
// //filter is the value is false, so not logging in production


const middleWares = [thunk, logger];






const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
// export const store = createStore(rootReducer, composedEnhancers);

const persistConfig = {
    key: 'root', // 'root' tells that we want to persist everything
    storage,
    whitelist: ['cart']
        // blacklist: ['user', 'categories'] //specify reducer we don't want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
//in index.js we import the component where we pass that
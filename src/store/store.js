import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'; //persist any users state to localStorage
import storage from 'redux-persist/lib/storage'; //by default in all browsers will use local storage
//root-reducer
import { rootReducer } from './root-reducer';


const persistConfig = {
    key: 'root', // 'root' tells that we want to persist everything
    storage,
    blacklist: ['user'] //specify reducer we don't want to persist
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, composedEnhancers);
export const store = createStore(persistedReducer, composedEnhancers);

//
export const persistor = persistStore(store);
//in index.js we import the component where we pass that
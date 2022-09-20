// // import React, { createContext, useState, useEffect} from 'react';
// import React, { createContext, useEffect, useReducer} from 'react';
// import { onAuthStateChangedListener, createUserDocumentFromAuth  } from '../../src/utils/firebase/firebase.utils'
// import {createAction} from '../utils/reducer/reducer.utils';


// //as the actual value you want to access
// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: () => null,

// });

// /* New reducer code */

// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// }

// const userReducer = (state, action) => {
//     console.log('dispatched');
//     console.log(action);
//     const { type, payload } = action;
//     switch(type) {
//         case 'SET_CURRENT_USER':
//             return {
//                 ...state,
//                 currentUser: payload
//             }
//         default: 
//             throw new Error(`Unhandled type ${type} in userReducer`)   


//     }
// }


// const INITIAL_STATE = { //initail state for Reducer
//     currentUser: null
// }

// export const UserProvider = ({children}) => {
//     // const [currentUser, setCurrentUser] = useState(null);
//     // const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
//     const [ {currentUser}, dispatch ] = useReducer(userReducer, INITIAL_STATE);
//     // const { currentUser } = state;
//     console.log(currentUser);
//     const setCurrentUser = (user) => {
//         dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
//     }

//     // dispatch();
//     const value = { currentUser, setCurrentUser };

    

//     useEffect(()=> {
//         const unsubscribe = onAuthStateChangedListener((user)=>{
//             if (user) {
//                 createUserDocumentFromAuth(user);
//             }
//             setCurrentUser(user);
//         })
//         return unsubscribe; //unsubscribe whenever you unmount
//     }, []);

//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }
// // import React, { createContext, useState, useEffect} from 'react';
// import React, { createContext, useReducer} from 'react';
// import {createAction} from '../utils/reducer/reducer.utils'

// const addCartItem = (cartItems, productToAdd) => {
//     //find if cartItems contains productToAdd
//     const existingCartItem = cartItems.find((cartItem) => cartItem.id ===productToAdd.id);
//     //If found, increment quantity
//     if(existingCartItem) {
//         return cartItems.map((cartItem) => cartItem.id===productToAdd.id ? 
//             {...cartItem, quantity: cartItem.quantity+1 } : cartItem
//         );
//     }
   
//     //return new array with modified cardItems / new card item
//     return [...cartItems, {...productToAdd, quantity: 1}];
   
// };

// const removeCartItem = (cartItems, productToRemove) => {
//     //find if cartItems contains productToAdd
//    return cartItems.filter((cartItem) => cartItem.id!==productToRemove.id) 
// };

// const removeOneCartItem = (cartItems, cartItemToRemove) => {
//     //find if cartItems contains cartItemToAdd
//     const existingCartItem = cartItems.find((cartItem) => cartItem.id ===cartItemToRemove.id);
//     //check if quantity is equal to 1, if it is remove that item from the cart 
//     if(existingCartItem.quantity ===1) {
//         return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
//     }
    
//     return cartItems.map((cartItem) => cartItem.id===cartItemToRemove.id ? 
//         {...cartItem, quantity: cartItem.quantity-1 } : cartItem
//     ); 
// };



// //as the actual value you want to access
// export const DropdownContext = createContext({
//     toggleDropdown: false,
//     setToggleDropdown: () => {},
//     cartItems: [],
//     addItemToCart: () => {},
//     itemsCounter: 0,
//     setCartItems: () => {},
//     removeItemFromCart: () => {},
//     removeOneItemFromCart: () => {},
//     cartTotal: 0,
    
// });


// //set action types
// const  CART_ACTION_TYPES = {
//     SET_CART_ITEMS: 'SET_CART_ITEMS',
//     SET_TOGGLE_DROPDOWN: 'SET_TOGGLE_DROPDOWN'
// }
//create initial state for Reducer
// const INITIAL_STATE = {
//     toggleDropdown: false,
//     cartItems: [],
//     itemsCounter: 0,
//     cartTotal: 0,
// }

// //create a Reducer
// const cartReducer = (state, action) => {
//     const {type, payload} = action;

//     switch(type){
//         case CART_ACTION_TYPES.SET_CART_ITEMS:
//             return {
//                 ...state,
//                 ...payload
//             };
//         case CART_ACTION_TYPES.SET_TOGGLE_DROPDOWN:
//             return {
//                 ...state,
//                 toggleDropdown: payload,

//             }    
//         default: 
//             throw new Error(`unhandled type of {type} in cartReducer`);
//     }



// }


// export const DropdownProvider = ({children}) => {
//     // const [toggleDropdown, setToggleDropdown] = useState(false);
//     // const [cartItems, setCartItems] = useState([]);
//     // const [itemsCounter, setItemsCounter] = useState(0);
//     // const [cartTotal, setCartTotal] = useState(0);
   
//     const [{cartItems, toggleDropdown, itemsCounter, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    

//     // useEffect(()=> {
//     //     const sumQuantity = cartItems.reduce((accumulator, cartItem) => accumulator+cartItem.quantity, 0 )
//     //     setItemsCounter(sumQuantity)
//     // }, [cartItems]);

//     // useEffect(()=> {
//     //     const cartTotalValue = cartItems.reduce((total, cartItem) => total+cartItem.quantity*cartItem.price, 0 )
//     //     setCartTotal(cartTotalValue)
//     // }, [cartItems]);



//     const updateCartItemReducer = (newCartItems) => {
//         const newCartCount = newCartItems.reduce((accumulator, cartItem) => accumulator+cartItem.quantity, 0 )

//         const newCartTotal= newCartItems.reduce((total, cartItem) => total+cartItem.quantity*cartItem.price, 0 )

//         dispatch(
//             createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//                 cartItems: newCartItems, 
//                 cartTotal: newCartTotal, 
//                 itemsCounter: newCartCount, } )
//                 )
//         }
//         /*
//         generate newCartTotla

//         generate newCartCount

//         dispatch new action with payloaf = {
//             newCartItems,
//             newCartTotal,
//             newCartCount
//         }
//         */
    
//     const addItemToCart = (productToAdd) => {
//         const newCartItems = (addCartItem(cartItems, productToAdd));
//         updateCartItemReducer(newCartItems);
//      }

//     const removeItemFromCart = (productToRemove) => {
//         const newCartItems = (removeCartItem(cartItems, productToRemove));
//         updateCartItemReducer(newCartItems);
//       }
     
//     const removeOneItemFromCart = (cartItemToRemove) => {
//         const newCartItems = (removeOneCartItem(cartItems, cartItemToRemove));
//         updateCartItemReducer(newCartItems);
//       }

//     const setToggleDropdown = (bool) => {
//         dispatch(createAction(CART_ACTION_TYPES.SET_TOGGLE_DROPDOWN, bool));

//       }


//     const value = { 
//         toggleDropdown,
//         setToggleDropdown, 
//         addItemToCart, 
//         removeItemFromCart, 
//         removeOneItemFromCart, 
//         cartItems, 
//         itemsCounter, 
//         cartTotal
//     };

//     return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
// }


//CODE WITHOUT REDUCER

// const addCartItem = (cartItems, productToAdd) => {
//     //find if cartItems contains productToAdd
//     const existingCartItem = cartItems.find((cartItem) => cartItem.id ===productToAdd.id);
//     //If found, increment quantity
//     if(existingCartItem) {
//         return cartItems.map((cartItem) => cartItem.id===productToAdd.id ? 
//             {...cartItem, quantity: cartItem.quantity+1 } : cartItem
//         );
//     }
   
//     //return new array with modified cardItems / new card item
//     return [...cartItems, {...productToAdd, quantity: 1}];
   
// };

// const removeCartItem = (cartItems, productToRemove) => {
//     //find if cartItems contains productToAdd
//    return cartItems.filter((cartItem) => cartItem.id!==productToRemove.id) 
// };

// const removeOneCartItem = (cartItems, cartItemToRemove) => {
//     //find if cartItems contains cartItemToAdd
//     const existingCartItem = cartItems.find((cartItem) => cartItem.id ===cartItemToRemove.id);
//     //check if quantity is equal to 1, if it is remove that item from the cart 
//     if(existingCartItem.quantity ===1) {
//         return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
//     }
    
//     return cartItems.map((cartItem) => cartItem.id===cartItemToRemove.id ? 
//         {...cartItem, quantity: cartItem.quantity-1 } : cartItem
//     ); 
// };



// //as the actual value you want to access
// export const DropdownContext = createContext({
//     toggleDropdown: false,
//     setToggleDropdown: () => {},
//     cartItems: [],
//     addItemToCart: () => {},
//     itemsCounter: 0,
//     setCartItems: () => {},
//     removeItemFromCart: () => {},
//     removeOneItemFromCart: () => {},
//     cartTotal: 0,
    
// });

// export const DropdownProvider = ({children}) => {
//     const [toggleDropdown, setToggleDropdown] = useState(false);
//     const [cartItems, setCartItems] = useState([]);
//     const [itemsCounter, setItemsCounter] = useState(0);
//     const [cartTotal, setCartTotal] = useState(0);
   

//     const addItemToCart = (productToAdd) => {
//        setCartItems(addCartItem(cartItems, productToAdd))
//     }
//     const removeItemFromCart = (productToRemove) => {
//         setCartItems(removeCartItem(cartItems, productToRemove))
//      }
    
//      const removeOneItemFromCart = (cartItemToRemove) => {
//         setCartItems(removeOneCartItem(cartItems, cartItemToRemove))
//      }

//     useEffect(()=> {
//         const sumQuantity = cartItems.reduce((accumulator, cartItem) => accumulator+cartItem.quantity, 0 )
//         setItemsCounter(sumQuantity)
//     }, [cartItems]);

//     useEffect(()=> {
//         const cartTotalValue = cartItems.reduce((total, cartItem) => total+cartItem.quantity*cartItem.price, 0 )
//         setCartTotal(cartTotalValue)
//     }, [cartItems]);

//     const value = { toggleDropdown, setToggleDropdown, addItemToCart, removeItemFromCart, removeOneItemFromCart, cartItems, itemsCounter, cartTotal};

//     return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
// }
import CART_ACTION_TYPES from './cart.types';

import { createAction } from '../../utils/reducer/reducer.utils';


const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    //If found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    }
    //return new array with modified cardItems / new card item
    return [...cartItems, {...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
    //find if cartItems contains productToAdd
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
};

const removeOneCartItem = (cartItems, cartItemToRemove) => {
    //find if cartItems contains cartItemToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
    //check if quantity is equal to 1, if it is remove that item from the cart 
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
};







export const setToggleDropdown = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_TOGGLE_DROPDOWN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = (addCartItem(cartItems, productToAdd));
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = (removeCartItem(cartItems, productToRemove));
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeOneItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = (removeOneCartItem(cartItems, cartItemToRemove));
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
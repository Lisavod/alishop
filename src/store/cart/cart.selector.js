import { createSelector } from 'reselect'; //ctreates a memoised selector
//if the input doesn't change it returen the same output


//extract off the slice of state
const selectCartReducer = state => state.cart;

//getting the actual cart state from that slice
export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectToggleDropdown = createSelector(
    [selectCartReducer],
    (cart) => cart.toggleDropdown
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
);
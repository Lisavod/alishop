import CART_ACTION_TYPES from './cart.types';



export const CART_INITIAL_STATE = {
    toggleDropdown: false,
    cartItems: [],
    // itemsCounter: 0,
    // cartTotal: 0,
}

//create a Reducer
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            };
        case CART_ACTION_TYPES.SET_TOGGLE_DROPDOWN:
            return {
                ...state,
                toggleDropdown: payload,
            }
        default:
            return state;
    }
}
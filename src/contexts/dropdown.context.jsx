import React, { createContext, useState, useEffect} from 'react';


const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id ===productToAdd.id);
    //If found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id===productToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity+1 } : cartItem
        );
    }
   
    //return new array with modified cardItems / new card item
    return [...cartItems, {...productToAdd, quantity: 1}];
   
};

const removeCartItem = (cartItems, productToRemove) => {
    //find if cartItems contains productToAdd
   return cartItems.filter((cartItem) => cartItem.id!==productToRemove.id) 
};

const removeOneCartItem = (cartItems, cartItemToRemove) => {
    //find if cartItems contains cartItemToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id ===cartItemToRemove.id);
    //check if quantity is equal to 1, if it is remove that item from the cart 
    if(existingCartItem.quantity ===1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    
    return cartItems.map((cartItem) => cartItem.id===cartItemToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity-1 } : cartItem
    ); 
};



//as the actual value you want to access
export const DropdownContext = createContext({
    toggleDropdown: false,
    setToggleDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    itemsCounter: 0,
    setCartItems: () => {},
    removeItemFromCart: () => {},
    removeOneItemFromCart: () => {},
    cartTotal: 0,
    
});

export const DropdownProvider = ({children}) => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCounter, setItemsCounter] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
   

    const addItemToCart = (productToAdd) => {
       setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
     }
    
     const removeOneItemFromCart = (cartItemToRemove) => {
        setCartItems(removeOneCartItem(cartItems, cartItemToRemove))
     }

    useEffect(()=> {
        const sumQuantity = cartItems.reduce((accumulator, cartItem) => accumulator+cartItem.quantity, 0 )
        setItemsCounter(sumQuantity)
    }, [cartItems]);

    useEffect(()=> {
        const cartTotalValue = cartItems.reduce((total, cartItem) => total+cartItem.quantity*cartItem.price, 0 )
        setCartTotal(cartTotalValue)
    }, [cartItems]);

    const value = { toggleDropdown, setToggleDropdown, addItemToCart, removeItemFromCart, removeOneItemFromCart, cartItems, itemsCounter, cartTotal};

    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}
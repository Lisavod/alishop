import { createContext, useState, useEffect} from 'react';


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



//as the actual value you want to access
export const DropdownContext = createContext({
    toggleDropdown: false,
    setToggleDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    itemsCounter: 0
    
});

export const DropdownProvider = ({children}) => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCounter, setItemsCounter] = useState(0);
   

    const addItemToCart = (productToAdd) => {
       setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(()=> {
        const sumQuantity = cartItems.reduce((accumulator, cartItem) => accumulator+cartItem.quantity, 0 )
        setItemsCounter(sumQuantity)
    }, [cartItems]);

    const value = { toggleDropdown, setToggleDropdown, addItemToCart, cartItems, itemsCounter};

    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}
import './checkout.styles.scss';
import React from 'react';
import { useSelector } from 'react-redux';
// import { DropdownContext } from '../../contexts/dropdown.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {
    selectCartItems,
    selectCartTotal,
  } from '../../store/cart/cart.selector';



const Checkout = () => {
    // const { cartItems, cartTotal } = useContext(DropdownContext);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    
    // const decriment = (item) => {
    //     const newItemList = [...cartItems, {...item, quantity:10}]
    //     setCartItems(newItemList);      
    // }

    // const increment = (item) => {
    //     const newItemList = [...cartItems, {...item, quantity:10}]
    //     setCartItems(newItemList)     
    // }

    return (

        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            
            {cartItems.map(cartItem => {
           
                 return (  
                     <CheckoutItem key={cartItem.id} cartItem={cartItem}/> 
                    // <div key={cartItem.id}>
                    //     <div><img className='checkout-image' src={cartItem.imageUrl} alt={`${cartItem.name}`}/></div>
                    //     <div>{cartItem.name}</div>
                    //     <span onClick={()=> removeOneItemFromCart(cartItem)}>decriment</span>
                    //     <div>{cartItem.quantity}</div>
                    //     <span onClick={()=> addItemToCart(cartItem)}>increment</span>
                    //     <div>{cartItem.price}</div>
                    //     <Button  onClick={()=> removeItemFromCart(cartItem)}><div>x</div></Button>
                    // </div>
                 );
                }
            
            )}
             <span className='total'>Total: ${cartTotal}</span>   
        </div>

    ); 
}  

export default Checkout;
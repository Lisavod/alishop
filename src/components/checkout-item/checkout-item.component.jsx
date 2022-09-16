import './checkout-item.styles.scss';
import { useSelector, useDispatch} from 'react-redux';
import React from 'react';
// import { DropdownContext } from '../../contexts/dropdown.context';
import {
    removeItemFromCart,
    removeOneItemFromCart,
    addItemToCart,
  } from '../../store/cart/cart.action';
  import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({cartItem}) => {
    // const { addItemToCart, removeItemFromCart, removeOneItemFromCart } = useContext(DropdownContext);
    const {name, imageUrl, price, quantity} = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const removeOneItemHandler = () => dispatch(removeOneItemFromCart(cartItems, cartItem));
    const addOneItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeOneItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addOneItemHandler}>
                    &#10095;    
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={removeItemHandler} >&#10005;</div>
        </div>
    )

}

export default CheckoutItem;


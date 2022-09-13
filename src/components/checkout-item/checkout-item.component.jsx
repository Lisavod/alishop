import './checkout-item.styles.scss';
import React, { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';


const CheckoutItem = ({cartItem}) => {
    const { addItemToCart, removeItemFromCart, removeOneItemFromCart } = useContext(DropdownContext);
    const {name, imageUrl, price, quantity} = cartItem;

    const removeItemHandler = () => removeItemFromCart(cartItem);
    const removeOneItemHandler = () => removeOneItemFromCart(cartItem);
    const addOneItemHandler = () => addItemToCart(cartItem);

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


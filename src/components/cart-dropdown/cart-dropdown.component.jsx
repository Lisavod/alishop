import React from 'react';
// import { DropdownContext } from '../../contexts/dropdown.context';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';




const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    // const {cartItems} = useContext(DropdownContext)
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    
    return (
       
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                { cartItems.length ? (cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>
                ))) : (<span>Your cart is empty</span>)
               }
           
            
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
            
        </div>
        
       
    )
}

export default CartDropdown;
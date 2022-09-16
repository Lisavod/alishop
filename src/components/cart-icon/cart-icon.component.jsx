// import { render } from '@testing-library/react'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectToggleDropdown } from '../../store/cart/cart.selector';
import { setToggleDropdown } from '../../store/cart/cart.action';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
// import { DropdownContext } from '../../contexts/dropdown.context';

const CartIcon = () => {

    const dispatch = useDispatch();
    // const { toggleDropdown, setToggleDropdown, itemsCounter} = useContext(DropdownContext);
    const itemsCounter = useSelector(selectCartCount);
    const toggleDropdown = useSelector(selectToggleDropdown);


    const handleDropdownToggler = () =>{
        dispatch(setToggleDropdown(!toggleDropdown));
      }

    return (
        <div className='cart-icon-container' onClick={handleDropdownToggler}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemsCounter}</span>

        </div>
    )
}

export default CartIcon;
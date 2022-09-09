// import { render } from '@testing-library/react'
import {useContext} from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { DropdownContext } from '../../contexts/dropdown.context';

const CartIcon = () => {
    const { toggleDropdown, setToggleDropdown, itemsCounter} = useContext(DropdownContext);

    const handleDropdownToggler = () =>{
        setToggleDropdown(!toggleDropdown);
      }

    return (
        <div className='cart-icon-container' onClick={handleDropdownToggler}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemsCounter}</span>

        </div>
    )
}

export default CartIcon;
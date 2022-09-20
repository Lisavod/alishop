import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {DropdownContext} from '../../contexts/dropdown.context';
import { addItemToCart } from '../../store/cart/cart.action'
import './product-card.styles.scss';
import Button from '../button/button.component';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    // const {addItemToCart} = useContext(DropdownContext);


    const addProductToCart = () => dispatch(addItemToCart(cartItems,product));
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>

            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
    
}

export default ProductCard;

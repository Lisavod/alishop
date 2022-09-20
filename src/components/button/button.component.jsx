import './button.styles.scss';
import React from 'react';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
};
const Button = ({children, buttonType, isLoading, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps} disabled={isLoading}> 
            {isLoading ? (<div className='spinner-container'></div>) : children} 
        </button>
    )
}

export default Button;
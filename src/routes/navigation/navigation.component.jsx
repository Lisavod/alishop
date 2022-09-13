import React, { Fragment, useContext } from 'react'; //React component, used if you don't want to render some tag
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as AlishopLogo } from '../../assets/Playful-Stick-Figure-Kids.svg';
import { UserContext } from '../../contexts/user.contex';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { DropdownContext } from '../../contexts/dropdown.context';

import './navigation.styles.scss';

const Navigation = () => {
  //user the actual value from UserContext
  const { currentUser } = useContext(UserContext);
  const { toggleDropdown} = useContext(DropdownContext);
  
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   // setCurrentUser(null);
  // }
  
 
  return (
      <Fragment>
        <div className='navigation'>
          <Link className="logo-container" to='/'>
            <AlishopLogo className='logo'  />
          </Link>
          
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>SHOP</Link>
            {
              currentUser ? 
                (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                 : (<Link className='nav-link' to='/auth'>SIGN IN</Link>)
            }
            <CartIcon/>
          </div>
          {toggleDropdown && <CartDropdown/>}
          
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation;

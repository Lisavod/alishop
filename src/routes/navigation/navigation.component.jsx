import { Fragment, useContext } from 'react'; //React component, used if you don't want to render some tag
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as AlishopLogo} from '../../assets/Playful-Stick-Figure-Kids.svg';
import { UserContext } from '../../contexts/user.contex';
import { signOutUser } from '../../utils/firebase/firebase.utils'
import './navigation.styles.scss';

const Navigation = () => {
  //user the actual value from UserContext
  const { currentUser} = useContext(UserContext);
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
            
          </div>
          
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation;

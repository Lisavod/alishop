import { Fragment } from 'react'; //React component, used if you don't want to render some tag
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as AlishopLogo} from '../../assets/Playful-Stick-Figure-Kids.svg'
import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
          <Link className="logo-container" to='/'>
            <AlishopLogo className='logo'  />
          </Link>
          
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>SHOP</Link>
            <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
          </div>
          
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation;

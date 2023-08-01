import PropTypes from 'prop-types';
import close from '../../assets/close.png';
import { Link } from 'react-router-dom';
import styles from './Splash.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/user/userSlice';

const Header = ({ isMenuActive, setIsMenuActive }) => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const isLogin = useSelector((state) => state.user.isLogin);

  const handleLogout = () => {
    dispatch(logout());
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <header className={isMenuActive ? 'active' : ''}>
      <Link to="/" className="logo">Laptops</Link>
      <nav>
        <ul>
          <Link to='/' className="single-nav"><li>Home</li></Link>
          {!isLogin && (
            <>
              <Link to="/login" className={styles.login}>
                login
              </Link>
              <Link to="/signup" className={styles.signup}>
                signup
              </Link>
            </>
          )}
          {isAdmin && (
            <>
              <Link to='/admin' className="single-nav"><li>Admin</li></Link>
            </>
          )}
          { isLogin && (
            <>
              <Link to='/my-reservation' className="single-nav"><li>My Reservation</li></Link>
              <button onClick={handleLogout} className={styles.logout}>
                Logout
              </button>
            </>
          )}
        </ul>
      </nav>
      <img src={close} className='close' onClick={closeMenu} />
    </header>
  );
};

Header.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
  setIsMenuActive: PropTypes.func.isRequired,
};

export default Header;

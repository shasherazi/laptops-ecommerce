import PropTypes from 'prop-types';
import close from '../../assets/close.png';
import { Link } from 'react-router-dom';
import styles from './Splash.module.css';

const Header = ({ isMenuActive, setIsMenuActive }) => {
  const closeMenu = () => {
    console.log('Close menu clicked');
    setIsMenuActive(false);
  };

  return (
    <header className={isMenuActive ? 'active' : ''}>
      <a href="/" className="logo">Laptops</a>
      <nav>
        <ul>
          <Link to='/' className="single-nav"><li>Home</li></Link>
          <Link to='/my-reservation' className="single-nav"><li>Reservation</li></Link>
          <Link to='/admin' className="single-nav"><li>Admin</li></Link>
          <Link to="/login" className={styles.login}>
            login
          </Link>
          <Link to="/signup" className={styles.signup}>
            signup
          </Link>
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

import PropTypes from 'prop-types';
import close from '../../assets/close.png';
import { Link } from 'react-router-dom';

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
          <Link to='/Homepage' className="single-nav">Home</Link>
          <Link to='#' className="single-nav">Reservation</Link>
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

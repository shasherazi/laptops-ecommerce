import PropTypes from 'prop-types';
import close from '../../assets/close.png';

const Header = ({ isMenuActive, setIsMenuActive }) => {
  const closeMenu = () => {
    console.log('Close menu clicked');
    setIsMenuActive(false);
  };

  return (
    <header className={isMenuActive ? 'active' : ''}>
      <a href="#!" className="logo">Vespa</a>
      <nav>
        <ul>
          <li><a href="#" className="single-nav">Home</a></li>
          <li><a href="#" className="single-nav">Lifestyle</a></li>
          <li><a href="#" className="single-nav">Shop</a></li>
          <li><a href="#" className="single-nav">About</a></li>
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

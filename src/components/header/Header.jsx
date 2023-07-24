import close from '../../assets/close.png'

const Header = () => (
    <header>
      <a href="#!" className="logo">Vespa</a>
      <nav>
        <ul>
          <li><a href="#" className="single-nav">Home</a></li>
          <li><a href="#" className="single-nav">Lifestyle</a></li>
          <li><a href="#" className="single-nav">Shop</a></li>
          <li><a href="#" className="single-nav">About</a></li>
        </ul>
      </nav>
      <img src={close} className='close' />
    </header>
  );

  export default Header;
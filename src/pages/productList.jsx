/* eslint-disable no-unused-vars */
import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/products/productSlice';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productList.css';
import React from 'react';

const HomePage = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    products, isLoading, isError,
  } = useSelector((store) => store.products);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const [productsFetched, setProductsFetched] = useState(false);
  useEffect(() => {
    if (!productsFetched) {
      dispatch(fetchProducts());
      setProductsFetched(true);
    }
    function handleResize() {
      setSlidesToShow(getSlidesToShow());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch, productsFetched]);

  if (isLoading) {
    return ( 
      <h3>Loading...</h3>
    );
  } if (isError) {
    return (
      <h3>Something went wrong...</h3>
    );
  }
  
  function getSlidesToShow() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1400 && windowWidth > 650) {
      return 2;
    } else if (windowWidth <= 650) {
      return 1;
    }
    return 3;
  }

  const sliderSettings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  return (
    <section className='list'>
      <h1>Product List</h1>
      {products.length === 0 && <h3>No products available</h3>}
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div className='pro-list' key={product.id} role='product' onClick={() => navigate(`productdetail/${product.id}`)}>
            <div className='pro-list-reserve'>
              <div className='pro-list-img'>
                <img src={product.picture} alt={product.name} style={{ width: '250px', margin: '0 auto' }} />
              </div>
              <div className='pro-list-info'>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
              </div>
            </div>
            <div className='pro-list-cricle' />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HomePage;

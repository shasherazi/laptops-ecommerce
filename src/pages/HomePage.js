import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/products/productSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/path/to/demo.json');
        const data = await response.json();
        dispatch(setProducts(data)); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px' }} />
            <span>{product.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

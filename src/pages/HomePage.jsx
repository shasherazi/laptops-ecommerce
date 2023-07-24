import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/products/productSlice';
import demoData from '../demo/demo.json'; 

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('demo/demo.json');
  //       const data = await response.json();
  //       dispatch(setProducts(data)); 
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);

  useEffect(() => {
    dispatch(setProducts(demoData));
  }, [dispatch]);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.picture} alt={product.name} style={{ width: '100px', height: '100px' }} />
            <span>{product.name}</span>
            <p>Price: ${product.price}</p>
            <p>CPU: {product.cpu}</p>
            <p>Memory: {product.memory}</p>
            <p>Storage: {product.storage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

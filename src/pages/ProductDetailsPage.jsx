import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProductDetails } from '../redux/products/selectedProductSlice';
import { useParams } from 'react-router-dom';
import './productDetailsPage.css';

export default function ProductDetailsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const {
    productDetails, isLoading, isError,
  } = useSelector((store) => store.productDetails);
  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch, productId]);
  if (isLoading) {
    return (
      <h3>Loading...</h3>
    );
  } if (isError) {
    return (
      <h3>Something went wrong...</h3>
    );
  }
  return (
    <section className='details'>
      {productDetails.map((product) => (
        <div key={product.id} role='product' className='pro-details'>
          <div className='pro-details-img'>
          <img src={product.picture} alt={product.name} />  
          </div>
          <div className='pro-details-content'>
            <div className='pro-details-info'>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Cpu: {product.cpu}</p>
              <p>memory: {product.memory}GB</p>
              <p>storage: {product.storage}GB</p>
            </div>
            <div className='pro-details-reserve'>
              <button type='button' onClick={() => navigate(`reservation/${productId}`)}>Reserve</button>
            </div>
          </div>
          <div className='home-back-button'>
            <button type='button' onClick={() => window.history.back()}>Back</button>
          </div>
        </div>
      ))}
    </section>
  );
}

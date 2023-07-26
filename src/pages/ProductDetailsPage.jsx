import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductDetails } from '../redux/products/selectedProductSlice';
import { useParams } from 'react-router-dom';
import './productDetailsPage.css';

export default function ProductDetailsPage() {
  const dispatch = useDispatch();
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
  // return (
  //   <section className='details'>
  //     {productDetails.map((product) => (
  //       <div key={product.id} role='product' className='pro-details'>
  //         <div className='pro-details-img'>
  //           <img src={product.picture} alt={product.name} style={{ width: '100px', height: '100px' }} />  
  //         </div>
  //         <div className='pro-details-info'>
  //           <h3>{product.name}</h3>
  //           <p>Price: ${product.price}</p>
  //           <p>Cpu: {product.cpu}</p>
  //           <p>memory: {product.memory}</p>
  //           <p>storage: {product.storage}</p>
  //         </div>
  //         <div className='pro-details-reserve'>
  //           <button type='button'>Reserve</button>
  //         </div>
  //       </div>
  //     ))}
  //   </section>
  // );

  let id = parseInt(productId);

  if (!productDetails || productDetails.length === 0) {
    return <h3>Product not found</h3>;
  }

  const product = productDetails[id - 1];

  return (
    <section className='details'>
      <div key={product.id} role='product' className='pro-details'>
        <div className='pro-details-img'>
          <img src={product.picture} alt={product.name} />  
        </div>
        <div className='pro-details-content'>
          <div className='pro-details-info'>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Cpu: {product.cpu}</p>
            <p>memory: {product.memory}</p>
            <p>storage: {product.storage}</p>
          </div>
          <div className='pro-details-reserve'>
            <button type='button'>Reserve</button>
          </div>
        </div>
        <div className='home-back-button'>
          <button type='button' onClick={() => window.history.back()}>Back</button>
        </div>
      </div>
    </section>
  );
}

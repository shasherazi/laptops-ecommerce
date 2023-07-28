import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addProduct, deleteProduct } from '../redux/products/productSlice';

const AdminProductManagement = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const { products, isLoading, isError } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = () => {
    const newProduct = {
      name: productName,
      price: productPrice,
    };

    dispatch(addProduct(newProduct));
    setProductName('');
    setProductPrice('');
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };


  if (isLoading) {
    return <h3>Loading...</h3>;
  } if (isError) {
    return <h3>Something went wrong...</h3>;
  }

  return (
    <div>
      <h1>Admin Product Management</h1>
      <div>
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id} >
              {product.name}
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminProductManagement;

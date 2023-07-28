import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addProduct, deleteProduct } from '../redux/products/productSlice';

const AdminProductManagement = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const { products, isLoading, isError } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = () => {
    // Create a new product object with the entered data
    const newProduct = {
      name: productName,
      price: productPrice,
      // Add other product details here if needed
    };

    // Dispatch the addProduct action to add the new product
    dispatch(addProduct(newProduct));

    // Clear the input fields after adding the product
    setProductName('');
    setProductPrice('');
  };

  const handleDeleteProduct = (productId) => {
    // Dispatch the deleteProduct action to remove the product with the given productId
    dispatch(deleteProduct(productId));
  };

  const handleSearch = () => {
    // Perform search based on the searchKeyword
    // For demonstration purposes, we'll just log the searchKeyword to the console
    console.log('Searching for:', searchKeyword);
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
        <h2>Search Product</h2>
        <input
          type="text"
          placeholder="Enter Keyword"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminProductManagement;

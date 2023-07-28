import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addProduct, deleteProduct } from '../redux/products/productSlice';
import './AdminPage.css';
import { Link } from 'react-router-dom';

const AdminProductManagement = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productPicture, setProductPicture] = useState('');
  const [productCPU, setProductCPU] = useState('');
  const [productMemory, setProductMemory] = useState('');
  const [productStorage, setProductStorage] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const { products, isLoading, isError } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [formErrors, setFormErrors] = useState({
    name: '',
    price: '',
    picture: '',
    cpu: '',
    memory: '',
    storage: '',
  });

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!productName.trim()) {
      isValid = false;
      errors.name = 'Product name is required';
    }
    if (!productPicture.trim()) {
      isValid = false;
      errors.picture = 'Product picture is required';
    }
    if (!productCPU.trim()) {
      isValid = false;
      errors.cpu = 'Product cpu is required';
    }
    if (!productMemory.trim()) {
      isValid = false;
      errors.memory = 'Product memory is required';
    }else if (isNaN(productMemory) || +productMemory <= 0) {
      isValid = false;
      errors.price = 'Product memory must be a positive number';
    }
    if (!productStorage.trim()) {
      isValid = false;
      errors.storage = 'Product productStorage is required';
    }else if (isNaN(productStorage) || +productStorage <= 0) {
      isValid = false;
      errors.price = 'Product Storage must be a positive number';
    }
    if (!productPrice.trim()) {
      isValid = false;
      errors.price = 'Product price is required';
    } else if (isNaN(productPrice) || +productPrice <= 0) {
      isValid = false;
      errors.price = 'Product price must be a positive number';
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleAddProduct = () => {
    const isValid = validateForm();

    if (isValid) {
      const newProduct = {
        name: productName,
        price: productPrice,
        picture: productPicture,
        cpu: productCPU,
        memory: productMemory,
        storage: productStorage,
      };

      dispatch(addProduct(newProduct));
      setProductName('');
      setProductPrice('');
      setProductPicture('');
      setProductCPU('');
      setProductMemory('');
      setProductStorage('');
      setFormErrors({
        name: '',
        price: '',
        picture: '',
        cpu: '',
        memory: '',
        storage: '',
      });
    }
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
    <section className='admin-page'>
      <h1>Admin Product Management</h1>
      <div className='admin-page-content'>
        <div className='admin-page-add'>
          <h2>Add Product</h2>
          <div className='from-fields'>
            <label>Product Name:</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>
          <div className='from-fields'>
            <label>Product Price:</label>
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            {formErrors.price && <span className="error">{formErrors.price}</span>}
          </div>
          <div className='from-fields'>
            <label>Product Picture URL:</label>
            <input
              type="text"
              value={productPicture}
              onChange={(e) => setProductPicture(e.target.value)}
            />
            {formErrors.picture && <span className="error">{formErrors.picture}</span>}
          </div>
          <div className='from-fields'>
            <label>Product CPU:</label>
            <input
              type="text"
              value={productCPU}
              onChange={(e) => setProductCPU(e.target.value)}
            />
            {formErrors.cpu && <span className="error">{formErrors.cpu}</span>}
          </div>
          <div className='from-fields'>
            <label>Product Memory:</label>
            <input
              type="number"
              value={productMemory}
              onChange={(e) => setProductMemory(e.target.value)}
            />
            {formErrors.memory && <span className="error">{formErrors.memory}</span>}
          </div>
          <div className='from-fields'>
            <label>Product Storage:</label>
            <input
              type="number"
              value={productStorage}
              onChange={(e) => setProductStorage(e.target.value)}
            />
            {formErrors.storage && <span className="error">{formErrors.storage}</span>}
          </div>
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
        <div className='admin-page-show'>
          <div className='admin-page-search'>
            <h2>Search Product</h2>
            <input
              type="text"
              placeholder="Enter Keyword"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
          <div className='admin-page-list'>
            <h2>Product List</h2>
            <ul>
              {products.filter((product) => {
                if (searchKeyword === '') {
                  return product;
                }
                if (product.name.toLowerCase().includes(searchKeyword.toLowerCase())) {
                  return product;
                }
                return null;
              }).map((product) => (
                <li key={product.id}>
                  <Link to={`/productdetail/${product.id}`}>{product.name}</Link>
                  <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminProductManagement;

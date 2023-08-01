/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// ProductDetailsPage.test.js
import { React } from 'react';
import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for testing
// import store from '../redux/store'; // Import your actual Redux store
import ProductDetailsPage from '../pages/ProductDetailsPage';

describe('ProductDetailsPage', () => {
  // Sample product data for testing
  const sampleProduct = {
    id: 1,
    name: 'Sample Laptop',
    price: 999,
    cpu: 'Intel i7',
    memory: 16,
    storage: 512,
    picture: 'sample.jpg',
  };

  test('renders product details correctly when user is logged in', () => {
    // Render the component with actual Redux store and React context
    render(<ProductDetailsPage />);

    // Verify that the product details are displayed correctly
    expect(screen.getByRole('product')).toBeInTheDocument();
    expect(screen.getByText(sampleProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`Price: $${sampleProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(`Cpu: ${sampleProduct.cpu}`)).toBeInTheDocument();
    expect(screen.getByText(`memory: ${sampleProduct.memory} GB RAM`)).toBeInTheDocument();
    expect(screen.getByText(`storage: ${sampleProduct.storage} GB SSD`)).toBeInTheDocument();

    // Verify that the "Reserve" button is present since the user is logged in
    expect(screen.getByText('Reserve')).toBeInTheDocument();
  });

  // test('renders "Please login to reserve" message when user is not logged in', () => {
  //   // Modify the Redux store state to simulate the user not being logged in
  //   const storeWithoutLogin = { ...store, getState: () => ({ productDetails: { productDetails: [sampleProduct] }, user: { isLogin: false } }) };

  //   // Render the component with the modified Redux store and React context
  //   render(
  //     <Provider store={storeWithoutLogin}>
  //       <MemoryRouter>
  //         <ProductDetailsPage />
  //       </MemoryRouter>
  //     </Provider>
  //   );

  //   // Verify that the "Please login to reserve" message is present since the user is not logged in
  //   expect(screen.getByText('Please login to reserve')).toBeInTheDocument();

  //   // Verify that the "Reserve" button is not present
  //   expect(screen.queryByText('Reserve')).not.toBeInTheDocument();
  // });
});

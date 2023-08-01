/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import mockStore from './mockStore';

describe('ProductDetailsPage', () => {
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
    const storeWithLogin = mockStore({
      productDetails: { productDetails: [sampleProduct] },
      user: { isLogin: true },
    });
    render(
      <Provider store={storeWithLogin}>
        <MemoryRouter>
          <ProductDetailsPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('product')).toBeInTheDocument();
    expect(screen.getByText(sampleProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`Price: $${sampleProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(`Cpu: ${sampleProduct.cpu}`)).toBeInTheDocument();
    expect(screen.getByText(`memory: ${sampleProduct.memory} GB RAM`)).toBeInTheDocument();
    expect(screen.getByText(`storage: ${sampleProduct.storage} GB SSD`)).toBeInTheDocument();

    expect(screen.getByText('Reserve')).toBeInTheDocument();
  });

  test('renders "Please login to reserve" message when user is not logged in', () => {
    const storeWithoutLogin = mockStore({
      productDetails: { productDetails: [sampleProduct] },
      user: { isLogin: false },
    });
    render(
      <Provider store={storeWithoutLogin}>
        <MemoryRouter>
          <ProductDetailsPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Please login to reserve')).toBeInTheDocument();
    expect(screen.queryByText('Reserve')).not.toBeInTheDocument();
  });
});

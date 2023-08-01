/*eslint-disable*/
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ProductList from '../pages/productList';

const mockStore = configureStore([thunk]);

describe('ProductList component', () => {
  test('should render "Loading..." when products are loading', async () => {
    const store = mockStore({
      products: {
        products: [],
        isLoading: true,
        isError: false,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('should render "Something went wrong..." when there is an error', async () => {
    const store = mockStore({
      products: {
        products: [],
        isLoading: false,
        isError: true,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Something went wrong.../i)).toBeInTheDocument();
  });

  test('should render product list items when products are available', async () => {
    const products = [
      { id: 1, name: 'Product 1', price: 10, picture: 'path/to/image1.jpg' },
      { id: 2, name: 'Product 2', price: 20, picture: 'path/to/image2.jpg' },
      // Add more product mock data as needed
    ];

    const store = mockStore({
      products: {
        products,
        isLoading: false,
        isError: false,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      products.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByText(`Price: $${product.price}`)).toBeInTheDocument();
      });
    });
  });
});

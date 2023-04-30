import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProductDetailCard } from '../ProductDetailCard';
import { cartCounterSlice } from '../../../../../store/slices/cartCounter/cartCounterSlice';
import { productsListSlice } from '../../../../../store/slices/products/productsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { defaultMock } from './mocks';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

const store = configureStore({
  reducer: {
    cartCounter: cartCounterSlice.reducer,
    productsList: productsListSlice.reducer,
  },
});

describe('<ProductDetailCard /> component', () => { 
    it('Renderer componen', ()=> {
        const {container} = render(
            <Provider store={store}>
                <ProductDetailCard  productSelected={defaultMock}/>
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });

    it('should execute the onClick event', () => {
      const buttonText = 'Agregar al carrito';
      render(
        <Provider store={store}>
            <ProductDetailCard  productSelected={defaultMock}/>
        </Provider>
    );
      fireEvent.click(screen.getByText(buttonText));
    });
 });
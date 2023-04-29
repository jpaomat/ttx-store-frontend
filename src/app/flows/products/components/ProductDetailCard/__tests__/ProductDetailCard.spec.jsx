/* eslint-disable no-unused-vars */
import Renderer from 'react-test-renderer/shallow';
import axios from 'axios';
import { Provider } from 'react-redux';
import { ProductDetailCard } from '../ProductDetailCard';

const renderer = new Renderer();

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
  create: jest.fn()
}));

describe('Product detail wrap component', () => { 
    it('Renderer componen', ()=> {
        // const component = renderer.render(
        //     <Provider>
        //         <ProductDetailCard />
        //     </Provider>
        // );
        // expect(component).toMatchSnapshot();
    });
 });
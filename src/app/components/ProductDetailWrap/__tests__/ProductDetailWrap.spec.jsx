import Renderer from 'react-test-renderer/shallow';
import { ProductDetailWrap } from '../ProductDetailWrap';

const renderer = new Renderer();

describe('Product detail wrap component', () => { 
    it('Renderer componen', ()=> {
        const component = renderer.render(<ProductDetailWrap />);
        expect(component).toMatchSnapshot();
    });
 });
import Renderer from 'react-test-renderer/shallow';
import { ProductDetailCard } from '../ProductDetailCard';

const renderer = new Renderer();

describe('Product detail wrap component', () => { 
    it('Renderer componen', ()=> {
        const component = renderer.render(<ProductDetailCard />);
        expect(component).toMatchSnapshot();
    });
 });
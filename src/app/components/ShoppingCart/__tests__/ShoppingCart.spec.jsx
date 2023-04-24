import Renderer from 'react-test-renderer/shallow';
import { ShoppingCart } from '../ShoppingCart';

const renderer = new Renderer();

describe('Techtronix component', () => {
	it('should render component', () => {
		const component = renderer.render(<ShoppingCart items={5} />);
		expect(component).toMatchSnapshot();
	});
});
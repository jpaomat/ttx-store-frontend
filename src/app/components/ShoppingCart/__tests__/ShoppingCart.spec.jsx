import { ShoppingCart } from '../ShoppingCart';
const Renderer = require('react-test-renderer/shallow');

const renderer = new Renderer();

describe('Techtronix component', () => {
	it('should render component', () => {
		const component = renderer.render(<ShoppingCart items={5} />);
		expect(component).toMatchSnapshot();
	});
});
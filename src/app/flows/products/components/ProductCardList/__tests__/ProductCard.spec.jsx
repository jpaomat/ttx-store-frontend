import Renderer from 'react-test-renderer/shallow';
import { ProductCardList } from '../ProductCardList';

const renderer = new Renderer();

describe('Techtronix component', () => {
	it('should render component', () => {
		const component = renderer.render(<ProductCardList />);
		expect(component).toMatchSnapshot();
	});
});
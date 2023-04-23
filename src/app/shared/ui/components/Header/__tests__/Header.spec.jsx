import { Header } from '../Header';
const Renderer = require('react-test-renderer/shallow');

const renderer = new Renderer();

describe('Techtronix component', () => {
	it('should render component', () => {
		const component = renderer.render(<Header />);
		expect(component).toMatchSnapshot();
	});
});
const Renderer = require('react-test-renderer/shallow');
const { Navbar } = require('../Navbar');

const renderer = new Renderer();

describe('Techtronix component', () => {
	it('should render component', () => {
		const component = renderer.render(<Navbar />);
		expect(component).toMatchSnapshot();
	});
});
const Renderer = require('react-test-renderer/shallow');
const { Card } = require('../Card');

const renderer = new Renderer();

describe('Techtronix component', () => {
	it('should render component', () => {
		const component = renderer.render(<Card />);
		expect(component).toMatchSnapshot();
	});
});
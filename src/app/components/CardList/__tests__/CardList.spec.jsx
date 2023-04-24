const Renderer = require('react-test-renderer/shallow');
const { CardList } = require('../CardList');

const renderer = new Renderer();

describe('Techtronix component', () => {
	it('should render component', () => {
		const component = renderer.render(<CardList />);
		expect(component).toMatchSnapshot();
	});
});
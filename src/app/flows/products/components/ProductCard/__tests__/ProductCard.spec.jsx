import Renderer from 'react-test-renderer/shallow';
const { ProductCard } = require('../ProductCard');
const { defaultMock } = require('./mocks');

const renderer = new Renderer();

describe('Techtronix component', () => {
	it('should render component', () => {
		const component = renderer.render(<ProductCard {...defaultMock}/>);
		expect(component).toMatchSnapshot();
	});
});
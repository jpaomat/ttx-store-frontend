import Renderer from 'react-test-renderer/shallow';
const { Card } = require('../Card');
const { defaultMock } = require('./mocks');

const renderer = new Renderer();

describe('Techtronix component', () => {
	it('should render component', () => {
		const component = renderer.render(<Card {...defaultMock}/>);
		expect(component).toMatchSnapshot();
	});
});
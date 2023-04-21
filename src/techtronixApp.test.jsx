import { TechtronixApp } from './TechtronixApp';
const Renderer = require('react-test-renderer/shallow');

const renderer = new Renderer();

describe('Techtronix component', () => {
	it('should render component', () => {
		const component = renderer.render(<TechtronixApp />);
		expect(component).toMatchSnapshot();
	});
});

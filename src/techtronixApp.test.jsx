import Renderer from 'react-test-renderer/shallow';
import { TechtronixApp } from './TechtronixApp';

const renderer = new Renderer();

describe('Techtronix App component', () => {
	it('should render component', () => {
		const component = renderer.render(<TechtronixApp />);
		expect(component).toMatchSnapshot();
	});
});

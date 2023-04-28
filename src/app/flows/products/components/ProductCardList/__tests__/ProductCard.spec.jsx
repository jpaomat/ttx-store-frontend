import Renderer from 'react-test-renderer/shallow';
import { ProductCardList } from '../ProductCardList';
import { BrowserRouter } from 'react-router-dom';

const renderer = new Renderer();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useSearchParams: () => [new URLSearchParams({ filter: 'alc' })],
	// useNavigate: () => mockedUsedNavigate
}));

describe('Techtronix component', () => {
	it('should render component', () => {
		const component = renderer.render(
			<BrowserRouter>
				<ProductCardList products={[]} />
			</BrowserRouter>
		);
		expect(component).toMatchSnapshot();
	});
});

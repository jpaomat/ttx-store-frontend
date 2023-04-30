import { ProductCardList } from '../ProductCardList';
import { MemoryRouter } from 'react-router-dom';
import { defaultMock } from './mocks';
import { render } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	// useSearchParams: () => [new URLSearchParams({ filter: 'alc' })],
	useLocation: () => jest.fn()
}));

describe('Techtronix component', () => {
	it('should render component', () => {
		const {container} = render(
			<MemoryRouter>
				<ProductCardList products={defaultMock} />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});

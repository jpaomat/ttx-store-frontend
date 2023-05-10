import { render } from '@testing-library/react';
import { Breadcrumbs } from '../Breadcrumbs';
import { MemoryRouter } from 'react-router-dom';
import { defaultMock } from './mocks';

describe('<Breadcrumbs /> component', () => {
	test('should render component', () => {
		const { container } = render(
			<MemoryRouter>
				<Breadcrumbs {...defaultMock} />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});

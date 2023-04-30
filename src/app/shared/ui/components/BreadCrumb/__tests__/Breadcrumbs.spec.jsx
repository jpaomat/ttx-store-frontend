import { render } from '@testing-library/react';
import { Breadcrumbs } from '../Breadcrumbs';
import { MemoryRouter } from 'react-router-dom';
import { defaultMock } from './mocks';

// jest.mock('use-react-router-breadcrumbs', () => ({
//     // ...jest.requireActual('use-react-router-breadcrumbs'),
//     // useBreadcrumbs : () => (
//     //     [
//     //         {
//     //             breadcrumb: {
//     //                 children : {
//     //                     children: 'Productos'
//     //                 }
//     //             },
//     //             key: '/product',
//     //             match: {
//     //                 pathname: 'Producto'
//     //             }
//     //         }
//     //     ]
//     // ),
// }));

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

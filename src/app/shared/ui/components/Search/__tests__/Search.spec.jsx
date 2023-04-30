import { fireEvent, render } from '@testing-library/react';
import { Search } from '../Search';
import { defaultMock } from './mocks';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => jest.fn(),
	useLocation: () => ({ search: { filter: 'alc-test' } }),
}));

describe('<Search> component', () => {
	it('should render component', () => {
		const { container } = render(<Search {...defaultMock} />);
        expect(container.querySelector('input').value).toBe('alc-test');
		expect(container).toMatchSnapshot();
	});

	it('should cleared the input when the clear button is clicked', () => {
		const {container} = render(<Search {...defaultMock} />);
        fireEvent.click(container.querySelector('.filter-container__btn'));
        expect(container.querySelector('input').value).toBe('');
	});
});

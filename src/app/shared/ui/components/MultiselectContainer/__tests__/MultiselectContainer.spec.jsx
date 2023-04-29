import { render, screen } from '@testing-library/react';
import { MultiselectContainer } from '../MultiselectContainer';
import { defaultMock } from './mocks';

describe('<MultiselectContainer /> component', () => {
	test('should render component', () => {
		const { container } = render(<MultiselectContainer {...defaultMock}/>);
		expect(container).toMatchSnapshot();
	});

    it('should render component and validate label', () => {
		render(<MultiselectContainer {...defaultMock}/>);
		expect(screen.getByText('Multiselect test')).toBeTruthy();
	});

    it('should render component and show the number of options that are sent in the props', () => {
		const {container} = render(<MultiselectContainer {...defaultMock}/>);
		expect(container.querySelectorAll('.option').length).toEqual(defaultMock.options.length);
	});
});

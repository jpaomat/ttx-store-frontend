import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonApp } from '../ButtonApp';
import { defaultMock } from './mocks';

describe('<ButtonApp /> component', () => {
	const buttonText = 'Continuar';

	beforeEach(()=> jest.clearAllMocks);
	
	test('should render component', () => {
		const { container } = render(
			<ButtonApp {...defaultMock}>
				<span>{buttonText}</span>
			</ButtonApp>
		);
		expect(container).toMatchSnapshot();
	});

	test('should show the text Continuar', () => {
		render(
			<ButtonApp {...defaultMock}>
				<span>{buttonText}</span>
			</ButtonApp>
		);
		fireEvent.click(screen.getByText(buttonText));
		expect(screen.getByText(buttonText)).toBeTruthy();
	});

	test('should execute the onClick event that is sent in the props', () => {
		let testEvent = '';
		const onClickTest = () => {
			testEvent = 'Hi Button';
		};
		render(
			<ButtonApp {...defaultMock} onClick={onClickTest}>
				<span>{buttonText}</span>
			</ButtonApp>
		);
		fireEvent.click(screen.getByText(buttonText));
        expect(testEvent).toEqual('Hi Button');
	});
});

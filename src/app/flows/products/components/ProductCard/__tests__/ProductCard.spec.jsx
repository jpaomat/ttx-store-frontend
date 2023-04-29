import { render, screen } from '@testing-library/react';
const { ProductCard } = require('../ProductCard');
const { defaultMock } = require('./mocks');

describe('<Techtronix /> component', () => {
	it('should render component', () => {
		const {container} = render(<ProductCard {...defaultMock}/>);
		expect(container).toMatchSnapshot();
	});

	it('should find the product brand text in the component', () => {
		render(<ProductCard {...defaultMock}/>);
		expect(screen.getByText(defaultMock.brand)).toBeTruthy();
	});

	it('should show the product brand text', () => {
		const {container} = render(<ProductCard {...defaultMock}/>);
		const brandElement = container.querySelector('.card__content--brand');
		expect(brandElement.innerHTML).toContain(defaultMock.brand);
	});

	it('should show the product model text', () => {
		const {container} = render(<ProductCard {...defaultMock}/>);
		const brandElement = container.querySelector('.card__content--model');
		expect(brandElement.innerHTML).toContain(defaultMock.model);
	});

	it('should show the text No disponible when the price is no send', () => {
		defaultMock.price = '';
		render(<ProductCard {...defaultMock}/>);
		expect(screen.getAllByText('No disponible').length).toBe(2);
	});
});

import { render, screen } from '@testing-library/react';
import { ShoppingCart } from '../ShoppingCart';

describe('<ShoppingCart> component', () => {
	it('should render component', () => {
		const {container} = render(<ShoppingCart items={5} />);
		expect(container).toMatchSnapshot();
	});

	it('should render component and validate text', () => {
		render(<ShoppingCart items={10} />);
		expect(screen.getByText(10)).toBeTruthy();
	});
});
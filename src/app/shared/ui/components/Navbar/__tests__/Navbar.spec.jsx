const { render, screen } = require('@testing-library/react');
const { Navbar } = require('../Navbar');
const { MemoryRouter } = require('react-router-dom');

describe('<Navbar> component', () => {
	it('should render component', () => {
		const { container } = render(
			<MemoryRouter>
				<Navbar itemsCart={8} />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});

	it('should render component and validate text', () => {
		render(
			<MemoryRouter>
				<Navbar itemsCart={8} />
			</MemoryRouter>
		);
		expect(screen.getByText(8)).toBeTruthy();
	});
});

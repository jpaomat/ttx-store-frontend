import { Link } from 'react-router-dom';
import { LogoTtx } from '../../icons/LogoTtx';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import './Navbar.scss';

export const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link className='navbar-brand' to='/'>
				<div className='navbar-brand__logo'>
					<LogoTtx />
				</div>
			</Link>
			<div className='navbar-collapse'>
				<ul className='navbar-nav-actions'>
					<li className='navbar-nav-actions__cart'>
						<div className='navbar-nav-actions__cart-content'>
							<a className='navbar-nav-actions__shopingCart'>
								<ShoppingCart items={20} />
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

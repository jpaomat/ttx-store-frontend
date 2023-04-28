import PropTypes from 'prop-types';
import { BsCart4 } from 'react-icons/bs';
import './ShoppingCart.scss';

export const ShoppingCart = ({ items }) => {

	return (
		<>
			<BsCart4 size={30} color='rgb(47, 79, 79)' />
			<span className='shopping-cart__counter'>{items}</span>
		</>
	);
};

ShoppingCart.defaultProps = {};

ShoppingCart.propTypes = {
	items: PropTypes.number.isRequired,
};

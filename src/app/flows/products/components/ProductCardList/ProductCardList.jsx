import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductCardList.scss';

export const ProductCardList = ({ products }) => {
	const location = useLocation();

	return (
		<div className='card-list'>
			{products &&
				products.map((productSelected, i) => (
					<div key={`card-list-${i}`}>
						<Link to={`details/${productSelected.id}${location.search}`}>
							<ProductCard {...productSelected} />
						</Link>
					</div>
				))}
		</div>
	);
};

ProductCardList.defaultProps = {
	products: [{}],
};

ProductCardList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({})),
};

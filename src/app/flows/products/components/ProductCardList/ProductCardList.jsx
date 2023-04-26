// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductCardList.scss';

export const ProductCardList = ({products}) => {
	// const [products, setData] = useState(productsList);

	// useEffect(() => {
	// 	fetch('https://itx-frontend-test.onrender.com/api/product')
	// 		.then(response => response.json())
	// 		.then(json => setData(json))
	// 		.catch(error => console.error(error));
	// }, []);

	return (
		<div className='card-list'>
			{products &&
				products.map((productSelected, i) => (
					<div key={`card-list-${i}`}>
						<Link to={`/details/${productSelected.id}`}>
							<ProductCard {...productSelected} />
						</Link>
					</div>
				))}
		</div>
	);
};

ProductCardList.defaultProps = {
	products : []
};

ProductCardList.propTypes = {
	products: PropTypes.arrayOf({})
};
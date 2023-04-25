import { useEffect, useState } from 'react';
// import { getProducts } from '../../services/getProducts.service';
import { Link } from 'react-router-dom';
import { Card } from '../Card/Card';
import './CardList.scss';

export const CardList = () => {
	const [products, setData] = useState(null);

	useEffect(() => {
		fetch('https://itx-frontend-test.onrender.com/api/product')
			.then(response => response.json())
			.then(json => setData(json))
			.catch(error => console.error(error));
	}, []);

	return (
		<div className='card-container'>
			{products &&
				products.map((productSelected, i) => (
					<div key={`card-list-${i}`}>
						<Link to={`/product-details/${productSelected.id}`}>
							<Card {...productSelected} />
						</Link>
					</div>
				))}
		</div>
	);
};

import { useEffect, useState } from 'react';
// import { getProducts } from '../../services/getProducts.service';
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
			{products && products.map((product, i) => (
				<Card key={product.id} {...product} />
			))}
		</div>
	);
};

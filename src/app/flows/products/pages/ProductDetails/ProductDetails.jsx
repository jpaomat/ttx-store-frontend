import {
	Link,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';
import { ProductDetailCard } from '../../components';
import './ProductDetails.scss';
import { initializedProductSelected } from '../../const/detailsData.const';
import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../../../shared/ui/components/BreadCrumb/Breadcrumbs';

export const ProductDetails = () => {
	const { productId } = useParams();
	const navigate = useNavigate();
	const queryString = new URLSearchParams(useLocation().search);
    const filter = queryString.get('filter');
	const [productSelected, setProductSelected] = useState({
		...initializedProductSelected,
	});

	const routes = [
		{
			path: '/products',
			breadcrumb: 'Productos',
		},
		{
			path: '/products/details/:productId',
			breadcrumb: `${productSelected.model}`,
		},
	];

	useEffect(() => {
		fetch(`https://itx-frontend-test.onrender.com/api/product/${productId}`)
			.then(response => response.json())
			.then(json => setProductSelected({ ...json, ...{ productSelected } }))
			.catch(error => console.error(error));
	}, []);

	useEffect(() => {
		navigate(`?filter=${filter}&model=${productSelected.model}`);
	}, [productSelected]);

	return (
		<div className='section-container'>
			<div className='navigate__navbar'>
				<Link className='link__back' to={`/products${location.search}`}>
					<span>Volver</span>
				</Link>
				<div className='breadcrumb'>
					<Breadcrumbs routes={routes}/>
				</div>
			</div>
			<ProductDetailCard productSelected={productSelected} />
		</div>
	);
};

ProductDetails.defaultProps = {};

ProductDetails.propTypes = {};

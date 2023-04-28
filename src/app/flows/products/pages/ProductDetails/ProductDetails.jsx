import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProductDetailCard } from '../../components';
import { Breadcrumbs } from '../../../../shared/ui/components/BreadCrumb/Breadcrumbs';
import { initializedProductSelected } from '../../const/detailsData.const';
import { useGetProductsByIdQuery } from '../../../../store/apis';
import { useEffect } from 'react';
import './ProductDetails.scss';

export const ProductDetails = () => {
	const { productId } = useParams();
	const navigate = useNavigate();
	const queryString = new URLSearchParams(useLocation().search);
	const filter = queryString.get('filter');
	const { data: dataProductSelected = initializedProductSelected, isLoading }= useGetProductsByIdQuery(productId);

	const routes = [
		{
			path: '/products',
			breadcrumb: 'Productos',
		},
		{
			path: '/products/details/:productId',
			breadcrumb: `${dataProductSelected.model}`,
		},
	];

	useEffect(() => {
		navigate(`?filter=${filter}&model=${dataProductSelected.model}`);
	}, [dataProductSelected]);

	return (
		<div className='section-container'>
			<div className='navigate__navbar'>
				<Link className='link__back' to={`/products${location.search}`}>
					<span>Volver</span>
				</Link>
				<div className='breadcrumb'>
					<Breadcrumbs routes={routes} />
				</div>
			</div>
			{ isLoading && (<div>
				<span>Cargando información ...</span>
			</div>)}
			<ProductDetailCard productSelected={dataProductSelected} />
		</div>
	);
};

ProductDetails.defaultProps = {};

ProductDetails.propTypes = {};

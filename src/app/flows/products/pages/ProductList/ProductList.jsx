import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../../../../shared/ui/components';
import { ProductCardList } from '../../components';
import { setfilterProductsList } from '../../../../store/slices/products';
import { useGetProductsQuery } from '../../../../store/apis';
import './ProductList.scss';

export const ProductList = () => {
	const dispatch = useDispatch();
	const {data: productsList, isLoading} = useGetProductsQuery();
	const { filteredProducts } = useSelector(state => state.productsList);

	const getFilteredDataList = (filteredData) => {
		dispatch(setfilterProductsList(filteredData));
	};

	return (
		<>
			<div className='section-container'>
				<div className='search-container'>
					<Search
						placeholder={'Buscar'}
						parametersToSearch={['brand', 'model']}
						initialDataList={productsList}
						getFilteredDataList={getFilteredDataList}
					/>
				</div>
				{ isLoading && (<div>
					<span>Cargando información ...</span>
				</div>)}
				<ProductCardList products={filteredProducts} />
			</div>
		</>
	);
};

import { useEffect, useState } from 'react';
import { Search } from '../../../../shared/ui';
import { ProductCardList } from '../../components';
import './ProductList.scss';

export const ProductList = () => {
	const [generalProductList, setGeneralProductList] = useState([]);
    const [filteredProductList, setFilteredProductList] = useState([]);

	useEffect(() => {
		fetch('https://itx-frontend-test.onrender.com/api/product')
			.then(response => response.json())
			.then(json => setGeneralProductList(json))
			.catch(error => console.error(error));
	}, []);

	return (
		<>
			<div className='section-container'>
				<div className='search-container'>
					<Search
                        placeholder={'Buscar'}
                        parametersToSearch={['brand', 'model']}
                        initialDataList={generalProductList}
                        setFilteredProductList= {setFilteredProductList}/>
				</div>
				<ProductCardList products={filteredProductList} />
			</div>
		</>
	);
};

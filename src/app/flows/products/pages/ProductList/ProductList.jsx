import { useEffect, useState } from 'react';
import { Search } from '../../../../shared/ui';
import { ProductCardList } from '../../components';
import './ProductList.scss';

export const ProductList = () => {
    const [products, setData] = useState(null);

    useEffect(() => {
		fetch('https://itx-frontend-test.onrender.com/api/product')
			.then(response => response.json())
			.then(json => setData(json))
			.catch(error => console.error(error));
	}, []);

    const removeAccents = (str) => {
        return str
          .replace(/á/g, 'a')
          .replace(/é/g, 'e')
          .replace(/í/g, 'i')
          .replace(/ó/g, 'o')
          .replace(/ú/g, 'u');
      };

    const onInputFilterData = event => {
		const filterValue = event.target.value;
        const resultFilter = [];
        if (filterValue.length >= 3) {
            for (const product of products) {
                const parameter = product.brand || product.model;
                if ((filterValue.length >= 1) && (removeAccents(parameter).toLowerCase())
                .indexOf(removeAccents(filterValue.toLowerCase())) > -1) {
                    resultFilter.push(product);
                }
            }
            console.log('Holaaaaa', resultFilter);
        }
		console.log('onInputFilterData', filterValue);
	};

    return (
        <>
            <div className='section-container'>
                <div className='search-container'>
                    <Search onChange={onInputFilterData} />
                </div>
                <ProductCardList products={products}/>
            </div>
        </>
    );
};

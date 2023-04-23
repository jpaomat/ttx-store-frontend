import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductList } from '../../pages/ProductList/ProductList';
import { ProductDetails } from '../../pages/ProductDetails/ProductDetails';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='product-list' element={<ProductList />} />
			<Route path='product-details' element={<ProductDetails />} />
			<Route path='/' element={<Navigate to='/product-list' />} />
			<Route />
		</Routes>
	);
};

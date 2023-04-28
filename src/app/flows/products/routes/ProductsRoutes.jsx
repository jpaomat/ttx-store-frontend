import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductDetails, ProductList } from '../pages';
import { Navbar } from '../../../shared/ui/components/Navbar/Navbar';

export const ProductsRoutes = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='products' element={<ProductList />} />
				<Route path='/products/details/:productId' element={<ProductDetails />} />
				<Route path='/*' element={<Navigate to='/products' />} />
				<Route />
			</Routes>
		</>
	);
};

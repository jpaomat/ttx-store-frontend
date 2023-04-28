import { Route, Routes } from 'react-router-dom';
import { ProductsRoutes } from '../../flows/products';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/*' element={<ProductsRoutes />} />{' '}
		</Routes>
	);
};

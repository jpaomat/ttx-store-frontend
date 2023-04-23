import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductList } from '../../pages/ProductList/ProductList';
import { ProductDetails } from '../../pages/ProductDetails/ProductDetails';
import { Header } from '../../shared/ui/components/Header/Header';

export const AppRouter = () => {
	return (
		<>
			<Header />
			<div className='container'>
				<Routes>
					<Route path='product-list' element={<ProductList />} />
					<Route path='product-details' element={<ProductDetails />} />
					<Route path='/' element={<Navigate to='/product-list' />} />
					<Route />
				</Routes>
			</div>
		</>
	);
};

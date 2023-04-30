import {
	productsListSlice,
	setProductList,
	setfilterProductsList,
	startLoadingProductList,
} from '../productsSlice';
import { dataFilterMock, initiaStateMock, productListMock } from './mocks';

describe('productsList Slice', () => {
	test('should call slice and change de state to isLoadingData', () => {
		const state = productsListSlice.reducer(
			initiaStateMock,
			startLoadingProductList(true)
		);
		expect(state.isLoadingData).toBeTruthy();
	});

	test('should call slice and change de state to filteredProducts', () => {
		const state = productsListSlice.reducer(
			initiaStateMock,
			setfilterProductsList(dataFilterMock)
		);
		expect(state.filteredProducts[0].name).toBe('test');
	});

	test('should call slice and change de state to filteredProducts', () => {
		const state = productsListSlice.reducer(
			initiaStateMock,
			setProductList(productListMock)
		);
		expect(state.products.length).toBe(2);
	});
});

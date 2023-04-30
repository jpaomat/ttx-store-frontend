import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { ButtonApp, MultiselectContainer } from '../../../../shared/ui/components';
import {
	dataToShowDescription,
	initializedProductSelected,
	selectorsProduct,
} from '../../const/detailsData.const';
import { incrementCartCounter } from '../../../../store/slices/cartCounter/cartCounterSlice';
import './ProductDetailCard.scss';
import { productsApi } from '../../../../../api/products';

export const ProductDetailCard = ({
	productSelected = initializedProductSelected,
}) => {
	const { productId } = useParams();
	const [selectedProductOptions, setSelectedProductOptions] = useState(null);
	const [selectorDefaultValues, setSelectorDefaultValues] = useState(null);
	const dispatch = useDispatch();

	const getOptions = (codeName, options) => {
		return options.map(({ code, name }) => ({ codeName, code, name }));
	};

	const onSelect = optionSelected => {
		const { codeName, code } = optionSelected[0];
		setSelectedProductOptions({
			...selectorDefaultValues,
			...selectedProductOptions,
			...{ [`${codeName}`]: code },
		});
	};

	const addItemCart = () => {
		let dataToSend = selectedProductOptions || selectorDefaultValues;
		dataToSend = { ...dataToSend, id: productId };
		productsApi
			.post('cart', {...dataToSend})
			.then(({ data }) => dispatch(incrementCartCounter({ ...data, product: dataToSend })))
			.catch(error => console.error(error));
	};

	// if (!productSelected) {
	// 	return <Navigate to='/products' />;
	// }

	const { brand, imgUrl, model, ram, price, options } = productSelected;

	return (
		productSelected.brand && (
			<div className='detail-card'>
				<div className='detail-card__item detail-card__item--image'>
					<img src={imgUrl} alt='' />
				</div>
				<div className='detail-card__item item-information'>
					<div className='item-information__header'>
						<p className='item-information__header--title'>
							{`${brand}/${model}/${ram}`}
						</p>
						{price ? (
							<div className='item-price'>
								<span className='item-information__header--price'>{price}</span>
								<span className='item-information__header--currrency'>€</span>
							</div>
						) : (
							<p className='item__no-stock '>No disponible</p>
						)}
					</div>

					<div className='item-information__body'>
						<p className='item-information__body--title'>
							Caracteristicas destacadas
						</p>
						<ul className='item-information__body--options'>
							{dataToShowDescription.map(({ label, property }) => (
								<li key={property}>
									<span>
										<b>{label}: </b> {productSelected[property]}
									</span>
								</li>
							))}
						</ul>
					</div>

					<div className='item-information__footer'>
						<div className='item-information__footer--actions'>
							{selectorsProduct.map(({ selector, label, codeName }) => (
								<MultiselectContainer
									key={selector}
									selector={selector}
									label={label}
									displayValue='name'
									selectedValues={getOptions(codeName, options[selector])[0]}
									setSelectorDefaultValues={setSelectorDefaultValues}
									options={getOptions(codeName, options[selector])}
									onSelect={onSelect}
								/>
							))}
						</div>
						<ButtonApp size='sm' disabledBtn={!price} onClick={addItemCart}>
							{price ? (
								<>
									<span>Agregar al carrito</span>
									<BsCart4 className='cart-icon' size={14} />
								</>
							) : (
								<span>No disponible</span>
							)}
						</ButtonApp>
					</div>
				</div>
			</div>
		)
	);
};

ProductDetailCard.defaultProps = {
	productSelected: {},
};

ProductDetailCard.propTypes = {
	productSelected: PropTypes.shape({}),
};

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { ButtonApp, MultiselectContainer } from '../../../../shared/ui';
import './ProductDetailCard.scss';

export const ProductDetailCard = () => {
	const { productId } = useParams();
	const [selectedProductOptions, setSelectedProductOptions] = useState({
		id: productId,
	});
	const [productSelected, setProductSelected] = useState({
		brand: '',
		imgUrl: '',
		model: '',
		ram: '',
		price: '',
		options: {},
	});

	useEffect(() => {
		fetch(`https://itx-frontend-test.onrender.com/api/product/${productId}`)
			.then(response => response.json())
			.then(json => setProductSelected({ ...json, ...{ productSelected } }))
			.catch(error => console.error(error));
	}, []);

	const dataToShowDescription = [
		'brand',
		'model',
		'price',
		'cpu',
		'ram',
		'os',
		'displaySize',
		'battery',
		'dimentions',
		'primaryCamera',
		'secondaryCmera',
	];

	const selectorsProduct = [
		{
			selector: 'storages',
			codeName: 'storageCode',
			label: 'Almacenamiento',
		},
		{
			selector: 'colors',
			codeName: 'colorCode',
			label: 'Colores',
		},
	];

	const getOptions = (codeName, options) => {
		return options.map(({ code, name }) => ({ codeName, code, name }));
	};

	const onSelect = optionSelected => {
		const { codeName, code } = optionSelected[0];
		setSelectedProductOptions({
			...selectedProductOptions,
			...{ [`${codeName}`]: code },
		});
	};

	const addItemCart = () => {
		fetch('https://itx-frontend-test.onrender.com/api/cart', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(selectedProductOptions),
		})
			.then(response => response.json())
			.then(json => console.log('Products in cart', json))
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
							{dataToShowDescription.map(key => (
								<li key={key}>
									<span>
										<b>{key}: </b> {productSelected[key]}
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

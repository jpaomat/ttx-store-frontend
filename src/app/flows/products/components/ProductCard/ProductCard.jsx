import PropTypes from 'prop-types';
import { ButtonApp } from '../../../../shared/ui/components';
import { BsCart4 } from 'react-icons/bs';
import './ProductCard.scss';

export const ProductCard = ({ brand, imgUrl, model, price }) => {
	const notAvilableText = 'No disponible';
	const onClick = () => {
	};

	const PriceComponent = ({ price }) =>
		price ? (
			<p className='card__content--price'>{price} €</p>
		) : (
			<p className='item__no-stock '>{notAvilableText}</p>
		);

	const ButtonContent = ({ price }) =>
		price ? (
			<>
				<span>Agregar al carrito</span>
				<BsCart4 className='cart-icon' size={14} />
			</>
		) : (
			<span>{notAvilableText}</span>
		);

	return (
		<div className='card'>
			<img className='card__image' src={imgUrl}></img>
			<div className='card__content'>
				<p className='card__content--brand'>{brand}</p>
				<p className='card__content--model'>{model}</p>
				<PriceComponent price={price} />
			</div>
			<ButtonApp size='sm' disabledBtn={!price} onClick={onClick}>
				<ButtonContent price={price} />
			</ButtonApp>
		</div>
	);
};

ProductCard.defaultProps = {
	brand: '',
	imgUrl: '',
	model: '',
	price: '',
};

ProductCard.propTypes = {
	brand: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired,
	model: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import { Button } from '../../shared/ui/components/Button/Button';
import { BsCart4 } from 'react-icons/bs';
import './Card.scss';

export const Card = ({ brand, imgUrl, model, price }) => {
	const onClick = () => {
		console.log('click desde button');
	};
	return (
		<div className='card'>
			<img className='card__image' src={imgUrl}></img>
			<div className='card__content'>
				<p className='card__content--brand'>{brand}</p>
				<p className='card__content--model'>{model}</p>
				{price ? (
					<p className='card__content--price'>{price} €</p>
				) : (
					<p className='item__no-stock '>No disponible</p>
				)}
			</div>
			<Button size='sm' disabledBtn={!price} onClick={onClick}>
				{price ? (
					<>
						<span>Agregar al carrito</span>
						<BsCart4 className='cart-icon' size={14} />
					</>
				) : (
					<span>No disponible</span>
				)}
			</Button>
		</div>
	);
};

Card.defaultProps = {};

Card.propTypes = {
	productId: PropTypes.string,
	brand: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired,
	model: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};

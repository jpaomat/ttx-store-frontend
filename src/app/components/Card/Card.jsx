import PropTypes from 'prop-types';
import { Button } from '../../shared/ui/components/Button/Button';
import './Card.scss';

export const Card = ({ brand, imgUrl, model, price }) => {
	return (
		<div className='card'>
			<img className='card__image' src={imgUrl}></img>
			<div className='card__content'>
				<p className='card__content--brand'>{brand}</p>
				<p className='card__content--model'>{model}</p>
				{price ?
					<p className='card__content--price'>{price} €</p> :
					<p className='card__content--no-stock'>No disponible</p>
				}
			</div>
			<Button size='sm' disabledBtn={!price}>
				<span>{ price ? 'Agregar al carro' : 'No disponible'}</span>
			</Button>
		</div>
	);
};

Card.defaultProps = {};

Card.propTypes = {
	brand: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired,
	model: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};

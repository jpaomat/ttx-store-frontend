import PropTypes from 'prop-types';
import './Card.scss';

export const Card = ({ brand, imgUrl, model, price }) => {
	return (
		<div className='card'>
			<img className='card-image' src={imgUrl}></img>
			<div className='card-content'>
				<div className='item-description__wrapper'>
					<p className='item-brand'>{brand}</p>
					<p className='item-model'>{model}</p>
				</div>
				{price ?
					<p className='item-price'>{price} €</p> :
					<p className='item-no-stock'>No disponible</p>
				}
			</div>
			<div className='card-footer'>
				<div className='card-footer-content'>
					<button className='card-button' disabled={!price}>
						{ price ? 'Agregar al carro' : 'No disponible'}
					</button>
				</div>
			</div>
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

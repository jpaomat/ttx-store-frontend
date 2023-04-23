import './Card.scss';

export const Card = () => {
	return (
		<div className='card'>
			<img
				className='card-image'
				src='https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg'
			></img>
			<div className='card-content'>
				<div className='item-description__wrapper'>
					<p className='item-description'>Acer</p>
					<p className='item-description'>Iconia Talk S</p>
				</div>
				<p className='item-price'>150 €</p>
			</div>
			<div className='card-footer'>
				<div className='card-footer-content'>
					<button className='card-button'>Agregar al carro</button>
				</div>
			</div>
		</div>
	);
};

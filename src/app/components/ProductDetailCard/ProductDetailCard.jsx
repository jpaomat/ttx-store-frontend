import { Button } from '../../shared/ui/components/Button/Button';
import './ProductDetailCard.scss';

export const ProductDetailCard = () => {
	const data = {
		brand: 'Acer',
		model: 'Iconia Talk S',
		price: '784',
		imgUrl:
			'https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
		cpu: 'Quad-core 1.3 GHz Cortex-A53',
		ram: '2 GB RAM',
		os: 'Android 6.0 (Marshmallow)',
		displaySize: '720 x 1280 pixels (~210 ppi pixel density)',
		battery: 'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
		dimentions: '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
		primaryCamera: ['13 MP', 'autofocus'],
		secondaryCmera: ['2 MP', '720p'],
        options: {
            colors: [
                {
                    code: 1000,
                    name: 'Black'
                }
            ],
            storages: [
                {
                    code: 2000,
                    name: '16 GB'
                },
                {
                    code: 2001,
                    name: '32 GB'
                }
            ]
        },
		colors: [
			'Black',
			'White'
		],
	};

	const dataKeys = [
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

	return (
		<div className='detail-card'>
			<div className='detail-card__item detail-card__item--image'>
				<img src={data.imgUrl} alt='' />
			</div>
			<div className='detail-card__item item-information'>
				<div className='item-information__header'>
					<p className='item-information__header--title'>
						{`${data.brand}/${data.model}/${data.ram}`}
					</p>
					<p className='item-information__header--price'>
					</p>
					{data.price ?
						<p className='item-information__header--price'>{data.price} €</p> :
						<p className='item__no-stock '>No disponible</p>
					}
				</div>

				<div className='item-information__body'>
					<p className='item-information__body--title'>Caracteristicas destacadas</p>
					<ul className='item-information__body--options'>
						{dataKeys.map(key => (
							<li key={key}>
                                <span><b>{key}: </b> {data[key]}</span>
							</li>
						))}
					</ul>
				</div>

				<div className='item-information__footer'>
					<div className='item-information__footer--actions'>
                        {['Almacenamiento', 'Color', 'Cantidad'].map((action, k) => (
                            <div className='select-actions' key={k}>
                                <label className='select-actions__label'>{action}</label>
                                <select className='select-actions__select' id="actions" name="actions">
                                    {data.options.storages.map((storage, key) =>
                                        <option key={key} value={storage.name}>{storage.name}</option>
                                    )}
                                </select>
                            </div>
                        ))}
                    </div>

					<Button size='sm' disabledBtn={!data.price}>
						<span>{ data.price ? 'Agregar al carro' : 'No disponible'}</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

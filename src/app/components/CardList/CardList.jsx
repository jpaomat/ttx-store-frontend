import { Card } from '../Card/Card';
import './CardList.scss';
export const CardList = () => {
	const dataTest = [1, 1, 1, 1, 11, 1, 1, 1, 11, 1];
	return (
		<div className='card-container'>
			{dataTest.map((e, i) => (
				<Card key={i} />
			))}
		</div>
	);
};

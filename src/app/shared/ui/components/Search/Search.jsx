import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import './Search.scss';

export const Search = ({onChange}) => {

	return (
		<>
			<div className='filter-container'>
				<form className='filter-container__form'>
					<input
						className='filter-container__input'
						type='text'
						placeholder='Buscar'
						onChange={e => onChange(e)}
					/>
					<button className='btn filter-container__btn'>
						<BiSearchAlt className='btn__icon--search' />
					</button>
				</form>
			</div>
		</>
	);
};

Search.defaultProps = {};

Search.propTypes = {
	onChange: PropTypes.string
};

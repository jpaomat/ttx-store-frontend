import { useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useInputSearch } from '../../hooks/useInputSearch';
import PropTypes from 'prop-types';
import './Search.scss';

export const Search = ({
	parametersToSearch,
	initialDataList,
	getFilteredDataList,
	placeholder
}) => {

	const { inputTextState, dataListState, onInputChange, onResetFilter } = useInputSearch({
		parametersToSearch,
		initialDataList,
	});

	useEffect(() => {
		getFilteredDataList(dataListState);
	}, [dataListState]);

	const onCleanFilterSubmit = (event) => {
		event.preventDefault();
		onResetFilter(true);
	};

	return (
		<>
			<div className='filter-container'>
				<form className='filter-container__form' onSubmit={onCleanFilterSubmit}>
					<input
						name='inputTextState'
						className='filter-container__input'
						type='text'
						placeholder={placeholder}
						autoComplete='off'
						value={inputTextState}
						onChange={onInputChange}
					/>
					<button className='btn filter-container__btn'>
						<AiOutlineCloseCircle className={`btn__icon--search ${inputTextState ? 'c-gray-200' : ''}`}/>
					</button>
				</form>
			</div>
		</>
	);
};

Search.defaultProps = {
	placeholder: '',
	initialDataList: [{}]
};

Search.propTypes = {
	parametersToSearch: PropTypes.arrayOf(PropTypes.string).isRequired,
	initialDataList:  PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	getFilteredDataList: PropTypes.func,
	placeholder: PropTypes.string,
};

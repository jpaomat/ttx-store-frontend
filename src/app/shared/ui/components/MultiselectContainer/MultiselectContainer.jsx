import PropTypes from 'prop-types';
import './MultiselectContainer.scss';
import { useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';

export const MultiselectContainer = ({selector, label, options, selectedValues, displayValue, onSelect, setSelectorDefaultValues}) => {
	useEffect(() => {
		setSelectorDefaultValues((currentValue) => ({
			...currentValue,
			...{ [`${selectedValues.codeName}`]: selectedValues.code },
		}));
	}, []);

	return (
		<div className='select-actions' key={selector}>
			<label className='select-actions__label'>{label}</label>
			<Multiselect
				className='select-actions__select'
				options={options}
				singleSelect= {true}
				selectedValues={[selectedValues]}
				displayValue={displayValue}
                onSelect={onSelect}
			/>
		</div>
	);
};

MultiselectContainer.defaultProps = {
    selector: '',
	label: '',
	options: [{}],
	selectedValues: {
		code: 0,
		codeName: '',
		name: '',
	}
};

MultiselectContainer.propTypes = {
	selector: PropTypes.string,
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.shape({})),
	displayValue: PropTypes.string,
	selectedValues: PropTypes.shape({
		code: PropTypes.number,
		codeName: PropTypes.string,
		name: PropTypes.string,
	}),
    onSelect: PropTypes.func,
	setSelectorDefaultValues: PropTypes.func,
};

import PropTypes from 'prop-types';
import './MultiselectContainer.scss';
import { useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';

export const MultiselectContainer = ({selector, label, options, displayValue, onSelect}) => {

	useEffect(() => {
	}, []);

	return (
		<div className='select-actions' key={selector}>
			<label className='select-actions__label'>{label}</label>
			<Multiselect
				className='select-actions__select'
				options={options}
				singleSelect
				displayValue={displayValue}
                onSelect={onSelect}
			/>
		</div>
	);
};

MultiselectContainer.defaultProps = {
    selector: '',
	label: '',
	options: []
};

MultiselectContainer.propTypes = {
	selector: PropTypes.string,
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.shape({})),
	displayValue: PropTypes.string,
    onSelect: PropTypes.func
};

import PropTypes from 'prop-types';
import './ButtonApp.scss';

export const ButtonApp = ({children, size, disabledBtn, onClick}) => {
    return (
        <div className='btn btn-container'>
            <button className={`btn-ttx btn-ttx__${size}`} disabled={disabledBtn} onClick={onClick}>
                { children }
            </button>
        </div>
    );
};

ButtonApp.defaultProps = {
    disabledBtn: false
};

ButtonApp.propTypes = {
    children: PropTypes.element,
	disabledBtn: PropTypes.bool.isRequired,
    size: PropTypes.string.isRequired,
	onClick: PropTypes.func
};

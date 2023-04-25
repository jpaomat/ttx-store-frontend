import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({children, size, disabledBtn, onClick}) => {
    return (
        <div className='btn btn-container'>
            <button className={`btn-ttx btn-ttx__${size}`} disabled={disabledBtn} onClick={onClick}>
                { children }
            </button>
        </div>
    );
};

Button.defaultProps = {
    disabledBtn: false
};

Button.propTypes = {
    children: PropTypes.element,
	disabledBtn: PropTypes.bool.isRequired,
    size: PropTypes.string.isRequired,
	onClick: PropTypes.func
};

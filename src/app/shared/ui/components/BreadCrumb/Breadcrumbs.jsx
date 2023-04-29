import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import PropTypes from 'prop-types';
import './Breadcrumbs.scss';

export const Breadcrumbs = ({ routes }) => {
	const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });

	return (
		<div className='breadcrumbs'>
			{breadcrumbs.map(({ breadcrumb, match }, index) => (
				<div className='bc breadcrumbs__item' key={match.pathname}>
					<Link className={index} to={match.pathname || ''}>
						{breadcrumb}
					</Link>
					{index < breadcrumbs.length - 1 && '>'}
				</div>
			))}
		</div>
	);
};

Breadcrumbs.defaultProps = {
	routes: [{}],
};

Breadcrumbs.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.shape({})),
};

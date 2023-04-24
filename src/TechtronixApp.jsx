import './TechtonixApp.scss';
import { AppRouter } from './app/config/router/AppRouter';
import { Header } from './app/shared/ui/components/Header/Header';

export const TechtronixApp = () => {
	return (
		<div className='main'>
			<Header />
			<div className='main-container'>
				<AppRouter />
			</div>
		</div>
	);
};

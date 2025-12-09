import { useTheme } from '../../hooks/useTheme';
import { ThemeToggle } from '../themeToggle/ThemeToggle';
import './Header.css';

export const Header = () => {
	const { theme } = useTheme();

	return(
		<div className="header">
			<ThemeToggle />
			<h1 className="header-title">
				{theme === 'dark' ? 'Darkness' : 'Lightness'}
			</h1>
			<div className="header-glow"></div>
		</div>
	);
};
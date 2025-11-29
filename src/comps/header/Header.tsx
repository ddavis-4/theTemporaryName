import { useTheme } from '../../hooks/useTheme';
import { ThemeToggle } from '../themeToggle/ThemeToggle';
import './Header.css';

export const Header = () => {
	const { theme } = useTheme();

	return(
		<div className="header">
			<ThemeToggle />
			<h1 className="header-title">
				{theme === 'dark' ? 'zZThe Dark OracleZz' : 'zZThe Light OracleZz'}
			</h1>
			<div className="header-glow"></div>
		</div>
	);
};
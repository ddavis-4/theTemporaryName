import { useTheme } from '../../hooks/useTheme';
import './ThemeToggle.css';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const icon = theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '👑';
  const label = `Current theme: ${theme}. Toggle theme`;

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {icon}
    </button>
  );
};

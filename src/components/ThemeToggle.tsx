import { useTheme } from '../theme/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <SunIcon className="h-5 w-5 text-gray-200" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle; 
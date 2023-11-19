import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';
import { useEffect } from 'react';
import { useState } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkMode === false ? (
          <FiSun className="text-2xl md:text-base" />
        ) : (
          <FiMoon className="text-2xl md:text-base" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;

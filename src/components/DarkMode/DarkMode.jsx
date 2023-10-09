import './darkmode.css';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

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
    <div className="dark_mode">
      <button onClick={toggleTheme}>
        {isDarkMode === false ? (
          <BsSunFill style={{ fontSize: '2rem' }} />
        ) : (
          <FaMoon style={{ fontSize: '2rem' }} />
        )}
      </button>
    </div>
  );
};

export default DarkMode;

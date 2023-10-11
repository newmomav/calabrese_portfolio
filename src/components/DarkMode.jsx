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
    <div>
      <button onClick={toggleTheme}>
        {isDarkMode === false ? (
          <BsSunFill className="text-[2rem] md:text-[3rem] lg:text-[5rem]" />
        ) : (
          <FaMoon className="text-[2rem] md:text-[3rem] lg:text-[5rem]" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;

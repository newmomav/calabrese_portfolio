import { FiMoon } from 'react-icons/fi';
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
    <div className="h-full flex justify-center">
      <button onClick={toggleTheme}>
        {isDarkMode === false ? (
          <BsSunFill className="text-[4rem] md:text-[5rem] lg:text-[7rem]" />
        ) : (
          // <em className="text-xs md:text-base lg:text-lg">light</em>
          <FiMoon className="text-[3rem] md:text-[4rem] lg:text-[3rem]" />
          // <em className="text-xs md:text-base lg:text-lg">dark</em>
        )}
      </button>
    </div>
  );
};

export default DarkMode;

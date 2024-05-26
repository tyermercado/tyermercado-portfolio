import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle('light-mode');
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {isLightMode ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default ThemeToggle;

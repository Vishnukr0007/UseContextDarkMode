import React from 'react';
import { useTheme } from './ThemeContext';

const Dhcomponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const themeStyles = {
    backgroundColor: isDarkMode ? '#333' : '#FFF',
    color: isDarkMode ? '#FFF' : '#000',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={themeStyles}>
      <h1>Welcome!</h1>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default Dhcomponent;

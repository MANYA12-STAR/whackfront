import React, { createContext, useState,useContext } from 'react';

// Create a context
export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

// Create a provider for the theme
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
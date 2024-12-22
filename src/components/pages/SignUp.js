import React, { useContext,useEffect } from 'react';
import { ThemeContext } from '../../ThemeContext';
import '../../App.css';

export default function SignUP() {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    // Apply background color change for the entire page
    document.body.style.backgroundColor = isDarkMode ? '#333' : '#f9f9f9';
    document.body.style.color = isDarkMode ? '#fff' : '#000';
  }, [isDarkMode]); // Re-run when the theme changes

  return (
    <div>
      <h1>SIGNED!</h1>
      {/* Additional content for the page */}
    </div>
  );
}

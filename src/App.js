import React, { useState } from 'react';
import Navbar from './components/Navbar';  // Import the Navbar component
import VoiceBot from './voicebot';  // Import the VoiceBot component
import './App.css';
import { ThemeProvider } from './ThemeContext';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Anemia_detector from './components/pages/Anemia_detector';
import Generic_medicine_finder from './components/pages/Generic_medicine_finder';
import Generic_Store_locator from './components/pages/Generic_Store_locator';
import SignUp from './components/pages/SignUp';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);  // State for dark mode toggle
  const [currentTab, setCurrentTab] = useState('home'); // Track the current tab

  // Function to handle tab change
  const handleTabChange = (tab) => {
    console.log(`Tab changed to: ${tab}`);
    setCurrentTab(tab); // Optional: for debugging
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <ThemeProvider>
      <Router>
        {/* Pass the handleTabChange function to VoiceBot */}
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <VoiceBot onTabChange={handleTabChange} /> {/* Pass handleTabChange to VoiceBot */}

        {/* Routes for Different Pages */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Anemia_detector" element={<Anemia_detector />} />
          <Route path="/Generic_medicine_finder" element={<Generic_medicine_finder />} />
          <Route path="/Generic_Store_locator" element={<Generic_Store_locator />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

import React,{useContext,useEffect} from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { ThemeContext } from '../../ThemeContext';

function Home() {
  const { isDarkMode } = useContext(ThemeContext);

  // Apply styles globally when the theme changes
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
    document.body.style.color = isDarkMode ? '#fff' : '#000';
  }, [isDarkMode]);

  return (
    <>
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
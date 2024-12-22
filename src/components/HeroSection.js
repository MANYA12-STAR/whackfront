import React,{useContext} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { ThemeContext } from '../ThemeContext';

function HeroSection() {
    const { isDarkMode } = useContext(ThemeContext);

    const sectionStyle = {
      backgroundColor: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
      padding: '50px',
      textAlign: 'center',
    };  
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>YOUR HEALTH MATTERS.</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
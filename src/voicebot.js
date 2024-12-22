import React, { useState, useEffect, useCallback } from 'react';

const VoiceBot = ({ onTabChange }) => {
  const [enabled, setEnabled] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [synth, setSynth] = useState(null);

  const toggleVoiceBot = () => {
    setEnabled(prev => !prev);
  };

  // Function to speak the given text
  const speakText = useCallback((text) => {
    if (synth) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    } else {
      console.log('Speech synthesis not supported');
    }
  }, [synth]);

  // Handle voice commands
  const handleVoiceCommand = useCallback((event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log('Command received:', command);

    if (command.includes('go to home')) {
      speakText('You are now on the Home tab.');
      onTabChange('home');
    } else if (command.includes('go to anemia detector')) {
      speakText('You are now on the Anemia Detector tab.');
      onTabChange('Anemia_detector');
    } else if (command.includes('go to generic medicine finder')) {
      speakText('You are now on the Generic Medicine Finder tab.');
      onTabChange('Generic_medicine_finder');
    } else if (command.includes('go to generic store locator')) {
      speakText('You are now on the Generic Store Locator tab.');
      onTabChange('Generic_Store_locator');
    } else if (command.includes('sign up')) {
      speakText('You are now on the Sign Up page.');
      onTabChange('sign_up');
    } else {
      speakText('Command not recognized.');
    }
  }, [onTabChange, speakText]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const speechSynthesis = window.speechSynthesis;

    if (SpeechRecognition && speechSynthesis) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.lang = 'en-US';
      recognitionInstance.interimResults = false;
      recognitionInstance.onresult = handleVoiceCommand;

      recognitionInstance.onend = () => {
        if (enabled) {
          recognitionInstance.start();  // Restart recognition if enabled
        }
      };

      setRecognition(recognitionInstance);
      setSynth(speechSynthesis);

      // Start listening if enabled
      if (enabled) {
        recognitionInstance.start();
        speakText('Voice bot is active. Please speak your commands.');
      }
    } else {
      alert('Your browser does not support Speech Recognition or Speech Synthesis.');
    }

  }, [enabled, handleVoiceCommand, speakText]);

  useEffect(() => {
    if (enabled && recognition && recognition.state === 'inactive') {
      recognition.start();
      speakText('Voice bot is active. Please speak your commands.');
    } else if (recognition) {
      recognition.stop();
      speakText('Voice bot is disabled.');
    }
  }, [enabled, recognition, speakText]);

  return (
    <div className="voice-bot">
      <button className="voice-bot-toggle" onClick={toggleVoiceBot}>
        {enabled ? 'Disable Voice Bot' : 'Enable Voice Bot'}
      </button>
    </div>
  );
};

export default VoiceBot;

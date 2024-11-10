import React from 'react';
import HeroSection from './components/HeroSection';
import DetectionSection from './components/DetectionSection';
import AboutSection from './components/AboutSection';
import './index.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <DetectionSection />
      <AboutSection />
    </div>
  );
}

export default App;

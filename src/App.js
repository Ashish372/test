import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Donate from './components/Donate';
import EventInfo from './components/EventInfo';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="test/" element={<LandingPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/event-info" element={<EventInfo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


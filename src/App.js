import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import UserLogin from './components/UserLogin';
import TechnicianLogin from './components/TechLogin'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/technician-login" element={<TechnicianLogin />} />
   
        </Routes>
      </Router>
    </div>
  );
}

export default App;

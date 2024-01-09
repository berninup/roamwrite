import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import LoginPage from './components/login';
import './App.css'

function App() {
  return (
    <Routes>      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />      
    </Routes>
  );
}

export default App;

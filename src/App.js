import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './login/login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Add a home route if needed */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

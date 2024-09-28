import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard"; // Import Dashboard


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />        {/* Login page */}
        <Route path="/register" element={<Register />} /> {/* Registration page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard page */}
        
      </Routes>
    </>
  );
}

export default App;

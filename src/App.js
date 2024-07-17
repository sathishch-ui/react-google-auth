import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleAuthComponent from "./components/GoogleAuth";
import Dashboard from "./components/DashBoard";

import './App.css'

const App = () => {
  const [token, setToken] = useState('');
  
    useEffect(() => {
      const storedToken = localStorage.getItem("localStorageToken");
      if (storedToken) {
        setToken(storedToken);
      }
    }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoogleAuthComponent setToken={setToken} />} />
        <Route path="/dashboard" element={<Dashboard token={token} />} />
      </Routes>
    </Router>
  );
};

export default App;

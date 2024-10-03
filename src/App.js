import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Project from './pages/project';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/harmanjotsingh-nanda" element={<Home />} />
          <Route path="/projects" element={<Project/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

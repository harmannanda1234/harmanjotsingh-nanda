import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Project from './pages/project';
import Blog from './pages/blog';
import Error from './pages/error.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

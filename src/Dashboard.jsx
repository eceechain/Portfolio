import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Projects from './Projects';

function Dashboard() {
  return (
    <Router>
      <div className='dashboard'>
        <Navbar />
        <Routes>
          {/* Use index instead of element for the root route */}
          <Route path='/' element={<Home />} index />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Dashboard;

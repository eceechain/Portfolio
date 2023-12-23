import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Import your CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to='/' className="nav-link" activeClassName="active">Home</NavLink>
      <NavLink to='/about' className="nav-link" activeClassName="active">About</NavLink>
      <NavLink to='/projects' className="nav-link" activeClassName="active">Projects</NavLink>
      <NavLink to='/contacts' className="nav-link" activeClassName="active">Contacts</NavLink>
    </nav>
  );
}

export default Navbar;

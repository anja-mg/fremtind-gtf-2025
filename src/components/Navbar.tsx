import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">FREMTIND x GTF 2025</div>
      <ul className="nav-links">
        <li><NavLink to="/" end>Hjem</NavLink></li>
        <li><NavLink to="/about">Om siden</NavLink></li>
        <li><NavLink to="/shop">Butikk</NavLink></li>
      </ul>
    </nav>
  );
};

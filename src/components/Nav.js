import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../planet.png';
import '../styles/nav.css';

const Nav = () => (
  <header>
    <div className="logo-container">
      <img className="logo" src={planet} alt="" />
      <div>Space Travelers&apos; Hub</div>
    </div>
    <nav>
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  </header>
);

export default Nav;

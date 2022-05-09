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
      <NavLink className="link" exact activeClassName="active" to="/">Rockets</NavLink>
      <NavLink className="link" activeClassName="active" to="/missions">Missions</NavLink>
      <NavLink className="link" activeClassName="active" to="/profile">Profile</NavLink>
    </nav>
  </header>
);

export default Nav;

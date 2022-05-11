import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import planet from '../planet.png';
import '../styles/nav.css';

const Nav = () => (
  <div className="header-container">
    <Container>
      <header>
        <div className="logo-container">
          <img className="logo" src={planet} alt="" />
          <div className="logo-text">Space Travelers&apos; Hub</div>
        </div>
        <nav>
          <NavLink className="link" to="/">Rockets</NavLink>
          <NavLink className="link" to="/missions">Missions</NavLink>
          <NavLink className="link" to="/profile">Profile</NavLink>
        </nav>
      </header>
    </Container>
  </div>
);

export default Nav;

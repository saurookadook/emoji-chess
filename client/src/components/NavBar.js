import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink className="NavLink" to="/">Home</NavLink>
      <NavLink className="NavLink" to="/games/new">New Game</NavLink>
      <NavLink className="NavLink" to="/games/:gameId">Save Game</NavLink>
    </div>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
/* eslint-disable */

const NavBar = () => {
  return (
  <div className="navbar">
    <Link to="/">Home </Link>
    <Link to="/App">Calculator </Link>
    <Link to="/Quote">Quote </Link>
  </div>
  
  
  );
};

export default NavBar;

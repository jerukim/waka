import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '../App.css';

const Navbar = () => (
  <header className="navbar">
    <div className="container">
      <div className="global-margin">
        <div className="row">
          <a className="logo">wakkkkkkkkkkkkkkkkkkkkkkkkkkkkkka</a>
          <ul>
            <li>
              <Link to="/about/">how this shit works</Link>
            </li>
            <li>
              <Link to="/contact">contact info bitch</Link>
            </li>
            <li>
              <Link to="/account/sign-in">sign up foo</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;

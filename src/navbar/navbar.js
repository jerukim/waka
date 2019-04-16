import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '../App.css';

const Navbar = () => (
  <header className="navbar">
    <div className="container">
      <div className="global-margin">
        <div className="row">
          <Link className="logo link" to="/">
            wakkkkkkkkkkkkkkkka
          </Link>
          <ul>
            <li>
              <Link className="link" to="/tutorial/">
                how this shit works
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                contact info bitch
              </Link>
            </li>
            <li>
              <Link className="link" to="/account/sign-in">
                sign up foo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;

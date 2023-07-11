import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { path: '/', text: 'Home' },
  { path: '/calculator', text: 'Calculator' },
  { path: '/quotes', text: 'Quotes' },
];

const Navbar = () => (
  <nav className="navbar">
    <ul className="navlinks">
      {links.map(({ path, text }) => (
        <li key={text}>
          <NavLink
            to={path}
            activeClassName="active"
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;

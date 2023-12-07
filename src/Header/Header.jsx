import React from 'react';
import './header.css'; 
import logo from '../imgs/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="blog-header">
      <div className="header-content">
        <Link to="/" className="logo-title-link">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1>My React Blog</h1>
        </Link>
        <nav className="header-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

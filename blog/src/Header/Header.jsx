import React from 'react';
import './header.css'; 
import logo from '../imgs/logo.png';

function Header() {
  return (
    <header className="blog-header">
      <div className="header-content">
        <div className="logo-title-container">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1>My Blog</h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

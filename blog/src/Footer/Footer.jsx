import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="blog-footer">
      <p>© {new Date().getFullYear()} Mehtap's Blog. All rights reserved.</p>
      <p>
        Follow me on 
        <a href="https://www.linkedin.com/in/mehtapparkinson" target="_blank" rel="noopener noreferrer"> LinkedIn</a> and
        <a href="https://github.com/mehtapparkinson" target="_blank" rel="noopener noreferrer"> GitHub</a>.
      </p>
    </footer>
  );
}

export default Footer;

import React from 'react';
import './Contact.css'; 

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you have any questions, feedback, or just want to say hello, feel free to reach out to me!</p>
      
      <div className="contact-card">
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/mehtapparkinson" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/mehtapparkinson" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;

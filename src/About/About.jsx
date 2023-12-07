import React from 'react';
import './About.css';


function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <div className="flex-container">
        <img src="https://i.ibb.co/TBHnwRV/0152b79bddf62f1935c0ffde6ac620c5-sticker.png" alt="Coding Girl" className="flex-image" />
        <p>Hello! I'm Mehtap. As a junior developer, I am passionate about technology and continuous learning. In this blog, I aim to share my journey in the tech world, the challenges I face, and the discoveries I make along the way.</p>
      </div>

      <p>Here, you'll find posts about the latest tech trends, my personal projects, and tips for fellow junior developers. But it's not all about code! I'll also share snippets of my life outside of programming, be it a new hobby, a book that captivated me, or my latest travel adventure.</p>

      <p>Join me on this exciting journey as I navigate the world of tech and beyond. Welcome to my blog!</p>
    </div>
  );
}

export default About;

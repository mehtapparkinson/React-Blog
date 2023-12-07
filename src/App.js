import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Article from './Article/Article';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:id" element={<Article />} /> 
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

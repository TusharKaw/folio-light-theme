import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectPage = location.pathname === '/all-projects'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <h2>Nitin<span>Nishad</span></h2>
          </Link>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            {isHomePage ? (
              <>
                <li><a href="#home" onClick={closeMenu}>Home</a></li>
                <li><a href="#services" onClick={closeMenu}>Services</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                <li><a href="#education" onClick={closeMenu}>Education</a></li>
                <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                <li><a href="#faqs" onClick={closeMenu}>FAQs</a></li>
              </>
            ) : isProjectPage ? (
              <>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><a href="/all-projects"><text>Projects</text></a></li>
                <li><a href="/#faqs"><text>FAQs</text></a></li>
              </>
            ) : (
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            )}
          </ul>
        </div>
        
        <div className="navbar-contact">
          {isHomePage ? (
            <a href="#contact" className="btn" onClick={closeMenu}><text style={{color:"#fff"}}>Contact</text></a>
          ) : (
            <Link to="/#contact" className="btn" onClick={closeMenu}><text style={{color:"#000000"}}>Contact</text></Link>
          )}
        </div>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 

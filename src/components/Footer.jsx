import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Nitin<span>Nishad</span></h2>
            <p>Unreal Engine Game Developer</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="/#experience">Experience</a></li>
              <li><a href="/#skills">Skills</a></li>
              <li><a href="/blogs"><text /*style={{color:'var(--primary-purple)'}}*/>Blogs</text></a></li>
              {/*<li><a href="#contact">Contact</a></li>*/}
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p><i className="fas fa-envelope"></i> nishad.nitin23@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91 9455473380</p>
            <p><i className="fas fa-map-marker-alt"></i> Prayagraj, India</p>
          </div>
          
          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/nitin-nishad-675848207/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/WinterTurtle23" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://nitinnishad23.artstation.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-artstation"></i>
              </a>
              <a href="https://dev.to/winterturtle23/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-dev"></i>
              </a>
            </div>
          </div>    
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nitin Nishad. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
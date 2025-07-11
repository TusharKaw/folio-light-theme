import React, { useEffect, useRef } from 'react';
import './Hero.css';
import ParticleBackground from './ParticleBackground';
import ScrollDown from './ScrollDown';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      contentRef.current.querySelectorAll('h3, h1, p, .hero-btns, .hero-social'),
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8,
        ease: 'power3.out'
      }
    ).fromTo(
      imageRef.current,
      { 
        scale: 0.8, 
        opacity: 0 
      },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1,
        ease: 'power3.out'
      },
      '-=0.4'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content" ref={contentRef}>
          <h3>Hello, I am Nitin Nishad</h3>
          <h1>Unreal Engine <span>Game Developer</span></h1>
          <p>
            Professional Unreal Engine Game Developer specializing in VR training simulations, multiplayer games, and immersive experiences. 
            Expert in Unreal Engine 5, C++, Blueprint, and creating cutting-edge gaming solutions for Abu Dhabi Police, AIIMS Delhi, and international clients.
          </p>
          <div className="hero-btns">
            <motion.a 
              //href="#contact"
              href="/Resume.pdf"
              download="Nitin_Nishad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.a 
              href="#faqs" 
              className="btn btn-outline"
              style={{color:'#000'}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read FAQs
            </motion.a>
          </div>

          <div className="hero-social">
            <motion.a 
              href="https://www.linkedin.com/in/nitin-nishad-675848207/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a 
              href="https://nitinnishad23.artstation.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-artstation"></i>
            </motion.a>
            <motion.a 
              href="mailto:nishad.nitin23@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-envelope"></i>
            </motion.a>
             <motion.a 
              href="https://dev.to/winterturtle23/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-dev"></i>
            </motion.a>
          </div>
        </div>

        <div className="hero-image" ref={imageRef}>
          <div className="hero-image-wrapper">
            {/* Placeholder for profile image */}
            <div className="profile-image-placeholder">
              {/* Add a gaming controller icon */}
              {/* <i className="fas fa-gamepad hero-icon"></i> */}
            </div>
          </div>
        </div>
      </div>
      
      <ParticleBackground />
      <ScrollDown />
    </section>
  );
};

export default Hero; 
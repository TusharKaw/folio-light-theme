import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import gsap from 'gsap';
import ActiveShooter from '../assets/Activeshooter.jpg';
import Marina from '../assets/Marina.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef(null);

  const projectFilters = [
    { id: 'all', name: 'All' },
    { id: 'vr', name: 'VR' },
    { id: 'pc', name: 'PC' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Active Shooter VR',
      description: 'A VR training simulation developed for Abu Dhabi Police, integrating KAT VR, Forcetube Provolver, and MetaHumans for an immersive training experience.',
      category: ['vr'],
      image: ActiveShooter,
      url: 'https://nitinnishad23.artstation.com/projects/K3aOqG'
    },
    {
      id: 2,
      title: 'Marina Landing',
      description: 'An Architectural Visualization VR experience, deployed internationally, featuring high-detail real-time rendering and interactive walkthroughs.',
      category: ['vr'],
      image: Marina,
      url: 'https://nitinnishad23.artstation.com/projects/P6n9Qn'
    },
    {
        id: 3,
        title: 'Relic Hunters',
        description: 'A cooperative multiplayer game with combat and puzzle-solving challenges, optimized for both PC and mobile platforms.',
        category: ['pc', 'mobile'],
        image: '/images/project-placeholder-5.jpg',
        url: 'https://nitinnishad23.artstation.com/projects/RKll3X'
    },
    {
      id: 4,
      title: 'Evil Legacy',
      description: 'A Harry Potter-inspired strategic game where players utilize diverse magic spells, each with distinct mechanics and tactical advantages.',
      category: ['pc'],
      image: '/images/project-placeholder-4.jpg',
      url: 'https://nitinnishad23.artstation.com/projects/EzVvN4'
    },
    {
        id: 5,
        title: 'Surgical Simulation',
        description: 'A VR medical training simulation utilizing hand tracking, where player performs CPR and use an AED kit to save a patient experiencing a heart attack.',
        category: ['vr'],
        image: '/images/project-placeholder-6.jpg',
        url: 'https://nitinnishad23.artstation.com/projects/2BZZ8g'
    },
    {
        id: 6,
        title: 'Offensive Warfare',
        description: 'A fast-paced 5v5 multiplayer First Person Shooter built in Unreal Engine 5 with LAN, Steam support, and integrated voice and text chat.',
        category: ['pc'],
        image: '/images/project-placeholder-6.jpg',
        url: 'https://nitinnishad23.artstation.com/projects/6LnY0w'
    },
    {
        id: 7,
        title: 'Dronewood',
        description: 'A physics-based drone navigation game where players fly through challenging waypoints using realistic drone mechanics.',
        category: ['pc'],
        image: '/images/project-placeholder-3.jpg',
        url: 'https://nitinnishad23.artstation.com/projects/XJ95vL'
      },
     {
        id: 8,
        title: 'Ultimate UI',
         description: 'A sci-fi-inspired, game-ready UI template for Unreal Engine featuring dynamic interactions and customizable settings.',
        category: ['pc'],
        image: '/images/project-placeholder-3.jpg',
        url: 'https://nitinnishad23.artstation.com/projects/ZlBe4R'
     },
     {
        id: 9,
        title: 'ADHD Diagnostic Game - AIIMS DELHI',
        description: 'A 2D game created for AIIMS Delhi featuring 10 activities designed by doctors for children with ADHD. The game tracks response time, patterns, and behavior.',
        category: ['mobile'],
        image: '/images/project-placeholder-3.jpg',
        url: 'https://nitinnishad23.artstation.com/projects/mAKzGa'
      },
     {
        id: 10,
        title: 'DP World Digital Twin',
        description: 'DP World is a real-time digital twin prototype built in Unreal Engine 5, featuring a live data-connected dashboard that allows users to interact with and manipulate simulated industrial operations.',
        category: ['pc'],
        image: '/images/project-placeholder-3.jpg',
        url: 'https://nitinnishad23.artstation.com/projects/lGNGzO'
      },
     {
        id: 11,
        title: 'Cruiser : Endless Runner',
        description: 'An endless runner mobile game built in Unreal Engine 5, where players dodge obstacles and test their reflexes in a fast-paced, visually engaging environment.',
        category: ['mobile'],
        image: '/images/project-placeholder-3.jpg',
        url: 'https://nitinnishad23.artstation.com/projects/RKE8wE'
      },
     {
        id: 12,
        title: 'Space Shooter',
        description: 'A top-down space combat game where players pilot a spaceship, dodge obstacles, and fight enemy ships.',
        category: ['pc'],
        image: '/images/project-placeholder-3.jpg',
        url: 'https://nitinnishad23.artstation.com/projects/8Brvo6'
      },
     {
        id: 13,
        title: 'Angry Birds',
        description: 'A faithful Unreal Engine replica of the classic game, featuring various bird abilities and destructible environments.',
        category: ['mobile'],
        image: '/images/project-placeholder-3.jpg',
        url: 'https://nitinnishad23.artstation.com/projects/rlRJle'
      },
     {
        id: 14,
        title: 'Hospital Simulation',
        description: 'A realistic PC simulation where players perform step-by-step blood test procedures in a hospital setting.',
        category: ['pc'],
        image: '/images/project-placeholder-3.jpg',
        url: 'https://nitinnishad23.artstation.com/projects/dyJ2Xx'
      },
     {
        id: 15,
        title: 'VR Library - National Book Trust',
        description: 'An immersive VR experience that lets players explore an ancient library, interact with a librarian, and uncover narrated stories and visual exhibits.',
        category: ['vr'],
        image: '/images/project-placeholder-3.jpg',
        url: 'https://nitinnishad23.artstation.com/projects/nJNKzr'
     }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  useEffect(() => {
    // Animate projects when filter changes
    const projectCards = projectsRef.current.querySelectorAll('.project-card');
    
    gsap.fromTo(
      projectCards,
      { 
        scale: 0.8, 
        opacity: 0 
      },
      { 
        scale: 1, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.5,
        ease: 'power2.out'
      }
    );
  }, [filteredProjects]);

  const handleTilt = (e, cardElement) => {
    if (window.innerWidth <= 768) return;
    
    const card = cardElement;
    const cardBounds = card.getBoundingClientRect();
    const centerX = cardBounds.left + cardBounds.width / 2;
    const centerY = cardBounds.top + cardBounds.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const rotateY = ((mouseX - centerX) / (cardBounds.width / 2)) * 5;
    const rotateX = ((centerY - mouseY) / (cardBounds.height / 2)) * 5;
    
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleTiltExit = (cardElement) => {
    gsap.to(cardElement, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">My Recent <span>Works</span></h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <div className="project-filters">
            {projectFilters.map(filter => (
              <motion.button 
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.name}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="projects-grid" ref={projectsRef}>
          {filteredProjects.slice(0, 6).map(project => (
            <motion.div 
              key={project.id} 
              className="project-card card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              onMouseMove={(e) => handleTilt(e, e.currentTarget)}
              onMouseLeave={(e) => handleTiltExit(e.currentTarget)}
            >
              <div className="project-img">
                {project.image && !project.image.includes('placeholder') ? (
                  <img src={project.image} alt={`${project.title} - Unreal Engine Game Development Project by Nitin Nishad`} />
                ) : (
                  <div className="project-img-placeholder" aria-label={`${project.title} project placeholder`}>
                    {project.category.includes('vr') && (
                      <i className="fas fa-vr-cardboard project-icon" aria-hidden="true"></i>
                    )}
                    {project.category.includes('pc') && !project.category.includes('vr') && (
                      <i className="fas fa-laptop project-icon" aria-hidden="true"></i>
                    )}
                    {project.category.includes('mobile') && !project.category.includes('pc') && (
                      <i className="fas fa-mobile-alt project-icon" aria-hidden="true"></i>
                    )}
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-tags">
                    {project.category.map(cat => (
                      <span key={cat} className="project-tag">
                        {projectFilters.find(f => f.id === cat)?.name}
                      </span>
                    ))}
                  </div>
                  <motion.a 
                    href={project.url || "#"} 
                    className="project-link"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </motion.a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <AnimatedSection delay={0.6}>
          <div className="see-more-container">
            <motion.a 
              href="/all-projects" 
              className="see-more-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>See More Projects</span>
              <i className="fas fa-arrow-right"></i>
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects; 
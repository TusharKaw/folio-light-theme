import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const [skillsRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    { name: 'C++', level: 90 },
    { name: 'Blueprint Programming', level: 95 },
    { name: 'Multiplayer System', level: 95 },
    { name: 'VR Development', level: 90 },
    { name: 'Game Optimization', level: 85 }
  ];

  const toolsSkills = [
    { name: 'Unreal Engine 5', level: 95 },
    { name: 'GitHub', level: 95 },
    { name: 'Visual Studio', level: 90 },
    { name: 'Version Control', level: 95 },
    { name: 'Unity', level: 60 }
  ];

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 300 
      } 
    }
  };

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">My <span>Skills</span></h2>
        </AnimatedSection>
        
        <div className="skills-container">
          <AnimatedSection delay={0.2} className="skills-column">
            <h3 className="skills-subtitle">Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <motion.span 
                      className="skill-percentage"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress" 
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut" 
                      }}
                    />
                    <motion.div 
                      className="skill-progress-glow"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.5 + index * 0.1 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4} className="skills-column">
            <h3 className="skills-subtitle">Tools & Software</h3>
            <div className="skills-grid">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <motion.span 
                      className="skill-percentage"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress" 
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut" 
                      }}
                    />
                    <motion.div 
                      className="skill-progress-glow"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.5 + index * 0.1 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection delay={0.6}>
          <div className="skill-icons">
            <motion.div 
              className="skill-icon"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.2 }}
            >
              <div className="unreal-engine-logo">
                {/* <div className="ue-circle"></div>
                <div className="ue-letter">U</div> */}
              </div>
              <span>Unreal Engine</span>
            </motion.div>
            <motion.div 
              className="skill-icon"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.3 }}
            >
              <i className="fas fa-code"></i>
              <span>C++</span>
            </motion.div>
            <motion.div 
              className="skill-icon"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.4 }}
            >
              <i className="fas fa-vr-cardboard"></i>
              <span>VR</span>
            </motion.div>
            <motion.div 
              className="skill-icon"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.5 }}
            >
              <i className="fas fa-network-wired"></i>
              <span>Multiplayer</span>
            </motion.div>
            <motion.div 
              className="skill-icon"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.6 }}
            >
              <i className="fas fa-cogs"></i>
              <span>Optimization</span>
            </motion.div>
            <motion.div 
              className="skill-icon"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.7 }}
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills; 
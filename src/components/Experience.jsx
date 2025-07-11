import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Game Developer',
      company: 'Botlab Dynamics',
      location: 'New Delhi, India',
      period: 'June 2025 - Present',
      responsibilities: [
        'Contributing to the development of simulation-based experiences using Unreal Engine.',
        'Collaborating with cross-functional teams including firmware engineers and animators to build real-time interactive training systems.',
        'Working on gameplay systems, input control logic, and performance optimization for simulation and VR environments.',
        'Integrating physics-based interactions and realistic movement mechanics using C++ and Blueprint scripting.',
        'Supporting the deployment of Unreal Engine content for drone control simulations.'
      ]
    },
    {
      id: 2,
      position: 'Game Developer',
      company: 'Abhiwan Technology Pvt Ltd',
      location: 'Noida, India',
      period: 'March 2024 - April 2025',
      responsibilities: [
        'Spearheaded the development of multiplayer systems, VR simulations, and game optimization for PC, mobile, and VR platforms.',
        'Led and successfully deployed multiple projects internationally.',
        'Developed and optimized Android and PC multiplayer games, ensuring seamless LAN and Steam networking with high-performance gameplay.',
        'Optimized game performance, reducing memory usage by 30% and increasing FPS by 25% for a smoother experience.',
        'Collaborated with cross-functional teams to lead project execution, manage timelines, and ensure high-quality deliverables.',
        'Provided technical mentorship to junior developers, enhancing team efficiency and project outcomes.'
      ]
    },
    {
      id: 3,
      position: 'Game Developer',
      company: 'Fiverr',
      location: 'Remote',
      period: 'November 2022 - Present',
      responsibilities: [
        'Developed and delivered multiplayer games with seamless LAN and Steam integration, ensuring smooth online experiences.',
        'Designed and implemented gameplay mechanics, AI systems, and networking solutions using C++ and Blueprint programming in Unreal Engine.',
        'Worked closely with clients to understand requirements, provide technical solutions, and deliver high-quality, fully functional games.',
        'Provided post-delivery support and maintenance, optimizing and refining gameplay based on client feedback.'
      ]
    },
    {
      id: 4,
      position: 'Game Developer',
      company: 'Sector Seven Japan',
      location: 'Remote',
      period: 'September 2022 - November 2022',
      responsibilities: [
        'Developed a first-person shooter multiplayer game for PC, utilizing Epic Online Services (EOS) for networking and matchmaking.',
        'Designed and implemented core gameplay mechanics, weapon systems, and player interactions using C++ and Blueprints.',
        'Optimized multiplayer performance, netcode, and replication for smooth gameplay experiences across global servers.',
        'Collaborated with a diverse team to refine game mechanics, enhance visual fidelity, and ensure high-quality user experience.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">My <span>Experience</span></h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content card">
                <div className="timeline-date">
                  <span>{exp.period}</span>
                </div>
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <h5>{exp.location}</h5>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
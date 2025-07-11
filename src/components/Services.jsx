import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'VR Development',
      description: 'Creating immersive VR experiences with Unreal Engine, including locomotion systems, hand tracking, and haptic feedback integration.',
      icon: 'vr-cardboard'
    },
    {
      id: 2,
      title: 'Multiplayer Games',
      description: 'Developing multiplayer game systems using Steam, LAN, and Epic Online Services with robust networking and replication.',
      icon: 'users'
    },
    {
      id: 3,
      title: 'Game Optimization',
      description: 'Performance tuning for PC, mobile, and VR platforms to ensure smooth gameplay experiences with optimized memory usage.',
      icon: 'tachometer-alt'
    },
    {
      id: 4,
      title: 'Architectural Visualization',
      description: 'Creating interactive walkthroughs and architectural visualizations with high-detail real-time rendering in VR.',
      icon: 'building'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">My <span>Expertise</span></h2>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card card">
              <div className="service-icon">
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {/* <div className="service-expand">
                <i className="fas fa-arrow-right"></i>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 
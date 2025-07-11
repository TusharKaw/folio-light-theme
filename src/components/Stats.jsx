import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stat-item">
          <h3>2+</h3>
          <p>Years of<br />Experience</p>
        </div>
        <div className="stat-item">
          <h3>20+</h3>
          <p>Completed<br />Projects</p>
        </div>
        <div className="stat-item">
          <h3>5+</h3>
          <p>VR Training<br />Simulations</p>
        </div>
        <div className="stat-item">
          <h3>10+</h3>
          <p>Multiplayer<br />Games</p>
        </div>
      </div>
    </section>
  );
};

export default Stats; 
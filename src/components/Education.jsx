import React from 'react';
import './Education.css';

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Galgotias College of Engineering and Technology',
      location: 'Greater Noida, India',
      period: '2020 - 2024'
    },
    {
      id: 2,
      degree: 'Science - Intermediate',
      institution: 'Ewing Christian Public School',
      location: 'Prayagraj, India',
      period: '2017 - 2019'
    }
  ];

  const courses = [
    {
      id: 1,
      title: 'VR Development with Unreal Engine',
      institution: 'Udemy',
      period: '2023'
    },
    {
      id: 2,
      title: 'Multiplayer Game Development',
      institution: 'Epic Games Learning Portal',
      period: '2022'
    },
    {
      id: 3,
      title: 'Advanced C++ Programming',
      institution: 'Coursera',
      period: '2022'
    },
    {
      id: 4,
      title: 'Game Design & Optimization',
      institution: 'Udemy',
      period: '2021'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">My <span>Education</span></h2>
        
        <div className="education-container">
          <div className="education-column">
            <h3 className="education-subtitle">Academic Education</h3>
            <div className="education-list">
              {educations.map(edu => (
                <div key={edu.id} className="education-item card">
                  <div className="education-item-header">
                    <span className="education-year">{edu.period}</span>
                    <h4 className="education-degree">{edu.degree}</h4>
                  </div>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-location">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="education-column">
            <h3 className="education-subtitle">Professional Courses</h3>
            <div className="education-list">
              {courses.map(course => (
                <div key={course.id} className="education-item card">
                  <div className="education-item-header">
                    <span className="education-year">{course.period}</span>
                    <h4 className="education-degree">{course.title}</h4>
                  </div>
                  <p className="education-institution">{course.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 
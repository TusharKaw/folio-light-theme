import React from 'react';
import './Blog.css';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import blog1 from  '../assets/blogs/blog1.jpg'
import blog2 from  '../assets/blogs/blog2.jpg'
import blog3 from  '../assets/blogs/blog3.jpg'
import blog4 from  '../assets/blogs/blog4.jpg'
import blog5 from  '../assets/blogs/blog5.webp'

const Blog = () => {

  const readMoreText = "Read More";
  
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Unreal Engine Game Development: My Journey and Insights',
      date: 'May 21, 2025',
      excerpt: 'Dive into VR development with Unreal Engine using motion controllers, haptics, and real-world project examples like Active Shooter and Surgical Simulation.',
      imageUrl: blog1,
      tags: ['Unreal Engine', 'GameDev', 'C++'],
      url: '/blog/floating-pawn-movement'
    },
    {
      id: 2,
      title: 'Building a Multiplayer System in Unreal Engine with Steam & LAN',
      date: 'May 21, 2025',
      excerpt: 'Learn how to build a scalable multiplayer system in Unreal Engine using both Steam and LAN subsystems for online and offline gameplay.',
      imageUrl: blog2,
      tags: ['Unreal Engine', 'GameDev', 'C++'],
      url: '/blog/advanced-css-techniques'
    },
    {
        id: 3,
        title: 'Unreal Engine Replication Pipeline',
        date: 'May 22, 2025',
        excerpt: "Understand how Unreal Engine syncs gameplay across server and clients using its powerful replication pipeline and RPCs.",
        imageUrl: blog3,
        tags: ['Unreal Engine', 'Replication', 'GameDev', 'C++'],
        url: '/blog/advanced-css-techniques'
      },
      {
        id: 4,
        title: 'Getting Started with Virtual Reality in Unreal Engine: Building Immersive Worlds',
        date: 'May 31, 2025',
        excerpt: 'Dive into VR development with Unreal Engine using motion controllers, haptics, and real-world project examples like Active Shooter and Surgical Simulation.',
        imageUrl: blog4,
        tags: ['Unreal Engine', 'GameDev', 'C++'],
        url: '/blog/advanced-css-techniques'
      },
      {
        id: 5,
        title: 'Flying with FloatingPawnMovement in Unreal Engine: A Dronewood Dev Breakdown',
        date: 'May 31, 2025',
        excerpt: 'Discover how I used FloatingPawnMovement to build realistic, responsive drone controls in my game Dronewood.',
        imageUrl: blog5,
        tags: ['Unreal Engine', 'GameDev', 'C++'],
        url: '/blog/advanced-css-techniques'
      },
      {
        id: 6,
        title: 'Using AirSim with Unreal Engine: A Guide to Drone & Autonomous Vehicle Simulation',
        date: 'June 22, 2025',
        excerpt: 'Learn how to set up and use Microsoft AirSim with Unreal Engine to simulate drones and autonomous systems using Python and C++ APIs.',
        imageUrl: blog5,
        tags: ['Unreal Engine', 'GameDev', 'C++'],
        url: '/blog/advanced-css-techniques'
      }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <h2><text /*style={{color:'var(--primary-purple)'}}*/>Blogs</text></h2>
          </div>
        </AnimatedSection>

        <div className="blog-grid">
          {blogPosts.reverse().map((post) => (
            <AnimatedSection key={post.id}>
              <motion.div 
                className="blog-card card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="blog-image">
                  <img src={post.imageUrl} alt={post.title} />
                  <div className="blog-overlay">
                    <div className="blog-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="blog-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href={post.url} className="read-more">
                    {readMoreText}
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
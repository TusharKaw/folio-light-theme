import React, { useState } from 'react';
import './Faqs.css';

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What services do you offer as a developer?",
            answer: "I offer comprehensive web development services including frontend development with React.js, backend development with Node.js, full-stack development, UI/UX design, responsive web design, API development, database design, and website maintenance. I specialize in creating modern, scalable, and user-friendly web applications."
        },
        {
            question: "How long does it typically take to complete a project?",
            answer: "Project timelines vary depending on complexity and scope. A simple website might take 1-2 weeks, while a complex web application could take 2-3 months. I always provide detailed project timelines during the initial consultation and keep clients updated throughout the development process."
        },
        {
            question: "Do you provide ongoing support and maintenance?",
            answer: "Yes, I offer ongoing support and maintenance services to ensure your website or application continues to run smoothly. This includes regular updates, bug fixes, security patches, performance optimization, and technical support. I can create custom maintenance plans based on your specific needs."
        },
        {
            question: "What technologies and frameworks do you work with?",
            answer: "I work with modern technologies including React.js, Node.js, Express.js, MongoDB, PostgreSQL, HTML5, CSS3, JavaScript (ES6+), TypeScript, Git, and various cloud platforms. I stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
        },
        {
            question: "How do you handle project communication and updates?",
            answer: "I maintain transparent communication throughout the project lifecycle. This includes regular progress updates, milestone reviews, and open channels for questions and feedback. I use project management tools to keep track of progress and ensure all stakeholders are informed."
        },
        {
            question: "Do you provide responsive design for mobile devices?",
            answer: "Absolutely! All websites and applications I develop are fully responsive and optimized for all devices including desktops, tablets, and mobile phones. I follow mobile-first design principles to ensure the best user experience across all screen sizes."
        },
        {
            question: "What is your pricing structure?",
            answer: "My pricing is project-based and depends on factors like complexity, features, timeline, and ongoing support requirements. I provide detailed quotes after understanding your specific needs. I offer competitive rates while maintaining high quality standards."
        },
        {
            question: "Do you provide SEO optimization for websites?",
            answer: "Yes, I implement SEO best practices during development including semantic HTML, meta tags, structured data, optimized images, fast loading times, and mobile-friendly design. I can also provide additional SEO services like keyword research and content optimization."
        },
        {
            question: "Can you work with existing websites or only build from scratch?",
            answer: "I can work with both scenarios. I can build new websites from scratch or help improve, redesign, or add features to existing websites. I can also help migrate websites to modern technologies or fix technical issues."
        },
        {
            question: "How do you ensure the security of web applications?",
            answer: "Security is a top priority. I implement security best practices including input validation, secure authentication, HTTPS encryption, regular security updates, and following OWASP guidelines. I also conduct security testing and can provide security audits for existing applications."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="faqs">
            <div className="container">
                <h2 className="section-title">
                    Frequently Asked <span>Questions</span>
                </h2>
                
                <div className="faqs-container">
                    <div className="faqs-list">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <div className="faq-icon">
                                        <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                    </div>
                                </div>
                                <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="faqs-info">
                        <div className="info-card">
                            <div className="info-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3>Still Have Questions?</h3>
                            <p>If you couldn't find the answer you're looking for, feel free to reach out to me directly. I'm always happy to help clarify any concerns or discuss your project requirements in detail.</p>
                            <a href="#contact" className="btn">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;

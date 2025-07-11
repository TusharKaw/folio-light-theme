import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // 🚀 Import SweetAlert2

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [loading, setLoading] = useState(false); // loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Send first email (to admin)
        emailjs
            .sendForm(
                'service_Portfolio',
                'template_d6a240x',
                e.target,
                'vLK8Grz9nw7AsQLNY'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        // Send second email (confirmation to sender)
        emailjs
            .sendForm(
                'service_Portfolio',
                'template_atv3uwd',
                e.target,
                'vLK8Grz9nw7AsQLNY'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setLoading(false);

                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent!',
                        //text: 'Thank you for reaching out. I will contact you soon.',
                        showConfirmButton: false,
                        timer: 2500,
                        timerProgressBar: true,
                    });

                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    });
                },
                (error) => {
                    console.log(error.text);
                    setLoading(false);

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Please try again later.',
                    });
                }
            );
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">
                    Contact <span>Me</span>
                </h2>

                <div className="contact-container">
                    <div className="contact-info">
                        {/* Your contact info section (unchanged) */}
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Email</h3>
                                <p>nishad.nitin23@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Phone</h3>
                                <p>+91 9455473380</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Location</h3>
                                <p>Prayagraj, India</p>
                            </div>
                        </div>

                        <div className="contact-social">
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

                    <div className="contact-form-container">
                        <form className="contact-form card" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="6"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

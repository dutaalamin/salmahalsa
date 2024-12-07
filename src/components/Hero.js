import React from 'react';
import profileImage from '../images/salma.jpg';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-header">
              <h1>
                <span className="gradient-text">
                  Salma Halsa
                </span>
              </h1>
              <p className="hero-description">
                Professional Makeup Artist with expertise in bridal, special occasions, and creative looks. 
                Dedicated to enhancing natural beauty and creating flawless, long-lasting makeup 
                using premium products and proven techniques. Your confidence is my priority.
              </p>
            </div>

            <div className="hero-social">
              <a 
                href="https://wa.me/6289519404032" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/salma-halimatus-sadiyah-353897323/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://instagram.com/salmahalsa.mua" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>

            <div className="hero-cta">
              <a 
                href="#portfolio" 
                className="cta-button primary"
              >
                View Portfolio
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <img src={profileImage} alt="Duta Alamin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

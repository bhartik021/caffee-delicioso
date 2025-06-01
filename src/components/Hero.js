import React from 'react';
import cafeImage from '../assets/caffee_delicioso.webp';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-particles"></div>
      <div className="container position-relative">
        <div className="row align-items-center min-vh-90">
          <div className="col-lg-6 hero-content text-start" data-aos="fade-right">
            <div className="badge-container mb-4">
              <span className="hero-badge">
                <i className="fas fa-star-half-alt"></i>
                4.9 Rating on Google
              </span>
              <span className="hero-badge">
                <i className="fas fa-award"></i>
                Best Café 2024
              </span>
            </div>
            <h1 className="hero-title">
              <span className="text-white">Experience the Art of</span>
              <span className="text-gold">Perfect Coffee</span>
            </h1>
            <p className="hero-description">
              Where every cup tells a story and every visit becomes a memory.
              <br />
              Join us in our cozy corner of coffee paradise.
            </p>
            <div className="hero-cta">
              <a href="#menu" className="btn btn-custom btn-lg">
                Explore Menu
                <i className="fas fa-arrow-right ms-2"></i>
              </a>
              <a href="#about" className="btn btn-outline-light btn-lg">
                Our Story
                <i className="fas fa-heart ms-2"></i>
              </a>
            </div>
            <div className="hero-features">
              <div className="feature-item">
                <i className="fas fa-coffee"></i>
                <span>Premium Beans</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-clock"></i>
                <span>Open Daily</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-wifi"></i>
                <span>Free WiFi</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 hero-visual" data-aos="fade-left">
            <div className="hero-image-container">
              <img 
                src={cafeImage}
                alt="Caffee Delicioso" 
                className="main-image"
              />
              <div className="image-overlay"></div>
              <div className="floating-badge">
                <i className="fas fa-arrow-right"></i>
                <span>Visit Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 
import React from 'react';
import logo from '../assets/logo.jpeg';

function Footer() {
  return (
    <footer className="footer py-5">
      <div className="footer-top-border"></div>
      <div className="container">
        <div className="row g-4 justify-content-between">
          {/* About Column */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-section">
              <div className="footer-brand mb-4">
                <img src={logo} alt="Caffee Delicioso" className="footer-logo" />
              </div>
              <p className="footer-about">
                Where passion meets perfection in every cup. Experience the finest coffee, 
                delectable treats, and warm hospitality in the heart of Pune.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-section">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Our Menu</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <h5 className="footer-title">Contact Info</h5>
              <ul className="footer-contact">
                <li>
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    Shop 1, Pan Card Club Road<br />
                    Baner, Pune, Maharashtra
                  </div>
                </li>
                <li>
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <a href="tel:+917507657070">+91 7507657070</a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <a href="mailto:info@caffeedelicioso.com">info@caffeedelicioso.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <h5 className="footer-title">Opening Hours</h5>
              <div className="hours-card">
                <ul className="footer-hours">
                  <li>
                    <span className="hours-label">Late Night:</span>
                    <span className="hours-value">12:00 AM - 2:00 AM</span>
                  </li>
                  <li>
                    <span className="hours-label">Regular Hours:</span>
                    <span className="hours-value">8:45 AM - 12:00 AM</span>
                  </li>
                  <li>
                    <span className="hours-label">Days:</span>
                    <span className="hours-value">Open All Days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">&copy; 2024 Caffee Delicioso. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <nav className="footer-legal-nav">
                <a href="/privacy-policy" className="me-3">Privacy Policy</a>
                <a href="/terms-of-service" className="me-3">Terms of Service</a>
                <a href="#contact">Contact Us</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
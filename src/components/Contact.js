import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center mb-5">
            <h2 className="section-title display-4">Contact Us</h2>
            <p className="lead">We'd love to hear from you!</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="contact-card">
              <div className="map-container">
                <iframe
                  title="Cafe Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8901066079837!2d73.7755!3d18.5596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf40bef092f1%3A0x22137a8a65b9b2c9!2sPan%20Card%20Club%20Rd%2C%20Baner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629890000000!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-md-4 mb-4">
            <div className="contact-card h-100">
              <div className="card-body">
                <div className="text-center mb-4">
                  <i className="fas fa-map-marker-alt fs-1 mb-3"></i>
                  <h3 className="card-title h4">Visit Us</h3>
                </div>
                <div className="contact-info">
                  <p className="card-text">
                    <strong>Address:</strong><br />
                    Shop 1, Pan Card Club Road<br />
                    Baner, Pune<br />
                    Maharashtra, India
                  </p>
                  <p className="card-text">
                    <strong>Hours:</strong><br />
                    Monday - Sunday:<br />
                    12:00 AM - 2:00 AM<br />
                    8:45 AM - 12:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="col-md-4 mb-4">
            <div className="contact-card h-100">
              <div className="card-body">
                <div className="text-center mb-4">
                  <i className="fas fa-phone-alt fs-1 mb-3"></i>
                  <h3 className="card-title h4">Contact Info</h3>
                </div>
                <div className="contact-info">
                  <p className="card-text">
                    <strong>Phone:</strong><br />
                    <a href="tel:+917507657070" className="text-decoration-none">
                      +91 7507657070
                    </a>
                  </p>
                  <p className="card-text">
                    <strong>Email:</strong><br />
                    <a href="mailto:info@caffeedelicioso.com" className="text-decoration-none">
                      info@caffeedelicioso.com
                    </a>
                  </p>
                  <div className="social-links mt-4">
                    <h5 className="h6 mb-3">Follow Us:</h5>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-4 mb-4">
            <div className="contact-card h-100">
              <div className="card-body">
                <div className="text-center mb-4">
                  <i className="fas fa-envelope fs-1 mb-3"></i>
                  <h3 className="card-title h4">Send a Message</h3>
                </div>
                <form>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Your Email" 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <select className="form-select">
                      <option value="">Select Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Table Reservation</option>
                      <option value="catering">Catering Services</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea 
                      className="form-control" 
                      rows="4" 
                      placeholder="Your Message" 
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-custom w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 
import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-particles"></div>
      <div className="container position-relative">
        <div className="row align-items-center min-vh-90">
          <div className="col-lg-6 hero-content" data-aos="fade-right">
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
              Experience the Art of
              <span className="hero-highlight">Perfect Coffee</span>
            </h1>
            <p className="hero-description">
              Where every cup tells a story and every visit becomes a memory.
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
            <div className="coffee-cup">
              <div className="coffee-icon">
                <i className="fas fa-mug-hot"></i>
              </div>
              <div className="coffee-liquid"></div>
              <div className="steam">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="floating-elements">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3" alt="Coffee" className="float-1" />
              <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3" alt="Latte" className="float-2" />
              <img src="https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3" alt="Cappuccino" className="float-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 
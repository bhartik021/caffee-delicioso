import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-title display-4">Our Story</h2>
            <p className="lead mb-4">
              Founded in 2024, Caffee Delicioso was born from a passion for exceptional coffee and a desire to create a space where community meets craftsmanship.
            </p>
            <p className="mb-5">
              Every bean we source, every drink we craft, and every pastry we bake is a testament to our commitment to quality and authenticity. 
              We believe in creating not just beverages, but experiences that bring people together.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="feature-card text-center">
              <div className="mb-4">
                <i className="fas fa-coffee fs-1"></i>
              </div>
              <h4 className="h5 mb-3">Artisanal Coffee</h4>
              <p className="mb-0">Carefully selected beans from sustainable farms, roasted to perfection in small batches</p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="feature-card text-center">
              <div className="mb-4">
                <i className="fas fa-heart fs-1"></i>
              </div>
              <h4 className="h5 mb-3">Crafted with Love</h4>
              <p className="mb-0">Each drink is handcrafted by our skilled baristas who are passionate about their craft</p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="feature-card text-center">
              <div className="mb-4">
                <i className="fas fa-users fs-1"></i>
              </div>
              <h4 className="h5 mb-3">Community First</h4>
              <p className="mb-0">A welcoming space where friends gather, work gets done, and memories are made</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 
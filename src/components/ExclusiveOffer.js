import React from 'react';

function ExclusiveOffer() {
  return (
    <section id="offer" className="exclusive-offer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="offer-content">
              <span className="offer-badge">Limited Time Offer</span>
              <h2 className="offer-title">
                Special Duo Deal
                <span className="offer-highlight">Two Coffees for ₹300</span>
              </h2>
              <p className="offer-description">
                Bring a friend and enjoy any two coffees from our premium selection at a special price. 
                Perfect for coffee dates and friendly catch-ups!
              </p>
              <ul className="offer-features">
                <li>
                  <i className="fas fa-check-circle"></i>
                  Valid on all premium coffee selections
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Available all day
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Perfect for sharing
                </li>
              </ul>
              <a href="#menu" className="btn btn-custom">
                View Menu <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="offer-image">
              <div className="coffee-cup coffee-cup-1">
                <img 
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80" 
                  alt="Coffee cup 1"
                />
              </div>
              <div className="coffee-cup coffee-cup-2">
                <img 
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Coffee cup 2"
                />
              </div>
              <div className="offer-price">
                <span className="price-tag">₹300</span>
                <span className="price-text">for two</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExclusiveOffer; 
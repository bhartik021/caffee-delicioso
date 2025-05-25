import React from 'react';

function PopularNow() {
  const popularItems = [
    {
      name: "House Special Filter Coffee",
      price: "₹180",
      description: "Our signature South Indian filter coffee blend",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3",
      badge: "Best Seller",
      rating: 4.9,
      reviews: 128
    },
    {
      name: "Rose Cardamom Latte",
      price: "₹260",
      description: "Signature drink with cardamom and rose",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3",
      badge: "Staff Pick",
      rating: 4.8,
      reviews: 96
    },
    {
      name: "Caramel Cappuccino",
      price: "₹220",
      description: "Rich espresso with vanilla and caramel",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3",
      badge: "Trending",
      rating: 4.7,
      reviews: 156
    },
    {
      name: "Iced Mocha",
      price: "₹240",
      description: "Cold brew with chocolate and cream",
      image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3",
      badge: "New",
      rating: 4.6,
      reviews: 84
    },
    {
      name: "Masala Chai",
      price: "₹160",
      description: "Traditional spiced Indian tea",
      image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3",
      badge: "Classic",
      rating: 4.8,
      reviews: 212
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <i 
            key={star}
            className={`fas fa-star ${star <= rating ? 'filled' : 'empty'}`}
          ></i>
        ))}
      </div>
    );
  };

  return (
    <section className="popular-now-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Popular Now</h2>
          <p className="section-subtitle">Our most loved items, chosen by our customers</p>
        </div>
        <div className="row g-3">
          {popularItems.map((item, index) => (
            <div key={index} className="col-xl-2-4 col-lg-3 col-md-4 col-sm-6">
              <div className="popular-card">
                <div className="popular-image">
                  <img src={item.image} alt={item.name} />
                  <span className="popular-badge">
                    <i className={
                      item.badge === "Best Seller" ? "fas fa-crown" :
                      item.badge === "Staff Pick" ? "fas fa-award" :
                      item.badge === "Trending" ? "fas fa-fire" :
                      item.badge === "New" ? "fas fa-star" :
                      "fas fa-heart"
                    }></i>
                    {item.badge}
                  </span>
                </div>
                <div className="popular-content">
                  <h3 className="popular-title">{item.name}</h3>
                  <div className="popular-rating">
                    {renderStars(item.rating)}
                    <span className="rating-text">
                      {item.rating}
                    </span>
                  </div>
                  <p className="popular-description">{item.description}</p>
                  <div className="popular-footer">
                    <span className="popular-price">{item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularNow; 
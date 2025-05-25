import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "The ambience is absolutely stunning! Perfect blend of modern café aesthetics with cozy corners. The natural lighting and green elements make it a perfect spot for both work and relaxation.",
      highlight: "Ambience",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Rahul Mehta",
      rating: 5,
      comment: "Generous portion sizes that justify the price point. The Masala Cheese Toast and Acai Bowl are particularly impressive. Perfect for sharing or a hearty meal.",
      highlight: "Portion Size",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Anjali Desai",
      rating: 4,
      comment: "Great value for money considering the quality of ingredients and the premium experience. The House Special Filter Coffee is reasonably priced and absolutely delicious!",
      highlight: "Value for Money",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      name: "Arjun Kapoor",
      rating: 5,
      comment: "The service is exceptional! The staff is knowledgeable about their coffee and always ready with great recommendations. They make you feel like family.",
      highlight: "Service",
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      name: "Meera Patel",
      rating: 5,
      comment: "The food quality is consistently excellent. Fresh ingredients, beautiful presentation, and authentic flavors. The Mawa Cake is to die for!",
      highlight: "Food",
      image: "https://randomuser.me/api/portraits/women/5.jpg"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
      ></i>
    ));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="testimonials-section py-5">
      <div className="container">
        <h2 className="section-title display-4">What People Say</h2>
        <p className="lead text-center mb-5">Known for our exceptional experience in:</p>
        
        <div className="highlights-row text-center mb-5">
          <div className="row g-4 justify-content-center">
            {["Ambience", "Portion Size", "Value for Money", "Service", "Food"].map((highlight, index) => (
              <div key={index} className="col-6 col-md-auto">
                <span className="highlight-badge">
                  <i className="fas fa-check-circle me-2"></i>
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-slider">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="testimonial-image"
                    />
                    <div className="testimonial-info">
                      <h5 className="mb-1">{testimonial.name}</h5>
                      <div className="testimonial-rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-highlight">
                    <span className="highlight-tag">
                      {testimonial.highlight}
                    </span>
                  </div>
                  <p className="testimonial-text">
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 
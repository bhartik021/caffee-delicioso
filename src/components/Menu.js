import React from 'react';

function Menu() {
  const menuItems = {
    coffee: [
      {
        name: 'House Special Filter Coffee',
        price: '₹180',
        description: 'Our signature South Indian filter coffee blend, perfectly brewed and served traditional style'
      },
      {
        name: 'Caramel Cappuccino',
        price: '₹220',
        description: 'Rich espresso with steamed milk, vanilla syrup, and house-made caramel drizzle'
      },
      {
        name: 'Cold Brew',
        price: '₹200',
        description: '24-hour slow-steeped coffee served over ice, smooth and refreshing'
      },
      {
        name: 'Hazelnut Latte',
        price: '₹240',
        description: 'Smooth espresso with steamed milk and premium hazelnut syrup'
      }
    ],
    specialty: [
      {
        name: 'Masala Chai',
        price: '₹160',
        description: 'Premium Assam tea with fresh-ground spices and herbs, served with or without milk'
      },
      {
        name: 'Rose Cardamom Latte',
        price: '₹260',
        description: 'Signature drink with espresso, cardamom, rose syrup, and steamed milk'
      },
      {
        name: 'Mango Mint Frappé',
        price: '₹280',
        description: 'Seasonal Alphonso mango blended with fresh mint and ice cream'
      },
      {
        name: 'Kesar Pista Tea',
        price: '₹190',
        description: 'Saffron and pistachio infused premium tea with milk'
      }
    ],
    pastries: [
      {
        name: 'Butter Croissant',
        price: '₹180',
        description: 'Flaky, layered croissant made with premium French butter'
      },
      {
        name: 'Chocolate Truffle Pastry',
        price: '₹220',
        description: 'Rich chocolate sponge with dark chocolate ganache and chocolate shavings'
      },
      {
        name: 'Mawa Cake',
        price: '₹160',
        description: 'Traditional Parsi-style mawa cake with cardamom and nuts'
      },
      {
        name: 'Fresh Fruit Danish',
        price: '₹200',
        description: 'Buttery danish pastry topped with seasonal fresh fruits and vanilla glaze'
      }
    ],
    brunch: [
      {
        name: 'Masala Cheese Toast',
        price: '₹280',
        description: 'Grilled sourdough with spiced potato, corn, bell peppers, and premium cheese blend'
      },
      {
        name: 'Mediterranean Shakshuka',
        price: '₹320',
        description: 'Eggs poached in spiced tomato sauce, served with artisanal bread'
      },
      {
        name: 'Acai Power Bowl',
        price: '₹340',
        description: 'Blended acai, granola, fresh fruits, honey, and chia seeds'
      },
      {
        name: 'Pesto Panini',
        price: '₹290',
        description: 'Grilled focaccia with house-made basil pesto, mozzarella, tomatoes, and rocket leaves'
      }
    ]
  };

  return (
    <section id="menu" className="menu-section py-5">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="menu-card">
              <h3 className="h4 mb-4 text-start">Specialty Coffee</h3>
              <div className="menu-items-container">
                {menuItems.coffee.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="menu-item-content">
                      <div className="menu-item-info">
                        <h5 className="menu-item-title">{item.name}</h5>
                        <p className="menu-item-description">{item.description}</p>
                      </div>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mb-4">
            <div className="menu-card">
              <h3 className="h4 mb-4 text-start">Specialty Drinks</h3>
              <div className="menu-items-container">
                {menuItems.specialty.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="menu-item-content">
                      <div className="menu-item-info">
                        <h5 className="menu-item-title">{item.name}</h5>
                        <p className="menu-item-description">{item.description}</p>
                      </div>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="menu-card">
              <h3 className="h4 mb-4 text-start">Fresh Pastries</h3>
              <div className="menu-items-container">
                {menuItems.pastries.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="menu-item-content">
                      <div className="menu-item-info">
                        <h5 className="menu-item-title">{item.name}</h5>
                        <p className="menu-item-description">{item.description}</p>
                      </div>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="menu-card">
              <h3 className="h4 mb-4 text-start">Brunch</h3>
              <div className="menu-items-container">
                {menuItems.brunch.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="menu-item-content">
                      <div className="menu-item-info">
                        <h5 className="menu-item-title">{item.name}</h5>
                        <p className="menu-item-description">{item.description}</p>
                      </div>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu; 
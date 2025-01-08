import React from 'react';
import './Header.css';

const Header = () => {
  const handleViewMenuClick = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header' style={{ backgroundImage: `url('/header_img2.png')` }}>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Embark on a culinary adventure with our tantalising food website! 
          Join us as we celebrate the art of delicious dining!
        </p>
        <button aria-label="View Menu" onClick={handleViewMenuClick}>
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;

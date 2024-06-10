import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const [showBars, setShowBars] = useState(false);

  function handleToggleBars() {
    setShowBars(!showBars);
  }

  return (
    <div className='container'>
      <div onClick={handleToggleBars}>
        {!showBars ? (
          <i id='menuicon' className="fa-solid fa-bars"></i>
        ) : (
          <i id='xicon' className="fa-solid fa-xmark"></i>
        )}
        {showBars && <MobileNav />}
        
      </div>
      <div className='logo'>
        <Link to="/">Logo</Link>
      </div>
      <div className='bars'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/feature">Feature</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className='regButton'>
        <button> <Link to="/auth">Login</Link></button>
        <button>Register</button>
      </div>

      
    </div>
  );
};

export default Header;

function MobileNav() {
  return (
    <ul className='navitemmobile'>
      <li><Link to="/" className='bar'>HOME</Link></li>
      <li><Link to="/about" className='bar'>ABOUT</Link></li>
      <li><Link to="/feature" className='bar'>FEATURE</Link></li>
      <li><Link to="/service" className='bar'>SERVICE</Link></li>
      <li><Link to="/contact" className='bar'>CONTACT US</Link></li>
    </ul>
  );
}

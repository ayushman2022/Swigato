import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-top">
        <img src={assets.newlogo} alt="Logo" className="footer-logo" />
        <p className="footer-description">
          For better experience, download the Swigato app now.
        </p>
        <div className="footer-app-links">
          <img src={assets.app_store} alt="App Store" />
          <img src={assets.play_store} alt="Google Play" />
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Swigato Corporate</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="footer-social-links">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="Linkedin" />
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2024 Swigato Limited</p>
        <p>Available in 1 cities</p>
      </div>
    </div>
  );
};

export default Footer;

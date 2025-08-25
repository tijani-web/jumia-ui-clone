import { RiFacebookFill, RiInstagramLine, RiTwitterXLine } from '@remixicon/react';
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / About */}
        <div className="footer-section">
          <h2 className="footer-logo">Jumify</h2>
          <p>
            Discover amazing products at unbeatable prices. Shop smart, live
            better.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@jumify.com</p>
          <p>Phone: +234 801 234 5678</p>
          <p>Address: Lagos, Nigeria</p>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Stay Updated</h3>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="footer-socials">
            <a href="#"><RiFacebookFill /></a>
            <a href="#"><RiInstagramLine /></a>
            <a href="#"><RiTwitterXLine /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Jumify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer
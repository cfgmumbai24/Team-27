import React from 'react';
import './Footer.css'; // Import CSS for styling
import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
              <strong>Phone:</strong> +91 0987654321
            </p>
            <p>
              {/* <strong>Head Office:</strong><br />
              971 Vishal Nagar,<br />
              Pimpalgaon Road Yavatmal,<br />
              Maharashtra, Pin code: 445001 */}
            </p>
          </div>
          <div className="footer-section">
            <h3>Links</h3>
            <ul className="footer-links">
              {/* <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/refund-policy">Refund Policy</a></li> */}
              <li><a href="/refund-policy">Terms of Conditions</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/eklavyaindiafoundation/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/eklavyaindiafoundation/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.youtube.com/@EklavyaIndiaFoundation" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Eklavya India Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

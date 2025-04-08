import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-column">
        <span>Developed by </span>
        <a href="https://github.com/jgudo" target="_blank" rel="noopener noreferrer">
          JULIUS GUEVARRA
        </a>
      </div>

      <div className="footer-center">
        <img
          src={`${process.env.PUBLIC_URL}/image/logo-full.png`}
          alt="Salinaka Logo"
          className="footer-logo"
        />
        <p className="footer-year">© 2025</p>
      </div>

      <div className="footer-column">
        <span>Fork this project </span>
        <a href="https://github.com/jgudo/ecommerce-react" target="_blank" rel="noopener noreferrer">
          HERE
        </a>
      </div>
    </footer>
  );
};

export default Footer;

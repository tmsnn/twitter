import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
      <h3 className='bold'>About Us</h3>
        <p> Better than twitter!</p>
      </div>
      <div className="footer-section">
      <h3 className='bold'>Help</h3>
        <p>If you have any questions, please fix it by yourself:</p>
        <p>twitterhelp.kz</p>
      </div>
      <div className="footer-section">
      <h3 className='bold'>Contacts</h3>
        <address>
          <p>in your heart!</p>
          <p>email: twitter.kz</p>
        </address>
      </div>
    </footer>
  );
}

export default Footer;

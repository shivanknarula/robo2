import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Newsletter subscription:', { email });
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="newsletter-section">
          <h3>Join Our Newsletter</h3>
          
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              aria-label="Email for newsletter"
            />
            <button type="submit" aria-label="Subscribe to newsletter">
              Subscribe
            </button>
          </form>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="#who-we-are">Who We Are</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <p className="footer-text">© 2025 ROBROS-NEXT All rights reserved.</p>
    </footer>
  );
};

export default Footer;
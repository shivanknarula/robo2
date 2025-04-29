import React from 'react';
import '../styles/contact-us.css';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };
    console.log('Contact form submission:', formData);
    e.target.reset();
  };

  return (
    <div className="contact-us-container">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Reach out to discuss your automation needs or request a quote.</p>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-wrapper">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                placeholder="Your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                placeholder="Your email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                placeholder="Tell us about your needs"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="cta-button" aria-label="Submit contact form">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            <i className="fas fa-phone"></i> +86 19381626253
          </p>
          <p>
            <i className="fas fa-envelope"></i>{' '}
            <a href="mailto:sales@evsrobot.com">sales@evsrobot.com</a>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> EVS Tech Co., Ltd., China
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
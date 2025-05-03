import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/contact-us.css';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      company: e.target.company.value,
      country: e.target.country.value,
      state: e.target.state.value,
      salesContact: e.target.salesContact.value,
      message: e.target.message.value,
      agreement: e.target.agreement.checked,
    };
    console.log('Contact form submission:', formData);
    e.target.reset();
  };

  return (
    <div className="contact-us-page">
      <div className="content-wrapper">
        {/* Header */}
        <div className="text-center">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Automation transformation is a collective effort. Let’s do it together.</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="coopfit-box">
          {/* Two-column grid for First Name and Last Name */}
          <div className="coopfit-item col-50 mt-20" wrap="">
            <input
              type="text"
              name="firstName"
              required
              aria-required="true"
              placeholder="First Name *"
              className="form-input white fz-14"
              maxLength="255"
            />
          </div>
          <div className="coopfit-item col-50 mt-20" wrap="">
            <input
              type="text"
              name="lastName"
              required
              aria-required="true"
              placeholder="Last Name *"
              className="form-input white fz-14"
              maxLength="255"
            />
          </div>

          {/* Two-column grid for Phone Number and Business Email */}
          <div className="coopfit-item col-50 mt-20" wrap="">
            <input
              type="tel"
              name="phone"
              required
              aria-required="true"
              placeholder="Phone Number *"
              className="form-input white fz-14"
              maxLength="255"
            />
          </div>
          <div className="coopfit-item col-50 mt-20" wrap="">
            <input
              type="email"
              name="email"
              required
              aria-required="true"
              placeholder="Business Email *"
              className="form-input white fz-14"
              maxLength="255"
            />
          </div>

          {/* Two-column grid for Company and Country */}
          <div className="coopfit-item col-50 mt-20" wrap="">
            <input
              type="text"
              name="company"
              required
              aria-required="true"
              placeholder="Company *"
              className="form-input white fz-14"
              maxLength="255"
            />
          </div>
          <div className="coopfit-item col-50 mt-20" wrap="">
            <select
              name="country"
              required
              aria-required="true"
              className="form-input white fz-14"
            >
              <option value="" disabled selected>Country *</option>
              <option value="USA">USA</option>
              <option value="China">China</option>
              <option value="India">India</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          {/* Two-column grid for State/Province and Sales Contact */}
          <div className="coopfit-item col-50 mt-20" wrap="">
            <input
              type="text"
              name="state"
              placeholder="State/Province"
              className="form-input white fz-14"
              maxLength="255"
            />
          </div>
          <div className="coopfit-item col-50 mt-20" wrap="">
            <select
              name="salesContact"
              required
              aria-required="true"
              className="form-input white fz-14"
            >
              <option value="" disabled selected>Sales Contact *</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div className="coopfit-item col-50 mt-20" wrap="" style={{ width: '100%' }}>
            <textarea
              name="message"
              required
              aria-required="true"
              placeholder="Please include relevant information to help us better respond to your request *"
              rows="4"
              className="form-input white fz-14"
              style={{ width: '100%', resize: 'vertical' }}
            ></textarea>
          </div>

          {/* Agreement Checkbox */}
          <div className="coopfit-item col-50 mt-20" wrap="" style={{ width: '100%' }}>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                name="agreement"
                required
                aria-required="true"
                className="checkbox-input"
              />
              <label htmlFor="agreement" className="checkbox-label">
                I have read & agree to the{' '}
                <Link to="/user-agreement" className="link">User Registration Agreement</Link>{' '}
                &{' '}
                <Link to="/privacy-statement" className="link">Privacy Statement</Link>{' '}
                of Dobot Robotics <span className="required-asterisk">*</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-20">
            <button
              type="submit"
              className="submit-button"
              aria-label="Submit contact form"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Social Media Icons */}
        <div className="text-center mt-20">
          <p className="social-title">Follow Us</p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com" aria-label="X" className="social-icon">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Chat Button */}
        <button
          className="chat-button"
          aria-label="Open chat"
        >
          <i className="fas fa-comment-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
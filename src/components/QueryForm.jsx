import React, { useState } from 'react';
import '../styles/QueryForm.css';

function QueryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    website: '',
    country: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Query Form Data:', formData);
    // In a real app, replace with an API call, e.g.:
    // fetch('/api/quote', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log('Success:', data))
    //   .catch((err) => console.error('Error:', err));
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      website: '',
      country: '',
      message: '',
    });
  };

  return (
    <div className="query-form-container">
      <div className="query-form-header">
        <h2>Get A Quote</h2>
      </div>
      <p className="query-form-subtext">
        {/* If you have questions or suggestions, please leave us a message, we will reply you as soon as we can! */}
      </p>
      <div className="query-form-grid">
        <div className="query-form-field">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </label>
        </div>
        <div className="query-form-field">
          <label>
            Phone/WhatsApp *
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone/WhatsApp"
              required
            />
          </label>
        </div>
        <div className="query-form-field">
          <label>
            Email *
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </label>
        </div>
        <div className="query-form-field">
          <label>
            Company *
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              required
            />
          </label>
        </div>
        <div className="query-form-field">
          <label>
            Website *
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website"
              required
            />
          </label>
        </div>
        <div className="query-form-field">
          <label>
            Country *
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              required
            />
          </label>
        </div>
        <div className="query-form-field query-form-message">
          <label>
            Message *
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
          </label>
        </div>
      </div>
      <button className="query-form-submit" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}

export default QueryForm;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    terms: false
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(''); // Error message state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terms) {
      setError('You must agree to the terms and conditions to submit.');
      return;
    }
    setError(''); // Clear error if checkbox is checked
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-row">
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="firstName">Full Name</label>
            <input
              type="text"
              id="FullName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
        </div>

        <div className="input-container address">
          <label htmlFor="address1">Address</label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            placeholder="1234 Main St"
            required
          />
        </div>
        <div className="input-container address">
          <label htmlFor="address2">Address2</label>
          <input
            type="text"
            id="address2"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Apartment, studio, or floor"
          />
        </div>

        <div className="input-row"> {/* Flex container for City, Province, and Postal Code */}
          <div className="input-container">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="province">Province</label>
            <select
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              <option value="ON">Ontario</option>
              {/* Add other provinces here */}
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
              required
            />
          </div>
        </div>

        <div className="terms-container">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          <label htmlFor="terms">Agree to Terms & Conditions?</label>
        </div>

        {error && <p className="error-message">{error}</p>} {/* Error message */}

        <div className="submit-container">
          <input type="submit" value="Submit" />
        </div>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information</h2>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Full Name:</strong> {submittedData.firstName}</p>
          <p><strong>Address:</strong> {submittedData.address1}</p>
          <p><strong>Address2:</strong> {submittedData.address2}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;

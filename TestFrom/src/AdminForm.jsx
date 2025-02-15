import React, { useState } from 'react';
import './AdminForm.css'; // Import the CSS file

const AdminForm = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showSecurityKey, setShowSecurityKey] = useState(false); // State to toggle security key visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const toggleSecurityKeyVisibility = () => {
    setShowSecurityKey(!showSecurityKey); // Toggle security key visibility
  };

  return (
    <div className="admin-form-wrapper">
      {/* Left Section with Gradient Background */}
      <div className="admin-left-section">
        {/* Logo Image */}
        <div className="admin-logo">
          <img src="imagelogoutopia.png" alt="Logo" />
        </div>

        {/* Image placed outside the container */}
        <div className="admin-login-image">
          <img src="../holoimage.png" alt="Login Visual" />
        </div>
      </div>

      {/* Right Section with Admin Login Form */}
      <div className="admin-right-section">
        <div className="admin-login-box">
          <h2 style={{color: "#8b0000"}}>Admin Log in</h2>
          <form className="admin-login-form">
            <div className="admin-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="admin-form-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"} // Toggle input type
                id="password"
                name="password"
                required
              />
              <a href="#show-password" className="admin-show-password" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </a>
            </div>
            <div className="admin-form-group">
              <label htmlFor="security-key">Security Key</label>
              <input
                type={showSecurityKey ? "text" : "password"} // Toggle input type
                id="security-key"
                name="security-key"
                required
              />
              <a href="#show-security-key" className="admin-show-password" onClick={toggleSecurityKeyVisibility}>
                {showSecurityKey ? "Hide" : "Show"}
              </a>
            </div>
            <a href="#forgot-password" className="admin-forgot-password">Forget your password?</a>
            <button type="submit" className="admin-login-button">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
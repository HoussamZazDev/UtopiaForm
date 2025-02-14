import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleAdminLogin = () => {
    // Redirect to admin login form (you can implement this logic)
    console.log("Redirecting to admin login form...");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div className="login-wrapper">
      {/* Left Section with Gradient Background */}
      <div className="left-section">
        {/* Logo Image */}
        <div className="logo">
          <img src="imagelogoutopia.png" alt="Logo" />
        </div>

        {/* Image placed outside the container */}
        <div className="login-image">
          <img src="../holoimage.png" alt="Login Visual" />
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="right-section">
        <div className="login-box">
          <h2 style={{color: "#8b0000"}}>Log in</h2>
          <button className="social-login google">Continue with Google</button>
          <button className="social-login twitter">Continue with Twitter</button>
          <button className="admin-login-button" onClick={handleAdminLogin}>
            Log in as Admin
          </button>

          {/* Separator with "or" text */}
          <div className="separator">
            <hr className="separator-line" />
            <span className="separator-text">OR</span>
            <hr className="separator-line" />
          </div>

          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"} // Toggle input type
                id="password"
                name="password"
                required
              />
              <a href="#show-password" className="show-password" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </a>
            </div>
            <a href="#forgot-password" className="forgot-password">Forget your password?</a>
            <button type="submit" className="login-button">Log in</button>
          </form>
          <div className="sign-up">
            <span>Don't have an account? <a href="#sign-up">Sign up</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
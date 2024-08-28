import React, { useState } from 'react';
import axios from 'axios';
import LandingPage from '../LandingPage';
import { Link, useNavigate } from "react-router-dom";
import './index.css'
function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include a special character.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/user/login', { email, password });
      if (response.data.success) {
        navigate('/')
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Error during login. Please try again.');
    }
  };

  return (
    <div className='login-contaner'>
      <div className='lg'>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}

export default UserLogin;

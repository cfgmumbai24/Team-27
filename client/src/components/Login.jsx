import React, { useState } from 'react';
import axios from 'axios';
import './LoginPopup.css';
import cross_icon from '../assets/cross_icon.png';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Sign Up');
  const [userRole, setUserRole] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleRoleSelection = (role) => {
    setUserRole(role);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = currState === 'Sign Up' ? 'http://localhost:3001/api/signup' : 'http://localhost:3001/api/login';
    axios.post(url, formValues)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='login-popup'>
      {userRole ? (
        <form onSubmit={handleSubmit} className="login-popup-container">
          <div className="login-popup-title">
            <h2>{`${currState} as ${userRole}`}</h2>
            <img onClick={() => setShowLogin(false)} src={cross_icon} alt="Close" />
          </div>
          <div className="login-popup-input">
            {currState === 'Login' ? null : <input type="text" name="name" placeholder='Your Name' value={formValues.name} onChange={handleChange} required />}
            <input type="email" name="email" placeholder='Your Email' value={formValues.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder='Your Password' value={formValues.password} onChange={handleChange} required />
          </div>
          <button type="submit">{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
          <div className="login-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          {currState === 'Login' ? (
            <p>Create new account? <span onClick={() => setCurrState('Sign Up')}>Click Here</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login Here</span></p>
          )}
        </form>
      ) : (
        <div className="role-selection-container">
          <div className="role-selection-title">
            <h2>Select Your Role</h2>
            <img onClick={() => setShowLogin(false)} src={cross_icon} alt="Close" />
          </div>
          <div className="role-selection">
            <button onClick={() => handleRoleSelection('Student')}>Student</button>
            <button onClick={() => handleRoleSelection('Mentor')}>Mentor</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;

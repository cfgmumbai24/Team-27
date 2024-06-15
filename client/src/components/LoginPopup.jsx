import React, { useState } from 'react';
import './LoginPopup.css';
import cross_icon from '../assets/cross_icon.png';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Sign Up');
  const [userRole, setUserRole] = useState('');

  const handleRoleSelection = (role) => {
    setUserRole(role);
  };

  return (
    <div className='login-popup'>
      {userRole ? (
        <form action="" className="login-popup-container">
          <div className="login-popup-title">
            <h2>{`${currState} as ${userRole}`}</h2>
            <img onClick={() => setShowLogin(false)} src={cross_icon} alt="" />
          </div>
          <div className="login-popup-input">
            {currState === 'Login' ? null : <input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Your Password' required />
            {currState==='Sign Up'?<input type="tel" placeholder='Your Contact Number' required />:null}
          </div>
          <button>{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
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
            <img onClick={() => setShowLogin(false)} src={cross_icon} alt="" />
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

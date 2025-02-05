import React from 'react';
import './login.css';
import { useNavigate, Link } from 'react-router-dom';
import signup from '../signup/signup';
export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login functionality here
    console.log("Login button clicked!");
  };

  return (
    <div className='login'>
      <div className='loginBox'>
        <div className="details">
          <input type="text" name="Email" id="Name" placeholder='Email' required /> <br />
          <input type="password" name='Password' id="Password" placeholder='Password' required />

         <div className="rem"> <input type="checkbox" id='checkbox'/><label htmlFor="rememberMe">Remember me?</label></div>
          <button className='btnLogin' onClick={handleLogin}>Login</button>
          <p style={{marginTop:'10px'}}><Link>Forgot password?</Link> </p><br /><br /><br />
          
          {/* Navigation using Link */}
          <p className='signupLog'>
            Don't have an account? <Link to="/signup" className='signLink'>Sign Up</Link>
          </p>
          
          <p>@NepalSarkar</p>
        </div>
        <div className='img'></div>
      </div>
    </div>
  );
}

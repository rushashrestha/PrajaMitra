import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
export default function Signup() {
  return (
    <div className='signup'>
        <div className="signinDet">
        <div className="name">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        </div> 
<br />
<label htmlFor="dob" style={{marginLeft:'0px',alignItems:"right"}}>Date of Birth</label>
<input type="date" name="" id="" /><br />
        <input type="text" name="email" id="email" placeholder='Email' />
        <br />
        
        <input type="password" name="password"  id='password' placeholder='Password' />
        <br />
        <input type="text" name="cpassword" id="cpassword"  placeholder='Confirm Password'/><br />
        <p>Please enter your detail accordingly to your citizenship!!</p>
        <button className='btnSign' >Sign Up</button>
        <br />
        <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
        <div className="img"></div>
        </div>
        
  )
}

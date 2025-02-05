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
<label htmlFor="dob" className='dob' >Date of Birth</label>
<input type="date" name="dob" id="dob" /><br />
<div className="gender">
<label htmlFor="gnder">Gender:</label>
<input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  
                  required
                />
                <label htmlFor="male">Male</label>

                 <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
      
                  required
                />
                <label htmlFor="female">Female</label> 
</div><br />
        <input type="text" name="email" id="email" placeholder='Email' />
        <br />
        
        <input type="password" name="password"  id='password' placeholder='Password' />
        <br />
        <input type="text" name="cpassword" id="cpassword"  placeholder='Confirm Password'/><br />
        <p>Please enter your detail accordingly to your citizenship!!</p>
        <button className='btnSign' >Sign Up</button>
        <br />
        <p style={{marginLeft:'100px'}}>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
        <div className="img"></div>
        </div>
        
  )
}

import React from 'react'
import './login.css'


export default function Login() {
  return (
    <div className='login'>
    <div className='loginBox'>
        
        <div className="details">
            <input type="text" name="Email" id="Name" placeholder='Email' required/> <br />
            <input type="password" name='Password' id="Password" placeholder='Password' required />
            <button className='btnLogin'>Login</button><br /> <br /> <br />
            <p className='signup'>Don't have an account! <a href="#">Sign Up</a></p>
            <p>@NepalSarkar</p>
            
        </div>
        <div className='img'></div>
    </div>
    </div>
    
  )
}

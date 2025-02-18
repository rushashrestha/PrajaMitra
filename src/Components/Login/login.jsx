import React,{useState} from 'react';
import './login.css';
//import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
//import { auth } from '../../firebase/firebase';


export default function Login() {
  const navigate = useNavigate(); // For redirecting after login

  const [formData,setFormData] =useState({
    email:"",
    password:"",
  });

  const handleSubmit= async(e)=>{
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    // Email validation
    if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/.test(formData.email)) {
      alert("Please enter a valid Gmail or Yahoo email address.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email,formData.password);
      console.log("User logged in successfully!!");
<<<<<<< HEAD
      navigate("/");
=======
      navigate("/home");
>>>>>>> 542ef2b843bed56487b32d6d6fe7d4a3bc18ab64
    } catch (error) {
      console.log(error.message);
    }
    // Navigate to dashboard or homepage after login
   
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='login'>
      <div className='loginBox'>
        
      <form onSubmit={handleSubmit}>
        <div className="details">
          
          <input type="text" name="email" id="Name" value={formData.email} placeholder='Email'  onChange={handleChange} required /> <br />
          <input type="password" name='password' value={formData.password} id="password" placeholder='Password' onChange={handleChange} required />

         <div className="rem"> <input type="checkbox" id='checkbox'/><label htmlFor="rememberMe">Remember me?</label></div>
          <button type='submit' className='btnLogin' >Login</button>
         
          <p style={{marginTop:'10px'}}><Link>Forgot password?</Link> </p><br /><br /><br />
          
          {/* Navigation using Link */}
          <p className='signupLog'>
            Don't have an account? <Link to="/signup" className='signLink'>Sign Up</Link>
          </p>
          
          <p>@NepalSarkar</p>
        </div>
        </form>
      </div>
    </div>
  );
}

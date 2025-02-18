import React, {useState} from 'react'
import './signup.css'
import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth ,db } from '../../firebase/firebase'
import { setDoc,doc } from 'firebase/firestore'

export default function Signup() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    firstName:"",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange=(e)=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });    
  }
  

  const isAgeValid = (dob)=>{
    if (!dob) return false;
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear()-birthDate.getFullYear();
    const monthDiff = today.getMonth()- birthDate.getMonth();
    const dayDiff = today.getDay()-birthDate.getDay();
    if (monthDiff< 0|| (monthDiff === 0 && dayDiff<0)) {
      return age - 1>=16;
    }
    return age>=16;
  }

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    return emailPattern.test(email);
  };

  const isValidPassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit= async(e)=>{
    e.preventDefault();

    if (!formData.firstName|| !formData.lastName ||!formData.password || !formData.confirmPassword) {
      alert("All fields are  required.");
      return;
    }

    if (!isAgeValid(formData.dob)) {
      alert("You must be at least 16 years old to register.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isValidPassword(formData.password)) {
      alert("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      createUserWithEmailAndPassword( auth, formData.email, formData.password);
      const user = auth.currentUser;
      console.log(user);
      alert("Registration Succesfull");
      navigate('/login');
      if (user) {
        await setDoc(doc(db, "User" , user.uid),{
          email:user.email,
          firstName:formData.firstName,
          lastName:formData.lastName,
        })
      }
    } catch (error) {
      console.log(error.message);
    }
    // alert(`User Registered Successfully! Welcome, ${formData.firstName} ${formData.lastName}`);

    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }


  return (
    <div className='signup'>
        <div className="signinDet">
       <form onSubmit={handleSubmit}>
       <div className="name">
        <input type="text" name='firstName' value={formData.firstName} onChange={handleChange} placeholder='First Name' required/>
        <input type="text" name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Last Name' required/>
        </div> 
        <br />  
        <label htmlFor="dob" className='dob'  >Date of Birth</label>
        <input type="date" value={formData.dob} onChange={handleChange} name="dob" id="dob" required/>
        <br />
        <br /> 
        <div className="gender"> 
        <label htmlFor="gender">Gender:</label>
          <input type="radio" value="Male" name="gender" checked={formData.gender==="Male"}  onChange={handleChange} required />
         <label htmlFor="male">Male</label>

         <input type="radio" onChange={handleChange} checked={formData.gender==="Female"} value="Female" name="gender" required/>
         <label htmlFor="female">Female</label> 
</div><br />
        <input type="email" name="email"  onChange={handleChange} value={formData.email} id="email" placeholder='Email' required/>
        <br /> <br />
        
        <input type="password" onChange={handleChange} value={formData.password} name="password" required id='password' placeholder='Password' />
        <br /> <br />
        <input type="password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} id="confirmPassword" placeholder='Confirm Password' required  /><br />
        <p style={{textAlign:'center'}}>Please enter your detail correctly!!</p>
        <button type="submit" className='btnSign' >Sign Up</button>
       </form>
        <br />
        <p style={{marginLeft:'100px'}}>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
        </div>
        
  )
}

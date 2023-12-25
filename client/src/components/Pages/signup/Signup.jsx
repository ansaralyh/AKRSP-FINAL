import React from 'react';
import './Signup.css'
import leftImage from "../../assests/signup.png"
import eyeicon from "../../assests/eyeicon.png"
import mailicon from "../../assests/mailicon.png"
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
   <div className='container'>
      <div className='loginpage'>
      <div className="login">
       <h2>Signup to your Account</h2>
      </div>
      <div className="text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
  <div className="inputTags">

<div className='inputCont'>
<input className='inputField'  type="text" placeholder="First Name" />

<input className='inputField' type="text" placeholder="Last Name" />
</div>



  <input className='inputField' type="text" placeholder="username" />

  <div className='mainCont'>
          <input className='inputField' type="text" placeholder="Login with your email"/> <img className="mailicon" src={mailicon}/>
          </div>
  <div className='mainCont'>
  <input type="text" className='inputField' placeholder="Password" /> 
  <img className='mailicon'src={eyeicon} alt=""/>
  </div>
  <div className='mainCont'>
  <input type="text" className='inputField' placeholder="confirm password"/>
  <img className='mailicon'src={eyeicon} alt=""/>
  </div>
  <div >
  <button className='button'>Signup</button>
   </div>
    <div className="login-link">
    <p>Already have account? <Link to='/'>Login</Link></p>
   </div>
    </div>
    </div>
    <div className='rightDiv'>
    <div className='image'>
        <img src={leftImage} alt=""/>
      </div>
    </div>
    </div>
    

      );
    };


export default Signup;
    
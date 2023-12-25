import React from 'react';
import "./Login.css";
import facebookicon from "../../../components/assests/facebookicon.png"
import googleIcon from "../../../components/assests/googleicon.png"
import leftImage from "../../../components/assests/login.png"
import mailicon from "../../../components/assests/mailicon.png"
import eyeicon from "../../../components/assests/eyeicon.png"
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='container'>
      <div className='loginpage'>
        <div className='subCont'>
      <div className="login">
        <h2>Login to your Account</h2>
      </div>
      <div className="logintext">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>

      <div className='socialIcon' > 
      <div className="icon google-icon" >
        <img src={googleIcon} alt="" />
      </div>
      <div className="icon facebook-icon">
        <img src={facebookicon} alt=""/>
      </div>
      </div>
      <div className="text">Or Sign in with</div>
      <form>
        <div className='Loginform'>
          <div className='mainCont'>
          <input className='inputField' type="text" placeholder="Login with your email"/> <img className="mailicon" src={mailicon}/>
          </div>

      <div className='mainCont'>
        <input className='inputField' type="password" placeholder="Enter your password" /><img className="mailicon" src={eyeicon} alt=""/>
        
         </div> 
            

        <div className='rememberCont'>
        <div className='rememberMe'>
              <input type="checkbox" /><p>Remember your password</p>
          </div>
       
        <span>Forgot password?</span>
        </div>
   
        <br/>
        <button className='btn' type="submit">Login</button>
       </div>
      </form>
      <div className="Account">
      <p> Dont't Have an Account? <Link to='/signup'>Signup</Link></p>
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
}

export default Login;

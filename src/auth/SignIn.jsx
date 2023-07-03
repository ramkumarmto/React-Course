import React from 'react';
import "./auth.css";
import { Link } from 'react-router-dom';
import Button from '../resuable/Button';
import Card from '../resuable/Card';

function SignIn() {

  const signInhandler = ()=>{
    alert("logged in successfully!")
  }
  return (
    <div className='auth-container'>
      <Card className="auth_inner_container">
      <h2>Sign In</h2>
        <div>
            <input type="text" placeholder='Email or Username' />
        </div>
        <div>
            <input type="password" placeholder='Password' />
        </div>
        <div>
           {/* <button>Sign In</button> */}
           <Button onClick={signInhandler} btnName= "SignIn" />
        </div>
        <div>
           <p> Forget <Link to="/forgetpassword">Password</Link></p>
           <p>Not have Account ? <Link to="/signup">Sign Up</Link></p>
        </div>
      </Card>

    </div>
  )
}

export default SignIn
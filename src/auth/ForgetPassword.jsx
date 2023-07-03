import React from 'react';
import "./auth.css";
import { Link } from 'react-router-dom';
import Button from '../resuable/Button';
import Card from '../resuable/Card';

function ForgetPassword() {

  const pwdResetHandler = ()=>{
    alert("password reset successfully!")
  }
  return (
    <div className='auth-container'>
      <Card className="auth_inner_container">
      <h2>Reset Password</h2>
        <div>
            <input type="text" placeholder='Email or Mobile' />
        </div>
       
        <div>
           {/* <button>Reset</button> */}
           <Button onClick={pwdResetHandler} btnName = "Reset" />
        </div>
    
      </Card>

    </div>
  )
}

export default ForgetPassword
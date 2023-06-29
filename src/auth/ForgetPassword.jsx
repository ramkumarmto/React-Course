import React from 'react';
import "./auth.css";
import { Link } from 'react-router-dom';

function ForgetPassword() {
  return (
    <div className='auth-container'>
      <div className="auth_inner_container">
      <h2>Reset Password</h2>
        <div>
            <input type="text" placeholder='Email or Mobile' />
        </div>
       
        <div>
           <button>Reset</button>
        </div>
    
      </div>

    </div>
  )
}

export default ForgetPassword
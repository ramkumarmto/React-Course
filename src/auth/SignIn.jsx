import React from 'react';
import "./auth.css";
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className='auth-container'>
      <div className="auth_inner_container">
      <h2>Sign In</h2>
        <div>
            <input type="text" placeholder='Email or Username' />
        </div>
        <div>
            <input type="password" placeholder='Password' />
        </div>
        <div>
           <button>Sign In</button>
        </div>
        <div>
           <p> Forget <Link to="/forgetpassword">Password</Link></p>
           <p>Not have Account ? <Link to="/signup">Sign Up</Link></p>
        </div>
        {/* <div>
        </div> */}
      </div>

    </div>
  )
}

export default SignIn
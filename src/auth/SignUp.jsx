import React from 'react';
import "./auth.css";
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='auth-container'>
      <div className="auth_inner_container">
      <h2>Sign Up</h2>
        <div>
            <input type="text" placeholder='Email or Username' />
        </div>
        <div>
            <input type="number" placeholder='Mobile' />
        </div>
        <div>
            <input type="password" placeholder='Password' />
        </div>
        <div>
            <input type="password" placeholder='Confirm Password' />
        </div>
        <div>
           <button>Sign Up</button>
        </div>
        <div>
           <p>Allready have Account ? <Link to="/signin">Sign In</Link></p>
        </div>
        {/* <div>
        </div> */}
      </div>

    </div>
  )
}



export default SignUp
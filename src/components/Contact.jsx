import React , { useState}from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
   const [ username, setUsername]=  useState("")
   const [ password, setPassword]=  useState("");

   const navigate = useNavigate();



   const passwordChangeHandler = (e)=>{
    setPassword(e.target.value);
   }
   const userNameChangehandler = (e)=>{
    setUsername(e.target.value)
   }

    const submitHandler = ()=>{
        console.log(username, password)
        alert("logged in successfully!")
        navigate("/")


    }
  return (
    <form onSubmit={submitHandler} style={{ width : "100%", height : 400, display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
        
        <div>
            <input type="text" placeholder='Username or Email' onChange={userNameChangehandler} />
        </div>
        <div>
            <input type="password" placeholder='Password' onChange={passwordChangeHandler} />
        </div>
        <div>
            <button type='submit'>Login</button>
        </div>
    </form>
  )
}

export default Contact
import React , { useState}from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
   const [ username, setUsername]=  useState("")
   const [ password, setPassword]=  useState("");
   const [mobile, setMobile] = useState("");

   const navigate = useNavigate();



   const passwordChangeHandler = (e)=>{
    setPassword(e.target.value);
   }
   const userNameChangehandler = (e)=>{
    setUsername(e.target.value)
   }
   const mobileChangehandler = (e)=>{
    setMobile(e.target.value)
   }

    const submitHandler = ()=>{
        console.log(username, password, mobile)
        alert("thank you for contact, we will reply you soon!")
        navigate("/")


    }
  return (
    <form onSubmit={submitHandler} style={{ width : "100%", height : 400, display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
        
        <div className='mb-2'>
            <input type="text" placeholder='Username or Email' onChange={userNameChangehandler} />
        </div>
        <div className='mb-2'>
            <input type="password" placeholder='Password' onChange={passwordChangeHandler} />
        </div>
        <div className='mb-2'>
            <input type="numner" placeholder='Mobile Number' onChange={mobileChangehandler} />
        </div>
        <div className='mb-2'>
            <button type='submit'>Contact</button>
        </div>
    </form>
  )
}

export default Contact
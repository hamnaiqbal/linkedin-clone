import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import img from "./PP.png";
import "./login.css"
import {auth} from "../Feed/firebase"
import {login} from '../../features/userSlice';

function Login() {

  const [name,setname] = useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [pic,setPic]=useState("");
  const dispatch=useDispatch();
  
  const logintoApp=(e)=>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.user.displayName,
        profileUrl:userAuth.user.photoURL,
      }))
    })
    
    
    

  }
  const register=()=>{
    if (!name ){
      return alert("please enter complete details")
    }
    auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoURL:pic,
      }).then(()=>{
        dispatch(login({
          email:userAuth.user.email,
          uid:userAuth.user.uid,
          displayName:name,
          photoURL:pic,
        }))

      });
    })


  };
 
  return (
    <div className='login'>
      <img src={img} alt=""/>
      
      <form> 
        <input placeholder='Full Name' type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
        <input placeholder='Upload your pic' type="text" value={pic} onChange={(e)=>setPic(e.target.value)}/>
        <input placeholder='Email' type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input placeholder='Password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit' onClick={logintoApp}> Sign In</button>
      </form>
      <p> 
        Not a member?
        <span className='login_register' onClick={register}>Register Now</span>
      </p>
      
    </div>
  )
}

export default Login;

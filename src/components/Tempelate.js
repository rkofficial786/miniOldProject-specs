import React from 'react'
import Loginform from './Loginform'
import Signupform from './Signupform'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'



const Tempelate = (props) => {
const navigate = useNavigate()
  
 
  return (
    <div className='template'>
        <h1>{props.title}</h1>
        <div className='login-changer-container'>
       <NavLink to={"/login"}><button className='login-changer'  >Login</button></NavLink>
       <NavLink to={"/signup"}><button className='login-changer' >Signup</button></NavLink>
        </div>

        {props.formtype==="login"?(<Loginform />):(<Signupform/>)}

        <span>or</span>

        <div className="log-btn google">
        <img src="https://p7.hiclipart.com/preview/249/19/631/google-logo-g-suite-google-guava-google-plus.jpg" width={20} alt="" /> 
        <button className='log-btn google-btn'>   Sign in with Google</button>
        </div>
        
    </div>
  )
}

export default Tempelate
import React from 'react'
import Tempelate from '../components/Tempelate'
import { NavLink } from 'react-router-dom'

const Login = () => {
  
    let title="Hey Welcome back"
   
    let formtype="login"
    

  return (
    <div className='login-container'>
        <Tempelate title={title}  formtype={formtype}   />


       
    </div>

    
  )
}

export default Login
import React from 'react'
import Tempelate from '../components/Tempelate'

const Signup = (props) => {

    
    let title="Hey How are you"
   
    let formtype="signup"
    
  return (
    <div className='signup-container'><Tempelate title={title}  formtype={formtype}  /></div>
  )
}

export default Signup
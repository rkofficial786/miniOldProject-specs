import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";
import { toast } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/LoginSlice";


const Loginform = (props) => {

   

   
  const [form, setForm] = useState({
    email: "",
    password: "",
  });


 const dispatch =useDispatch()

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault()
    dispatch(loginSuccess())
   
    toast.success("Logged In successfully")
  
    navigate("/");
  }

  const [isVisible, setIsVisible] = useState(false);
  function formHandler(event) {
    setForm((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  return (
    <div className="login-form">
      <form action="" onSubmit={submitHandler}>
        <label>
          <p>Email address</p>
          <input
          required
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter email ID"
            onChange={formHandler}
          />
        </label>

        <label>
          <p>Enter Password</p>
          <input
          required
            type={isVisible ? "text" : "password"}
            name="password"
            value={form.password}
            placeholder="Enter Password"
            onChange={formHandler}
          />

          <span
            onClick={() =>
              setIsVisible((prev) => 
                !prev
              )
            }
          >
            {isVisible?(
            <AiFillEyeInvisible />
            ):(
            <MdVisibility />)}
          </span>
        </label>

        <button className='log-btn'>Log In</button>
      </form>
    </div>
  );
};

export default Loginform;

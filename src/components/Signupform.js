import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/LoginSlice";

const Signupform = (props) => {
  

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpass: "",
    job: "",
  });

  const navigate = useNavigate();
  const dispatch =useDispatch()

  function submitHandler(event) {
    event.preventDefault();
    if (form.password !== form.confirmpass) {
      toast.error("Password does not match");
      return;
    }

    dispatch(loginSuccess())



    toast.success("Signed Up Successfully");
    
    navigate("/");
  }

  const [isVisible, setIsVisible] = useState(false);
  function formHandler(event) {
    setForm((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  return (
    <div className="signup-form">
      <form action="" onSubmit={submitHandler}>
       
       

        <label>
          <p>Enter First name</p>
          <input
            required
            type="text"
            name="firstName"
            value={form.firstName}
            placeholder="Enter First name"
            onChange={formHandler}
          />
        </label>

        <label>
          <p>Enter Last Name</p>
          <input
            required
            type="text"
            name="lastName"
            value={form.lastName}
            placeholder="Enter Last name"
            onChange={formHandler}
          />
        </label>

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

          <span onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? <AiFillEyeInvisible /> : <MdVisibility />}
          </span>
        </label>

        <label>
          <p>Confirm Password</p>
          <input
            required
            type={isVisible ? "text" : "password"}
            name="confirmpass"
            value={form.confirmpass}
            placeholder="Enter Password"
            onChange={formHandler}
          />

          <span onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? <AiFillEyeInvisible /> : <MdVisibility />}
          </span>
        </label>

        <button className="log-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signupform;

import React from "react";
import logo from "../Assets/specsLogo.png";
import { NavLink,Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector, useEffect } from "react-redux";
import { useDispatch } from "react-redux";
import { loginSuccess,loginFail } from "../redux/slices/LoginSlice";
import {toast} from "react-hot-toast"




const Navbar = () => {
  const { cart } = useSelector((state) => state);

  const isLoggedIn = useSelector(state => state.login);

  const dispatch = useDispatch()

  function logoutHandler(event){
event.preventDefault();
dispatch(loginFail());
toast.success("logged out")
  }



  return (
    <div className="nav-bar">
      <Link to={"/"}>
        {" "}
        <img src={logo} alt="" />
      </Link>

      <div>
        <Link to={"/"}>
          {" "}
          <button className="home-btn">Home</button>
        </Link>
        <Link to={"/login"}>{isLoggedIn ? (<button className="home-btn" onClick={logoutHandler}>Logout</button>) : (<button className="home-btn">Login</button>)} </Link>
        <Link to={"/cart"}>
          {" "}
          <button className="cart-btn">
            {" "}
            {cart.length > 0 ? (
              <div className="cart-count">{cart.length}</div>
            ) : (
              <div></div>
            )}{" "}
            <BsFillCartFill />
          </button>
        </Link>

        
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cartitem from "../components/Cartitem";
import { NavLink, useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"
import { reset } from "../redux/slices/CartSlice";


const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const isLoggedIn = useSelector(state => state.login);

  const dispatch = useDispatch()
  
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => (acc += curr.price), 0).toFixed(2));
  }, [cart]);

   const navigate = useNavigate()
  function checkoutHandler(){
    if(isLoggedIn){
      toast.success("item ordered successfully")
     
      dispatch(reset())
      return ;
    }
   toast.error("Login required")
   navigate("/login")
  }

  return (
    <div>
      {cart.length > 0 ? (
        <div className="cart-container">
          <div className="cart-finder">
            {cart.map((item, index) => {
              return <Cartitem key={item.id} index={index} item={item} />;
            })}
          </div>

          <div className="checkout">
            <div className="cart-price-info cartsummary" >
              <h4>Your Cart</h4>
              <h2>Summary</h2>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="cart-price-info fixed">
              <p className="total-amount">Total Amount: ₹{totalAmount}</p>
              <button className="btn" onClick={checkoutHandler}>Check out</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <p>Cart is empty</p>
          <NavLink to={"/"}>
            {" "}
            <button className="btn">Shop now</button>{" "}
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;

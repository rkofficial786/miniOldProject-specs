import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import {toast} from "react-hot-toast"

const Product = (props) => {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  function addHandler() {
    dispatch(add(props.item));
    toast.success("Item added to cart")
  }

  function removeHandler() {
    dispatch(remove(props.item.id));
    toast.error("Item removed from cart")
  }

  const desc =`${props.item.description.substring(0,150)}...` ;
  const title = `${props.item.title.substring(0,15)}...`;

  return (
    <div className="item">
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{desc}</p>
      </div>
      <div>
        <img src={props.item.image} alt="" width={200}  height={250}/>
      </div>

      <div className="price-info">
        <div className="price">
          <p>₹{props.item.price}</p>
        </div>
        <div className="switch-btn">
          {cart.some((p) => p.id === props.item.id) ? (
            <button onClick={removeHandler}>Remove from Cart</button>
          ) : (
            <button onClick={addHandler}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

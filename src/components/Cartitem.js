import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const Cartitem = (props) => {
  const desc = `${props.item.description.substring(0, 150)}...`;
  const title = `${props.item.title.substring(0, 30)}...`;

  const dispatch = useDispatch();
  function removefromCart() {
    dispatch(remove(props.item.id));
    toast.error("Item removed from cart")
  }

  return (
    <div className="cart">
      <div>
        <img src={props.item.image} alt="" width={150} height={190} />
      </div>

      <div className="cart-info">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="price-tag">
          <p>₹{props.item.price}</p>
          <div onClick={removefromCart}>
            <AiFillDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;

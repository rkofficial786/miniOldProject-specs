import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Product from "../components/Product";

const Home = () => {
  const API = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchData() {
    setLoading(true);

    try {
      const data = await fetch(API);
      const output = await data.json();
      setItems(output);
    } catch (error) {
      console.log("Eror");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="items">
      {loading ? (
        <Loader />
      ) : items.length > 0 ? (
        <div className="item-container">
          {items.map((item) => {
            return <Product  item={item}></Product>;
          })}
        </div>
      ) : (
        <div>
          <p>Page note found</p>
        </div>
      )}
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/Cart.css";
import { ImgHTMLAttributes } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });
  let navigate = useNavigate();

  const [student, setUser] = useState({
    mark: "",
    name: "",
  });

  const { mark, name } = student;

  const onInputChange = (e) => {
    setUser({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/addStudent", student);
    navigate("/home");
  };

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, +1)}> + </button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}> - </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="mark" className="form-label">
                  mark
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your mark"
                  name="mark"
                  value={mark}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cart;

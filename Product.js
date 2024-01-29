import React, { useState } from "react";
import Navbar from "./Navbar";
import Amazon from "./Amazon";
import Cart from "./Cart";
// import "./styles/Amazon.css";
import "../styles/Product.css";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const Shop = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };
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
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}
      {/* <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="mark" className="form-label">
                  mark
                </label>
                <input
                  type={"number"}
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
      </div> */}
    </React.Fragment>
  );
};

export default Shop;

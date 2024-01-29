import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shopping
        </span>

        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="cc">
              <img src="../imag/cart.jpg" />
            </i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

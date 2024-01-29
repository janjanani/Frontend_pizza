import React from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";

export default function Main() {
  return (
    <>
      <div className="container">
        <img src="./imag/6.jpeg" className="im" />
      </div>
      <Link to="/shop" className="btn1">
        Shop
      </Link>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Mainnav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#" to="/">
            Pizza app
          </Link>
          <Link to="/home" className="btn btn-outline-light">
            Shop
          </Link>

          <Link to="/shop" className="btn btn-outline-light">
            Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

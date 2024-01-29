import React from "react";
import Home from "./pages/Home.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/Adduser.js";
import EditUser from "./users/Edituser.js";
import ViewUser from "./users/Viewuser.js";
import Product from "./components/Product.js";
import Main from "./components/Main.js";
import Mainnav from "./components/Mainnav.js";
export default function App() {
  return (
    <div className="app">
      <Mainnav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/shop" element={<Product />} />
        <Route exact path="/home" element={<Home />} />
        {/* <Route exact path="/addStudent" element={<AddUser />} /> */}
        <Route exact path="/updatestudent" element={<EditUser />} />
        <Route exact path="/getstudentbyid/:id" element={<ViewUser />} />
      </Routes>
      {/*  */}
    </div>
  );
}

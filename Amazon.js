import React from "react";
import list from "../data";
import "../styles/Amazon.css";
import Card from "./Card";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <>
          <Card item={item} key={item.id} handleClick={handleClick} />
        </>
      ))}
    </section>
  );
};

export default Amazon;

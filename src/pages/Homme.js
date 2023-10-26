import React from "react";
import ProductsCategory from "../components/ProductsCategory";
import Form from "../components/Form";

function Hommes() {
  return (
    <div className="container">
      <div className="container flex flex-wrap">
        <Form />
        <ProductsCategory category="Hommes" />
      </div>
    </div>
  );
}

export default Hommes;

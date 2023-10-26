import React from "react";
import ProductsCategory from "../components/ProductsCategory";
import Form from "../components/Form";

function Ados() {
  return (
    <div className="container">
      <div className="container flex flex-wrap">
        <Form />
        <ProductsCategory category="Bébés" />
      </div>
    </div>
  );
}

export default Ados;

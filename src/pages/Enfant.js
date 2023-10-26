import React from "react";
import ProductsCategory from "../components/ProductsCategory";
import Form from "../components/Form";

function Enfants() {
  return (
    <div className="container">
      <div className="container flex flex-wrap">
        <Form />
        <ProductsCategory category="Enfants" />
      </div>
    </div>
  );
}

export default Enfants;

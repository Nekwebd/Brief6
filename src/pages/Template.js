import React from "react";
import ProductsCategory from "../components/ProductsCategory";
import Form from "../components/Form";

function Template(props) {
  return (
    <div className="container">
      <div className="container flex flex-wrap">
        <Form />
        <ProductsCategory category={props.category} />
      </div>
    </div>
  );
}

export default Template;

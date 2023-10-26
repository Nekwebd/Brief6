import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Form from "../components/Form";
import { isEmpty } from "../components/Utils";

export default function Home() {
  const products = useSelector((state) => state.productReducer);
  return (
    <div className="container">
      <div className="container flex flex-wrap">
        <Form />
        {!isEmpty(products) &&
          products.map((product, index) => (
            <Card product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

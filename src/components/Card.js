import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "./Utils";
const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    !isEmpty(product) && (
      <div className="card">
        <h2 className="text-center">{product.title}</h2>
        <p className="text-center">{product.description}</p>
        <p className="text-center">{product.categories}</p>
        <img
          className="justify-center"
          src={product.imageUrl}
          alt="{product.title}"
          width="60px"
          height="60px"
        ></img>
        <span class="prices">
          <p className="text-center">Base Price : {product.basePrice}€</p>
          <p className="text-center">Sale Price : {product.salePrice}€</p>
        </span>
      </div>
    )
  );
};

export default Card;

import React, { useEffect } from "react";
import Card from "./Card";
import { getProducts } from "../actions/products.action";
import { isEmpty } from "./Utils";
import { useSelector, useDispatch } from "react-redux";

function CategoryProducts({ category }) {
  const products = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProducts());
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);

  let categoryProducts = Array.isArray(products) ? products : [];

  categoryProducts = categoryProducts.filter(
    (product) => product.categories === category
  );

  return (
    <div className="card">
      {!isEmpty(categoryProducts) &&
        categoryProducts.map((product, index) => (
          <Card product={product} key={index} />
        ))}
    </div>
  );
}

export default CategoryProducts;

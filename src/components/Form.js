import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct, getProducts } from "../actions/products.action";
import { isEmpty } from "./Utils";

const Form = () => {
  const form = useRef();
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    const productData = {
      title: form.current[0].value,
      description: form.current[1].value,
      categories: form.current[2].value,
      basePrice: form.current[3].value,
      salePrice: form.current[4].value,
      imageUrl: form.current[5].value,
    };
    if (
      isEmpty(productData.title) ||
      isEmpty(productData.description) ||
      isEmpty(productData.categories) ||
      isEmpty(productData.basePrice) ||
      isEmpty(productData.salePrice) ||
      isEmpty(productData.imageUrl)
    ) {
      alert("Veuillez remplir les champs");
      form.current.reset();
      return;
    }

    dispatch(addProduct(productData));
    dispatch(getProducts());
    form.current.reset();
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={(e) => handleForm(e)}>
        <div className="card">
          <input
            className="text-center input"
            type="text"
            placeholder="Titre de l'article"
          />
          <input
            className="text-center input"
            type="text"
            placeholder="Description de l'article"
          />
          <input
            className="text-center input"
            type="text"
            placeholder="Catégorie de l'article"
          />
          <input
            className="text-center input"
            type="number"
            placeholder="Prix de base de l'article"
          />
          <input
            className="text-center input"
            type="number"
            placeholder="Prix soldé de l'article"
          />
          <input
            className="text-center input"
            type="text"
            value="https://img.freepik.com/free-photo/happy-asian-woman-with-candid-smile-pink-dress-posing-summer-garden_273443-645.jpg?w=740&t=st=1697705353~exp=1697705953~hmac=cb25c622db0f8754c9ac7afdb120026c4ceaccd9c3f061424e4b2a287b64e219"
          />
          <input type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
};

export default Form;

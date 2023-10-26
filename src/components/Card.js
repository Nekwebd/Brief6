import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "./Utils";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  // State pour le suivi de l'édition
  const [isEditing, setIsEditing] = useState(false);
  // State pour stocker les modifications éventuelles
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Dispatch l'action pour sauvegarder les modifications
    dispatch({ type: "EDIT_PRODUCT", payload: editedProduct });
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Dispatch l'action pour supprimer le produit
    dispatch({ type: "DELETE_PRODUCT", payload: product.id });
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    // Met à jour l'objet editedProduct avec les nouvelles valeurs
    setEditedProduct({ ...editedProduct, [name]: value });
  };
  const handleCancel = () => {
    setIsEditing(false);
    setEditedProduct({ ...product });
  };

  return (
    !isEmpty(product) && (
      <div className="card">
        {isEditing ? (
          <div>
            <input
              className="card-edit"
              type="text"
              name="title"
              defautValue={product.title}
              value={editedProduct.title}
              onChange={handleChange}
            />
            <input
              className="card-edit"
              type="text"
              name="description"
              defautValue={product.description}
              value={editedProduct.description}
              onChange={handleChange}
            />
            <input
              className="card-edit"
              type="text"
              name="categories"
              defautValue={product.categories}
              value={editedProduct.categories}
              onChange={handleChange}
            />
            <input
              className="card-edit"
              type="number"
              name="basePrice"
              defautValue={product.basePrice}
              value={editedProduct.basePrice}
              onChange={handleChange}
            />
            <input
              className="card-edit"
              type="number"
              name="salePrice"
              defautValue={product.salePrice}
              value={editedProduct.salePrice}
              onChange={handleChange}
            />
            <input
              className="card-edit"
              type="text"
              name="imageUrl"
              defautValue={product.imageUrl}
              value={editedProduct.imageUrl}
              onChange={handleChange}
            />
            <button className="card-edit" onClick={handleSave}>
              Save
            </button>
            <button className="card-edit" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-center">{product.title}</h2>
            <p className="text-center">{product.description}</p>
            <p className="text-center">{product.categories}</p>
            <img
              className="justify-center"
              src={product.imageUrl}
              alt={product.title}
              width="60px"
              height="60px"
            ></img>
            <span className="prices">
              <p className="text-center">Base Price : {product.basePrice}€</p>
              <p className="text-center">Sale Price : {product.salePrice}€</p>
            </span>
            <span className="buttons">
              <button className="edit" onClick={handleEdit}>
                Editer
              </button>
              <button className="delete" onClick={handleDelete}>
                Supprimer
              </button>
            </span>
          </div>
        )}
      </div>
    )
  );
};

export default Card;

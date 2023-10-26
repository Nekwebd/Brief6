import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from "../actions/products.action";

const initialState = [];

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    case ADD_PRODUCT:
      return [...state, action.payload];
    case EDIT_PRODUCT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            title: action.payload.title,
            description: action.payload.description,
            categories: action.payload.categories,
            basePrice: action.payload.basePrice,
            salePrice: action.payload.salePrice,
            imageUrl: action.payload.imageUrl,
          };
        } else return product;
      });
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
}

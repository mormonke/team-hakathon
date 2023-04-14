import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API, LIMIT } from "../utils/const";

export const productContext = createContext();

const initState = { products: [], oneProduct: null, pageTotalCount: 1 };
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    case "SEARCH":
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
};

function ProductContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProducts = async () => {
    let res = await axios.get(
      `${API}/${window.location.search || "?_limit=" + LIMIT}`
    );
    const totalPages = Math.ceil(res.headers["x-total-count"] / LIMIT);

    dispatch({
      type: "SEARCH",
      payload: totalPages,
    });

    let action = {
      type: "GET_PRODUCTS",
      payload: res.data,
    };
    dispatch(action);
  };

  const getOneProduct = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);

    const action = {
      type: "GET_ONE_PRODUCT",
      payload: data,
    };
    dispatch(action);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${API}/${newProduct.id}`, newProduct);
  };

  const values = {
    addProduct,
    getProducts,
    getOneProduct,
    deleteProduct,
    saveEditedProduct,
    products: state.products,
    oneProduct: state.oneProduct,
    pageTotalCount: state.pageTotalCount,
  };

  return (
    <>
      <productContext.Provider value={values}>
        {children}
      </productContext.Provider>
    </>
  );
}

export default ProductContext;

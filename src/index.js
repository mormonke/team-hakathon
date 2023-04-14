import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContext>
      <CartContext>
        <AuthContext>
          <App />
        </AuthContext>
      </CartContext>
    </ProductContext>
  </BrowserRouter>
);

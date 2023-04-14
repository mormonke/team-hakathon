import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";

import EditProductPage from "../pages/EditProductPage";
import ProductCard from "../components/ProductCard";
import ContactsPage from "../pages/ContactsPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import BuyPage from "../pages/BuyPage";
import SadPepe from "../pages/SadPepe";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/cont" element={<ContactsPage />} />
        <Route path="/prod" element={<ProductCard />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/sad" element={<SadPepe />} />
    </Routes>
  );
}

export default MainRoutes;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Sidebar from "./components/Sidebar";
import CreateProductPage from "./pages/CreateProductPage";
import User from "./pages/User";
import CreateUserPage from "./pages/CreateUserPage";
import Category from "./pages/Category";
import Variation from "./pages/Variation";
import Order from "./pages/Order";
import EditProductPage from "./pages/EditProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/product" element={<Product />} />
          <Route path="/create_product" element={<CreateProductPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/create_user" element={<CreateUserPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/variation" element={<Variation />} />
          <Route path="/order" element={<Order />} />
          <Route path="edit_product" element={<EditProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

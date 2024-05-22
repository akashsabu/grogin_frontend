import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../components/screens/home/Home";
import Product from "../components/screens/home/Product";


const AppRoute = () => {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoute;

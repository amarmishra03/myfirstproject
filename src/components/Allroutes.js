import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Accessories, Cart } from "./";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/accessories" element={<Accessories />} />
    </Routes>
  );
};

export default Allroutes;

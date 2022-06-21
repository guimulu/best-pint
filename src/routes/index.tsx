import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "../pages/Details/Details";
import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};
export default MainRoute;

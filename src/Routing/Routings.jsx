import React from "react";
import { Route, Routes } from "react-router-dom";
import Master from "../master/Master";
import Home from "../pages/homedash/Home";
import PageRender from "../pages/main/PageRender";
import Login from "../pages/login/Login";

const Routings = () => {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/admin/login" element={<Login />} />

      {/* ADMIN DASHBOARD */}
      <Route path="/admin" element={<Master />}>
        <Route index element={<Home />} />
        <Route path=":name" element={<PageRender />} />
      </Route>

    </Routes>
  );
};

export default Routings;

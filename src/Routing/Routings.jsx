import React from "react";
import { Route, Routes } from "react-router-dom";
import Master from "../master/Master";
import HomeDash from "../pages/homedash/HomeDash";
import PageRender from "../pages/main/PageRender";
import Login from "../pages/login/Login";

const Routings = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTE */}
      <Route path="/login" element={<Login />} />

      {/* DASHBOARD LAYOUT */}
      <Route path="/" element={<Master />}>
        {/* Default route */}
        <Route index element={<HomeDash />} />

        {/* Dynamic pages */}
        <Route path=":name" element={<PageRender />} />
      </Route>
    </Routes>
  );
};

export default Routings;

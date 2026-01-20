import React from "react";
import { Route, Routes } from "react-router-dom";
import Master from "../master/Master";
import Home from "../pages/homedash/Home";
import PageRender from "../pages/main/PageRender";
import Login from "../pages/login/Login";
import UserDetails from "../pages/userdetailpage/UserDetails";
import ProtectedRouting from "./ProtectedRouting";

const Routings = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRouting>
            <Master />
          </ProtectedRouting>
        }
      >
        {/* <Route index element={<Home />} /> */}

        {/* normal pages */}
        <Route path=":name" element={<PageRender />} />

        {/* SUPPORT NESTED ROUTE */}
        <Route path="support/:name" element={<PageRender />} />

        <Route path="user/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
};

export default Routings;

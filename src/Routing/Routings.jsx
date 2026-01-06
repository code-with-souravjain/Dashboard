import React from "react";
import { Route, Routes } from "react-router-dom";
import Master from "../master/Master";
import Home from "../pages/homedash/Home";
import PageRender from "../pages/main/PageRender";
import Login from "../pages/login/Login";
import UserDetails from "../pages/userdetailpage/UserDetails";
import ProtectedRouting from "./ProtectedRouting";
import Faq from "../pages/support/support-dropdown/Faq";
import GeneralEnquiry from "../pages/support/support-dropdown/GeneralEnquiry";
import Tickets from "../pages/support/support-dropdown/Tickets";

const Routings = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/admin/login" element={<Login />} />

      {/* PROTECTED ADMIN ROUTES */}
      <Route
        path="/admin"
        element={
          <ProtectedRouting>
            <Master />
          </ProtectedRouting>
        }
      >
        <Route index element={<Home />} />
        <Route path=":name" element={<PageRender />} />
        <Route path="support/faq" element={<Faq />} />
        <Route path="support/general" element={<GeneralEnquiry />} />
        <Route path="support/tickets" element={<Tickets />} />
        <Route path="user/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
};

export default Routings;

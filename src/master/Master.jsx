import React from "react";
import { Outlet } from "react-router-dom";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import Footer from "../components/Footer";
import Dashboard from "../pages/dashboard/Dashboard";

const Master = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Dashboard>
        <Outlet /> {/* This renders the current route inside dashboard */}
      </Dashboard>
      <Footer />
    </>
  );
};

export default Master;

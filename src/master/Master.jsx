import React from "react";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import Footer from "../components/Footer";
import Dashboard from "../pages/dashboard/Dashboard";

const Master = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Dashboard />
      <Footer />
    </>
  );
};

export default Master

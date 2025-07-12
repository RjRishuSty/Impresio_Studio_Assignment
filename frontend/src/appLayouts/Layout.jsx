import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname.startsWith("/profile/") && <SubHeader />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

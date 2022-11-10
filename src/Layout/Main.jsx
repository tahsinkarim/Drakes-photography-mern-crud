import React from "react";
import { Outlet } from "react-router-dom";
import { useScrollToTop } from "react-router-scroll-to-top";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";

const Main = () => {
  useScrollToTop();
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

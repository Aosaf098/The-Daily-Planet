import React from "react";
import Header from "../Components/Header";
import Latest from "../Components/Latest";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/LeftNavbar";
import RightNavbar from "../Components/RightNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="font-pop w-11/12 mx-auto">
        <Header />
        <Latest />
        <Navbar />
        <menu className="mt-14 lg:grid lg:grid-cols-12">
            <aside className="lg:col-span-3 lg:block mb-10">
                <LeftNavbar />
            </aside>
            <div className="lg:col-span-6">
                <Outlet />
            </div>
            <aside className="lg:col-span-3">
                <RightNavbar />
            </aside>
        </menu>
      </div>
    </>
  );
};

export default HomeLayout;

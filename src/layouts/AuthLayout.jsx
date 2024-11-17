import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <>
      <div className="font-pop bg-[#f3f3f3] h-dvh">
        <header className="w-11/12 p-4 mx-auto">
          <Navbar />
        </header>
        <div className="mt-10 flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

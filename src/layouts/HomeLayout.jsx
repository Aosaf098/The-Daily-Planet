import React from "react";
import Header from "../Components/Header";
import Latest from "../Components/Latest";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <div className="font-pop w-11/12 mx-auto">
        <Header />
        <Latest />
        <Navbar />
      </div>
    </>
  );
};

export default HomeLayout;

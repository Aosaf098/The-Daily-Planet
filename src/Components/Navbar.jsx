import React, { useContext } from "react";
import { FaRegUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <>
      <nav className="flex justify-between items-center px-12">
        <div>
          <h3 className="text-lg font-bold">{user && user?.email}</h3>
        </div>
        <div className="block lg:hidden">
          <details className="dropdown">
            <summary className="btn m-1 bg-white border-none">
              <RxHamburgerMenu size={20} />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-32 space-y-4 p-2 shadow">
              <Link to={"/category/01"}>Home</Link>
              <Link>About</Link>
              <Link>Career</Link>
            </ul>
          </details>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-10 text-normal font-semibold">
            <Link to={"/category/01"}>Home</Link>
            <Link>About</Link>
            <Link>Career</Link>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <FaRegUser size={20} />
          {user && user?.email ? (
            <button onClick={signOutUser} className="btn bg-primary text-white px-6">Log Out</button>
          ) : (
            <Link to={"/auth/login"} className="btn bg-primary text-white px-6">
              Login
            </Link>
          )}
          {/*  */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

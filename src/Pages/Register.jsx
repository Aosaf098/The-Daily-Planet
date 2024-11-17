import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleRegSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    createNewUser(email, password)
    .then(result => {
        const user = result.user
        console.log(user)
        setUser(user)
    })
    .catch(error => {
        console.log(error.code)
    })
  };

  return (
    <>
      <div className="bg-base-100 w-full max-w-2xl py-10 px-16 shrink-0 shadow-xl rounded-2xl">
        <h3 className="text-center text-4xl">Register your Account</h3>
        <hr className="mt-6" />
        <form onSubmit={handleRegSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="terms" id="terms" />
            <label className="text-sm">Accept Terms & Conditions</label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-primary border-none">
              Register
            </button>
          </div>
          <div className="mt-3 mx-auto">
            <span className="font-semibold">
              Already have an account?{" "}
              <Link to={"/auth/login"} className="text-primary">
                Sign In
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

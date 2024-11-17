import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-base-100 w-full max-w-xl py-10 px-16 shrink-0 shadow-xl rounded-2xl">
        <h3 className="text-center text-4xl">Login</h3>
        <hr className="mt-6" />
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg">Email</span>
            </label>
            <input
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
          <div className="flex items-center gap-2">
            <input type="checkbox" name="remember" id="remember"/>
            <label className="text-sm">Remember Me?</label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-primary border-none">Login</button>
          </div>
          <div className="mt-3 mx-auto">
            <span className="font-semibold">Don't have an account?  <Link to={'/auth/register'} className="text-primary">Sign Up</Link></span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";

const Login = () => {

    const {signInUser} = useContext(AuthContext)
    
    const handleLogInSubmit = e => {
        e.preventDefault()

        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')

        signInUser(auth, email, password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
        })
    }
  return (
    <>
      <div className="bg-base-100 w-full max-w-xl py-10 px-16 shrink-0 shadow-xl rounded-2xl">
        <h3 className="text-center text-4xl">Login</h3>
        <hr className="mt-6" />
        <form onSubmit={handleLogInSubmit} className="card-body">
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
          <div className="flex items-center gap-2">
            <input type="checkbox" name="remember" id="remember" />
            <label className="text-sm">Remember Me?</label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-primary border-none">
              Login
            </button>
          </div>
          <div className="mt-3 mx-auto">
            <span className="font-semibold">
              Don't have an account?{" "}
              <Link to={"/auth/register"} className="text-primary">
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

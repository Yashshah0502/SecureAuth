import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>

        <form className="space-y-4">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-full p-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-slate-300"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full p-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-slate-300"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full p-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-slate-300"
          />

          <button
            type="submit"
            className="w-full bg-slate-700 text-white py-3 rounded-lg uppercase font-semibold hover:bg-slate-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p>
            Already have an account?{" "}
            <Link to="/Signin" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
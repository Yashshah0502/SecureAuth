import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message || "Sign in failed"));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full p-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-slate-300"
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full p-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-slate-300"
            onChange={handleChange}
          />

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-slate-700 text-white py-3 rounded-lg uppercase font-semibold hover:bg-slate-600 transition duration-200"
          >
            {loading ? "Logging In" : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p>
            Dont have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
          <p className="text-red-700 mt-5">
            {error ? error || "Something went wrong!" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

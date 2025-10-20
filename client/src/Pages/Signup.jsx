import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      // console.log(data);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-full p-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-slate-300"
            onChange={handleChange}
          />
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
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          
          <p>
            Already have an account?{" "}
            <Link to="/Signin" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
          <p className="text-red-700 mt-5">{error && "Something went wrong!"}</p>

        </div>
      </div>
    </div>
  );
}

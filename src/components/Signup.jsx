import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [metamaskcode, setMetamaskcode] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://authx-bn.onrender.com/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, metamaskcode }), // Matching backend keys
      });

      const data = await response.json();

      if (response.status === 200) {
        setMessage("User created successfully!");
        setUsername("")
        setPassword("")
        setMetamaskcode("")
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(data.Msg || "Signup failed. User may already exist.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url("https://builtin.com/sites/www.builtin.com/files/2024-10/Blockchain%20Technology%20from%20Builtin.jpg")`,
        }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Signup</h2>
          </div>
          {message && <p className="text-center text-green-600 font-semibold">{message}</p>}
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">User ID</label>
              <input
                type="text"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter user ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Metamask Wallet Address</label>
              <input
                type="text"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter MetaMask Wallet Address"
                value={metamaskcode}
                onChange={(e) => setMetamaskcode(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Signup Securely
            </button>
            <p className="text-center text-sm text-gray-600 mt-3">
              Existing User?{" "}
              <Link to="/login" className="text-blue-600 font-semibold">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

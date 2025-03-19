import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Hello } from "./Hello";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
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
                 <h2 className="text-3xl font-bold text-gray-900">Login Page</h2>
               </div>
               <form onSubmit={handleSubmit}>
                 <div className="mb-6">
                   <label className="block text-gray-700 text-sm font-bold mb-2">
                     Email
                   </label>
                   <input
                     type="email"
                     className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="Enter your email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                   />
                 </div>
                 <div className="mb-6">
                   <label className="block text-gray-700 text-sm font-bold mb-2">
                     Password
                   </label>
                   <input
                     type="password"
                     className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="Enter your password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                   />
                 </div>
                 <button
                   type="submit"
                   className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                 >
                   Login Securely
                 </button>
                 <p className="text-center text-sm text-gray-600 mt-3">
                   New  User?{" "}
                   <Link to="/signup" className="text-blue-600 font-semibold">
                     Signup
                   </Link>
                 </p>
               </form>
             </div>
           </div>
           <div>
      </div>
    </>
  );
};

export default Login;

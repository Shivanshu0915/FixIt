import React, { useState } from "react";
// import {AdminSignup} from "../components/AdminSignup.jsx"
import {UserSignup} from "../components/Authentication/UserSignup.jsx"
import { AdminSignup } from "../components/Authentication/AdminSignup.jsx";

const Signup = () => {
  const [isAdmin, setLoginMode] = useState(true); // 'admin' or 'user'

  return (
    <div className="min-h-[100vh] w-full flex items-center justify-center bg-badamidark p-8">
      <div className="bg-white rounded-lg shadow-md shadow-white p-8 min-w-[40%] w-auto flex flex-col lg:flex-row">

        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4 text-brown6">
            {isAdmin ? "Admin Sign Up" : "User Sign Up"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isAdmin ? "Signup as an administrator to manage the platform."
              : "Signup as a student to make your account."}
          </p>

          {/* Buttons to Toggle Login Mode */}
          <div className="flex space-x-4 mb-6">
            <button
              className={`py-2 px-4 rounded-md font-medium transition ${isAdmin ? "bg-brown5 text-white hover:bg-brown6 cursor-pointer"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
                }`}
              onClick={() => setLoginMode(!isAdmin)}
            >
              Admin
            </button>
            <button
              className={`py-2 px-4 rounded-md font-medium transition ${!isAdmin ? "bg-brown5 text-white hover:bg-brown6 cursor-pointer"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer" 
                }`}
              onClick={() => setLoginMode(!isAdmin)}
            >
              User
            </button>
          </div>

          {/* Admin Login Form */}
          {isAdmin ? (
            <AdminSignup></AdminSignup>)
            : (
            <UserSignup></UserSignup>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
const Signup = () => {
  const [loginMode, setLoginMode] = useState("admin"); // 'admin' or 'user'

  return (
    <div className="min-h-screen flex items-center justify-center bg-badamidark p-4">
      <div className="bg-white rounded-lg shadow-md shadow-white p-8 max-w-2xl w-full flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4 text-brown6">
            {loginMode === "admin" ? "Admin Sign Up" : "User Sign Up"}
          </h2>
          <p className="text-gray-600 mb-6">
            {loginMode === "admin"
              ? "Signup as an administrator to manage the platform."
              : "Signup as a student to make your account."}
          </p>

          {/* Buttons to Toggle Login Mode */}
          <div className="flex space-x-4 mb-6">
            <button
              className={`py-2 px-4 rounded-md font-medium transition ${
                loginMode === "admin"
                  ? "bg-brown5 text-white hover:bg-brown6 animate-pulse"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setLoginMode("admin")}
            >
              Admin
            </button>
            <button
              className={`py-2 px-4 rounded-md font-medium transition ${
                loginMode === "user"
                  ? "bg-brown4 text-white hover:bg-brown6 animate-pulse"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setLoginMode("user")}
            >
              User
            </button>
          </div>

          {/* Admin Login Form */}
          {loginMode === "admin" && (
            <form>
        <div className="mb-2">
        <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
        >
            Name
        </label>
        <input
            type="name"
            id="name"
            placeholder="Enter your name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
        />
        </div>
        <div className="mb-2">
        <label
            htmlFor="authority"
            className="block text-gray-700 font-medium mb-2"
        >
            Authority
        </label>
        <select
            name="countryCode"
            id="countryCode"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
        > Phone
        <option value="Manager">Manager</option>
        <option value="Secretary">Secretary</option>
        <option value="Cook">Cook</option>
        <option value="Warden">Warden</option>
        </select>
        </div>
        <label
            htmlFor="PhoneNo."
            className="block text-gray-700 font-medium mb-2"
        >
            Phone No.
        </label>
        <div className="mb-2 flex md-4 border rounded-md focus:outline-none focus:ring-2 focus:brown6">
        <select
            name="countryCode"
            id="countryCode"
            className="rounded-l-lg p-3 focus:ring-2 focus:ring-brown2 focus:border-brown4 bg-gray-50"
        > 
        <option value="+91">+91</option>
        <option value="+1">+1</option>
        <option value="+44">+44</option>
        <option value="+61">+61</option>
        </select>
        {/* Input Field */}
        <input
        type="text"
        placeholder="Enter your phone number"
        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:brown6"
        />
        </div>
        <div className="mb-2">
        <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
        >
            Email
        </label>
        <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
        />
        </div>
        <div className="mb-3">
        <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
        >
            Password
        </label>
        <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
        />
        </div>
        <button
            type="submit"
            className="w-full text-white py-3 bg-brown6 shadow-lg shadow-brown2 rounded-md transition hover:shadow-md"
        >
            Login as Admin
        </button>
        </form>
          )}

          {/* User Login Form */}
          {loginMode === "user" && (
            <form>
              <div className="mb-2">
        <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
        >
            Name
        </label>
        <input
            type="name"
            id="name"
            placeholder="Enter your name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
        />
        </div>
        <div className="mb-2">
        <label
            htmlFor="authority"
            className="block text-gray-700 font-medium mb-2"
        >
            Registration Number
        </label>
        <input
            type="Registration Number"
            id="RegNo"
            placeholder="Enter your Registration Number"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
        />
        </div>
        <label
            htmlFor="PhoneNo."
            className="block text-gray-700 font-medium mb-2"
        >
            Phone No.
        </label>
        <div className="mb-2 flex md-4 border rounded-md focus:outline-none focus:ring-2 focus:brown6">
        <select
            name="countryCode"
            id="countryCode"
            className="rounded-l-lg p-3 focus:ring-2 focus:ring-brown2 focus:border-brown4 bg-gray-50"
        > 
        <option value="+91">+91</option>
        <option value="+1">+1</option>
        <option value="+44">+44</option>
        <option value="+61">+61</option>
        </select>
        {/* Input Field */}
        <input
        type="text"
        placeholder="Enter your phone number"
        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:brown6"
        />
        </div>
        <div className="mb-2">
        <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
        >
            Email
        </label>
        <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
        />
        </div>
        <div className="mb-3">
        <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
        >
            Password
        </label>
        <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
        />
        </div>
        <button
            type="submit"
            className="w-full text-white py-3 bg-brown6 shadow-lg shadow-brown2 rounded-md transition hover:shadow-md"
        >
            Login as Admin
        </button>
            </form>
          )} 
        </div>

        {/* Right Section: Illustration */}
        {/* <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center">
          <img
            src="https://cdn.dribbble.com/users/3281732/screenshots/16120527/media/53b8f6c7c5e6a87f3bc92b8fa22f2fdb.png"
            alt="Login Illustration"
            className="rounded-lg shadow-lg max-h-96"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Signup;

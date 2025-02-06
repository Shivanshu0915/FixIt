import React, { useState } from "react";
const LoginPage = () => {
  const [loginMode, setLoginMode] = useState("admin"); // 'admin' or 'user'

  return (
    <div className="min-h-screen flex items-center justify-center bg-badamidark p-4">
      <div className="bg-white rounded-lg shadow-md shadow-white p-8 max-w-4xl w-full flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <h2 className="text-3xl font-bold mb-4 text-brown6">
            {loginMode === "admin" ? "Admin Login" : "User Login"}
          </h2>
          <p className="text-gray-600 mb-6">
            {loginMode === "admin"
              ? "Login as an administrator to manage the platform."
              : "Login as a student to access your account."}
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
              <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
                <label
                  htmlFor="regno"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Registration Number
                </label>
                <input
                  type="text"
                  id="regno"
                  placeholder="Enter your registration number"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
                />
              </div>
              <div className="mb-4">
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
                Login as User
              </button>
            </form>
          )}
          {/* Divider */}
          <div className="text-center text-sm text-gray-500 my-4">OR</div>
          {/* Google Sign In */}
          <button className="w-full flex items-center justify-center text-white bg-badami5 border border-gray-300 py-2 rounded-md hover:bg-black transition duration-1000">
            <img
              src="src/assets/GoogleImage/channels4_profile.jpg"
              alt="Google"
              className="w-8 h-8 mr-3"
            />
            Sign in with Google
          </button>
          {/* Sign Up Link */}
          <p className="text-sm text-gray-500 mt-6 text-center flex justify-center">
            Haven't signup?{" "}
            <p className = "animate-bounce"> 
            <a href="src/Signup.jsx" className="m-1 text-red-500 font-medium hover:underline">
              Sign up here!
            </a>
            </p>
          </p>
        {/* </div> */}
           {/* <div className = "flex">
            <div>Haven't Signup Yet?</div>
            <div>Sign up</div>
            </div> */}
        </div>

        {/* Right Section: Illustration */}
        <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center">
          <img
            src="https://cdn.dribbble.com/users/3281732/screenshots/16120527/media/53b8f6c7c5e6a87f3bc92b8fa22f2fdb.png"
            alt="Login Illustration"
            className="rounded-lg shadow-lg max-h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

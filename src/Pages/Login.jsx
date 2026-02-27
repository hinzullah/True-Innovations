import React, { useState } from "react";
import Chukskitchen from "../assets/Chuks Kitchen.png";
import banner from "../assets/Rectangle 1.png";
import { FaEnvelope } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { IoEyeOffSharp, IoEye } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    setMessage(
      "Login functionality is not implemented yet. Please create an account to sign up.",
    );
    // Handle login logic here
  }

  return (
    <div className="w-full min-h-screen text-gray-900">
      <div className="flex flex-col md:grid md:grid-cols-2 min-h-screen">
        {/* image side */}
        <div className="hidden md:block relative min-h-screen">
          <img
            src={banner}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FF7A18]/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6 lg:px-8">
            <p className="text-white text-xl lg:text-2xl font-medium pb-2">
              Welcome Back
            </p>
            <p className="text-white/90 max-w-xs text-center text-sm leading-relaxed">
              Log in to continue enjoying delicious, authentic Nigerian meals
              from Chuks Kitchen!
            </p>
          </div>
        </div>

        {/* text side */}
        <div className="w-full flex flex-col px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 overflow-y-auto">
          <form
            className="flex flex-col space-y-3 sm:space-y-4 my-auto max-w-md mx-auto w-full"
            onSubmit={handleSubmit}
          >
            {/* logo + title */}
            <div className="flex flex-col items-center gap-1 pb-2 sm:pb-4">
              <img
                src={Chukskitchen}
                alt="Chuks Kitchen"
                className="h-7 sm:h-8 w-auto"
              />
              <p className="text-lg sm:text-xl font-bold">
                Log In Your Account
              </p>
            </div>

            {/* message */}
            {message && (
              <div className="p-3 sm:p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-md text-xs sm:text-sm leading-relaxed">
                {message}
              </div>
            )}

            {/* email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-xs sm:text-sm px-1 pb-1 font-medium"
              >
                Email or Phone
              </label>
              <div className="flex items-center border gap-2 border-gray-300 rounded-md p-2 sm:p-2.5">
                <FaEnvelope className="text-gray-400 shrink-0 text-sm sm:text-base" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="name@gmail.com"
                  className="outline-none border-none flex-1 text-xs sm:text-sm"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center px-1 pb-1">
                <label
                  htmlFor="password"
                  className="text-xs sm:text-sm font-medium"
                >
                  Password
                </label>

                <a
                  href="/reset-password"
                  className="text-xs sm:text-sm text-[#1877F2] hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="flex items-center border gap-2 border-gray-300 rounded-md p-2 sm:p-2.5">
                <IoMdLock className="text-gray-400 shrink-0 text-sm sm:text-base" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="**********"
                  className="outline-none border-none flex-1 text-xs sm:text-sm"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer text-gray-400"
                >
                  {showPassword ? (
                    <IoEyeOffSharp size={18} />
                  ) : (
                    <IoEye size={18} />
                  )}
                </span>
              </div>
            </div>

            {/* submit */}
            <button
              type="submit"
              className="text-white w-full cursor-pointer rounded-md bg-[#FF7A18] py-2.5 sm:py-3 px-6 text-sm sm:text-base font-medium hover:bg-[#e56d10] transition-colors"
            >
              Continue
            </button>

            {/* divider */}
            <p className="text-center text-xs sm:text-sm text-gray-400 pt-2">
              Or continue with
            </p>

            {/* google */}

            <a
              href="#"
              className="text-gray-900 flex items-center justify-center gap-2 rounded-md bg-[#eee] py-2.5 sm:py-3 px-6 text-sm sm:text-base font-medium hover:bg-[#ddd] transition-colors"
            >
              <FcGoogle size={18} />
              <span>Continue with Google</span>
            </a>

            {/* facebook */}

            <a
              href="#"
              className="text-white flex items-center justify-center gap-2 rounded-md bg-[#1877F2] py-2.5 sm:py-3 px-6 text-sm sm:text-base font-medium hover:bg-[#1565d8] transition-colors"
            >
              <RiFacebookFill size={18} />
              <span>Continue with Facebook</span>
            </a>

            {/* Sign up link */}
            <p className="text-center text-xs sm:text-sm pt-2">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-[#FF7A18] cursor-pointer font-medium hover:underline"
              >
                Create an account
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

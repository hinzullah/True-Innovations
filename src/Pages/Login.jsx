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

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // Handle login logic here
  }

  return (
    <div className="w-full h-screen overflow-hidden text-gray-900">
      <div className="flex flex-col md:grid md:grid-cols-2 h-full">
        {/* IMAGE SIDE */}
        <div className="hidden md:block relative h-full">
          <img
            src={banner}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* TEXT SIDE */}
        <div className="w-full h-full flex flex-col px-6 py-6 md:px-12 md:py-8 overflow-y-auto">
          <form
            className="flex flex-col space-y-4 my-auto"
            onSubmit={handleSubmit}
          >
            {/* LOGO + TITLE */}
            <div className="flex flex-col items-center gap-1 pb-2">
              <img
                src={Chukskitchen}
                alt="Chuks Kitchen"
                className="h-8 w-auto"
              />
              <p className="text-xl font-bold">Log In Your Account</p>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm px-1 pb-1 font-medium">
                Email or Phone
              </label>
              <div className="flex items-center border gap-2 border-gray-300 rounded-md p-2">
                <FaEnvelope className="text-gray-400 shrink-0" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="name@gmail.com"
                  className="outline-none border-none flex-1 text-sm"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center px-1 pb-1">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <a
                  href="/reset-password"
                  className="text-xs text-[#1877F2] hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="flex items-center border gap-2 border-gray-300 rounded-md p-2">
                <IoMdLock className="text-gray-400 shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="**********"
                  className="outline-none border-none flex-1 text-sm"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer text-gray-400"
                >
                  {showPassword ? <IoEyeOffSharp /> : <IoEye />}
                </span>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="text-white w-full rounded-md bg-[#FF7A18] py-2.5 px-6 font-medium hover:bg-[#e56d10] transition-colors"
            >
              Continue
            </button>

            {/* DIVIDER */}
            <p className="text-center text-sm text-gray-400">
              Or continue with
            </p>

            {/* GOOGLE */}
            <a
              href="#"
              className="text-gray-900 flex items-center justify-center gap-2 rounded-md bg-[#eee] py-2.5 px-6 font-medium hover:bg-[#ddd] transition-colors"
            >
              <FcGoogle size={18} />
              Continue with Google
            </a>

            {/* FACEBOOK */}
            <a
              href="#"
              className="text-white flex items-center justify-center gap-2 rounded-md bg-[#1877F2] py-2.5 px-6 font-medium hover:bg-[#1565d8] transition-colors"
            >
              <RiFacebookFill size={18} />
              Continue with Facebook
            </a>

            {/* SIGN UP LINK */}
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-[#FF7A18] font-medium hover:underline"
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

import React, { useState } from "react";
import Chukskitchen from "../assets/Chuks Kitchen.png";
import banner from "../assets/Rectangle 1.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { IoEyeOffSharp, IoEye } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signing up with:", { email, phone, password });
    // Handle signup logic here
  }

  return (
    <div className="w-full h-screen text-gray-900 mb-12">
      <div className="flex flex-col md:grid md:grid-cols-2 h-full">
        {/* IMAGE SIDE */}
        <div className="hidden md:block relative h-full">
          <img
            src={banner}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FF7A18]/60" />
          <div className="absolute inset-0  flex flex-col items-center justify-center z-10 text-center px-8">
            <p className="text-white text-2xl font-medium pb-2">
              Chuks Kitchen
            </p>
            <p className="text-white/90 w-75 text-center text-sm leading-relaxed">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="w-full h-full flex flex-col px-6 py-6 md:px-12 md:py-8">
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
              <p className="text-xl font-bold">Create Your Account</p>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm px-1 pb-1 font-medium">
                Email
              </label>
              <div className="flex items-center border gap-2 border-gray-300 rounded-md p-2">
                <FaEnvelope className="text-gray-400 shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="name@gmail.com"
                  className="outline-none border-none flex-1 text-sm"
                  required
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm px-1 pb-1 font-medium">
                Phone Number
              </label>
              <div className="flex items-center border gap-2 border-gray-300 rounded-md p-2">
                <FaPhoneAlt className="text-gray-400 shrink-0" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  placeholder="123-456-7890"
                  className="outline-none border-none flex-1 text-sm"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-sm px-1 pb-1 font-medium"
              >
                Password
              </label>
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

            {/* CONFIRM PASSWORD */}
            <div className="flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="text-sm px-1 pb-1 font-medium"
              >
                Confirm Password
              </label>
              <div className="flex items-center border gap-2 border-gray-300 rounded-md p-2">
                <IoMdLock className="text-gray-400 shrink-0" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="confirmPassword"
                  placeholder="**********"
                  className="outline-none border-none flex-1 text-sm"
                  required
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="cursor-pointer text-gray-400"
                >
                  {showConfirmPassword ? <IoEyeOffSharp /> : <IoEye />}
                </span>
              </div>
            </div>

            {/* TERMS */}
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" required className="mt-0.5 shrink-0" />
              <p>
                I agree to the{" "}
                <a href="/terms" className="text-[#1877F2] hover:underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-[#1877F2] hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="text-white w-full rounded-md bg-[#FF7A18] py-2.5 px-6 font-medium hover:bg-[#e56d10] transition-colors"
            >
              Create Account
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

            {/* LOGIN LINK */}
            <p className="text-center text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-[#1877F2] font-medium hover:underline"
              >
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

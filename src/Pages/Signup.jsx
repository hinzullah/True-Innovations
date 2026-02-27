import React, { useState } from "react";
import Chukskitchen from "../assets/Chuks Kitchen.png";
import banner from "../assets/Rectangle 1.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { IoEyeOffSharp, IoEye } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signing up with:", { email, phone, password });

    setMessage(
      "Sign up functionality is not implemented yet. Redirecting to landing page...",
    );

    setTimeout(() => {
      navigate("/landpage");
    }, 2000);
  }

  return (
    <div className="w-full min-h-screen text-gray-900">
      <div className="flex flex-col md:grid md:grid-cols-2 min-h-screen">
        {/* IMAGE SIDE */}
        <div className="hidden md:block relative min-h-screen">
          <img
            src={banner}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FF7A18]/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6 lg:px-8">
            <p className="text-white text-xl lg:text-2xl font-medium pb-2">
              Chuks Kitchen
            </p>
            <p className="text-white/90 max-w-xs text-center text-sm leading-relaxed">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="w-full flex flex-col px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 overflow-y-auto">
          <form
            className="flex flex-col space-y-3 sm:space-y-4 my-auto max-w-md mx-auto w-full"
            onSubmit={handleSubmit}
          >
            {/* LOGO + TITLE */}
            <div className="flex flex-col items-center gap-1 pb-2 sm:pb-4">
              <img
                src={Chukskitchen}
                alt="Chuks Kitchen"
                className="h-7 sm:h-8 w-auto"
              />
              <p className="text-lg sm:text-xl font-bold">
                Create Your Account
              </p>
            </div>

            {/* MESSAGE */}
            {message && (
              <div className="p-3 sm:p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-md text-xs sm:text-sm leading-relaxed">
                {message}
              </div>
            )}

            {/* EMAIL */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-xs sm:text-sm px-1 pb-1 font-medium"
              >
                Email
              </label>
              <div className="flex items-center border gap-2 border-gray-300 rounded-md p-2 sm:p-2.5">
                <FaEnvelope className="text-gray-400 shrink-0 text-sm sm:text-base" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="name@gmail.com"
                  className="outline-none border-none flex-1 text-xs sm:text-sm"
                  required
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-xs sm:text-sm px-1 pb-1 font-medium"
              >
                Phone Number
              </label>
              <div className="flex items-center border gap-2 border-gray-300 rounded-md p-2 sm:p-2.5">
                <FaPhoneAlt className="text-gray-400 shrink-0 text-sm sm:text-base" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  placeholder="123-456-7890"
                  className="outline-none border-none flex-1 text-xs sm:text-sm"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-xs sm:text-sm px-1 pb-1 font-medium"
              >
                Password
              </label>
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

            {/* CONFIRM PASSWORD */}
            <div className="flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="text-xs sm:text-sm px-1 pb-1 font-medium"
              >
                Confirm Password
              </label>
              <div className="flex items-center border gap-2 border-gray-300 rounded-md p-2 sm:p-2.5">
                <IoMdLock className="text-gray-400 shrink-0 text-sm sm:text-base" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="confirmPassword"
                  placeholder="**********"
                  className="outline-none border-none flex-1 text-xs sm:text-sm"
                  required
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="cursor-pointer text-gray-400"
                >
                  {showConfirmPassword ? (
                    <IoEyeOffSharp size={18} />
                  ) : (
                    <IoEye size={18} />
                  )}
                </span>
              </div>
            </div>

            {/* TERMS */}
            <div className="flex items-start gap-2 text-xs sm:text-sm">
              <input type="checkbox" required className="mt-0.5 shrink-0" />
              <p className="leading-relaxed">
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
              className="text-white w-full rounded-md bg-[#FF7A18] py-2.5 sm:py-3 px-6 text-sm sm:text-base font-medium hover:bg-[#e56d10] transition-colors"
            >
              Create Account
            </button>

            {/* DIVIDER */}
            <p className="text-center text-xs sm:text-sm text-gray-400 pt-2">
              Or continue with
            </p>

            {/* GOOGLE */}

            <a
              href="#"
              className="text-gray-900 flex items-center justify-center gap-2 rounded-md bg-[#eee] py-2.5 sm:py-3 px-6 text-sm sm:text-base font-medium hover:bg-[#ddd] transition-colors"
            >
              <FcGoogle size={18} />
              <span>Continue with Google</span>
            </a>

            {/* FACEBOOK */}
            <a
              href="#"
              className="text-white flex items-center justify-center gap-2 rounded-md bg-[#1877F2] py-2.5 sm:py-3 px-6 text-sm sm:text-base font-medium hover:bg-[#1565d8] transition-colors"
            >
              <RiFacebookFill size={18} />
              <span>Continue with Facebook</span>
            </a>

            {/* LOGIN LINK */}
            <p className="text-center text-xs sm:text-sm pt-2">
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

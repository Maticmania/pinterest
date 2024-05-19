import React, { useState } from "react";
import pLogo from "../assets/Image/pinterest.png";
import Modal from "./Modal";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { GrStatusWarning } from "react-icons/gr";


const SignUp = ({ open, setOpen }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const [email, setEmail] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [dob, setDob] = useState("");
  const [dobErr, setDobErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Regular expression for validating email addresses
    const emailInput = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailRegex.test(emailInput)) {
      setEmailErr("Hmm, that does not look like an email address.");
    } else {
      setEmailErr("");
      // Perform your submit logic here
    }

    const passwordInput = password.trim();
    if (!passwordInput || passwordInput.length < 6) {
      setPasswordErr("Your password is too short! You need 6+ characters.");
    } else {
      setPasswordErr("");
      // Perform your submit logic here
    }

    const currentDate = new Date();
    const minDobDate = new Date();
    minDobDate.setFullYear(currentDate.getFullYear() - 10);

    const selectedDate = new Date(dob);

    if (selectedDate > minDobDate) {
      setDobErr("You must be at least 10 years old.");
    } else {
      setDobErr("");
      // Perform your submit logic here
    }

    if (!emailInput && !passwordInput) {
      setEmailErr("You missed a spot, Don't forget to add your email");
    } else if (emailInput && !passwordInput) {
      setPasswordErr("You missed a spot, Don't forget to add your password");
    } else if (emailInput && passwordInput && !dob) {
      setDobErr("You missed a spot, Don't forget to add your birthday");
    }
  };

  const handleShowPassword = () => {
    setShowpassword(!showPassword);
  };

  return (
    <>
      <button
        className="text-base text-center font-semibold bg-red-600 p-2 text-white rounded-2xl px-3 cursor-pointer hover:bg-red-700"
        onClick={() => setOpen(true)}
      >
        Sign up
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="h-full bg-white w-5/5 flex items-center justify-center flex-col">
          <img src={pLogo} alt="logo" className="h-8" />
          <h1 className="font-bold text-3xl">Welcome to Pinterest</h1>
          <p>Find new ideas to try</p>
          <div className="h-auto w-11/12 flex items-center justify-center">
                <form
                  onSubmit={handleSubmit}
                  className="w-4/6 h-auto flex flex-col gap-2"
                >
                  <div>
                    <label className="flex flex-col">
                      <span className="px-2">Email</span>
                      <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="p-3 border-2 border-gray-300 rounded-2xl focus:outline-4 outline-none focus:border-none focus:outline-sky-300  "
                      />
                    </label>
                    {emailErr && (
                      <span className="text-xs px-1 flex gap-1 items-center text-red-600 font-semibold">
                        <GrStatusWarning />
                        {emailErr}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <label className="flex flex-col">
                      <span className="px-2">Password</span>
                      <input
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Create a password"
                        className="p-3 border-2  border-gray-300 rounded-2xl focus:outline-4 outline-none focus:border-none focus:outline-sky-300 "
                      />
                      {passwordErr && (
                        <span className="text-xs px-1 flex gap-1 items-center text-red-600 font-semibold">
                          <GrStatusWarning />
                          {passwordErr}
                        </span>
                      )}
                      <span
                        className="absolute right-5 top-10"
                        onClick={handleShowPassword}
                      >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col">
                      <span className="px-2">Birthdate</span>
                      <input
                        type="date"
                        onChange={(e) => setDob(e.target.value)}
                        value={dob}
                        className="p-3 border-2 border-gray-300 rounded-2xl focus:outline-4 outline-none focus:border-none focus:outline-sky-300 "
                      />
                    </label>
                    {dobErr && (
                      <span className="text-xs px-1 flex gap-1 items-center text-red-600 font-semibold">
                        <GrStatusWarning />
                        {dobErr}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-red-600 w-full h-11 my-2 rounded-full text-white"
                  >
                    Continue
                  </button>
                </form>
          </div>
          <p className="text-lg font-bold">OR</p>
          <button className="bg-blue-500 w-3/5 h-11 my-2 rounded-full text-white flex px-3 items-center gap-5">
            <SiFacebook className="text-2xl" /> <p>Continue with Facebook</p>
          </button>
          <button className="w-3/5 h-11 my-2 rounded-full border-gray border-2 hover:bg-slate-100 flex px-3 items-center gap-5">
            <FcGoogle className="text-2xl" /> <p>Continue with Google</p>
          </button>
          <p className="text-gray-400 text-sm">
            By continuing, you agree to Pinterest's
          </p>
        </div>
      </Modal>
    </>
  );
};

export default SignUp;

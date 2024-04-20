import React, { useState } from "react";
import pLogo from "../assets/Image/pinterest.png";
import Modal from "./Modal";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



const SignUp = ({open, setOpen}) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const handleShowPassword =()=>{
    setShowpassword(!showPassword)
  }

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
            <form className="w-4/6 h-auto flex flex-col gap-2">
              <div>
                <label className="flex flex-col">
                  <span className="px-2">Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-3 border-2 border-gray-300 rounded-2xl focus:outline-4 outline-none focus:border-none focus:outline-sky-300  "
                  />
                </label>
              </div>
              <div className="relative">
                <label className="flex flex-col">
                  <span className="px-2">Password</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 border-2 border-gray-300 rounded-2xl focus:outline-4 outline-none focus:border-none focus:outline-sky-300 "
                  />
                  <span className="absolute right-5 top-10" onClick={handleShowPassword} >{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                </label>
              </div>
              <div>
                <label className="flex flex-col">
                  <span className="px-2">Birthdate</span>
                  <input
                    type="date"
                    className="p-3 border-2 border-gray-300 rounded-2xl focus:outline-4 outline-none focus:border-none focus:outline-sky-300 "
                  />
                </label>
              </div>
              <button className="bg-red-600 w-full h-11 my-2 rounded-full text-white">
                Continue
              </button>
            </form>
          </div>
          <p className="text-lg font-bold">OR</p>
          <button className="bg-blue-500 w-3/5 h-11 my-2 rounded-full text-white flex px-3 items-center gap-5">
           <SiFacebook className="text-2xl"/> <p>Continue with Facebook</p>
          </button>
          <button className="w-3/5 h-11 my-2 rounded-full border-gray border-2 hover:bg-slate-100 flex px-3 items-center gap-5">
           <FcGoogle className="text-2xl"/> <p>Continue with Google</p>
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

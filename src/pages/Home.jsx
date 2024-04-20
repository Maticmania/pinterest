import React from "react";
import pLogo from "../assets/Image/pinterest.png";
import SignUp from "../components/SignUp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
           <section className="bg-yellow-100 h-screen">
        <div
          id="header"
          className="h-20 bg-white flex justify-between items-center px-0 fixed w-full z-"
        >
          <div className="left-side flex px-10 gap-4">
            <div className="logo flex items-center gap-1 cursor-pointer">
              <img src={pLogo} alt="logo" className="h-8" />
              <h1 className="text-xl text-red-700 font-bold">Pinterest</h1>
            </div>
            <ul className="flex items-center gap-2 ">
              <li className="text-base text-center font-semibold cursor-pointer p-2 rounded hover:bg-slate-200">
                Watch
              </li>
              <li className="text-base text-center font-semibold cursor-pointer p-2 rounded hover:bg-slate-200">
                Explore
              </li>
            </ul>
          </div>
          <div className="Right-side flex items-center">
            <ul className="flex gap-6 items-center">
              <li className="text-base text-center font-semibold cursor-pointer hover:underline">
                About
              </li>
              <li className="text-base text-center font-semibold cursor-pointer hover:underline">
                Business
              </li>
              <li className="text-base text-center font-semibold cursor-pointer hover:underline">
                Blog
              </li>
            </ul>
            <ul className="gap-2 items-center px-6 hidden">
              <Link to='login'>
              <li className="text-base text-center font-semibold bg-red-600 p-2 text-white rounded-2xl px-3 cursor-pointer hover:bg-red-700">
                Log in
              </li>
              </Link>
              <li className="text-base text-center font-semibold bg-gray-200 p-2 rounded-2xl px-3 cursor-pointer hover:bg-gray-300">
                Sign up
              </li>
            </ul>
          </div>
        </div>
        <div
          id="bottom"
          className="bg-[url('/src/assets/Image/bg-2.avif')] h-screen bg-bottom bg-cover flex justify-between pt-12 "
        >
          <div className="h-full w-2/5 flex items-center justify-center ">
            <h1 className="text-7xl font-semibold  text-yellow-100 w-3/5">
              Sign up to get your ideas
            </h1>
          </div>
          <div id="login" className="h-full w-2/5">
          </div>
        </div>
        <div className="w-full h-8 bg-white">
          <ul className="flex text-sm justify-center items-center gap-2 h-full cursor-pointer">
            <li className="hover:underline">Terms of service</li>
            <li className="hover:underline">Privacy Policy</li>
            <li className="hover:underline">Help</li>
            <li className="hover:underline">Iphone App</li>
            <li className="hover:underline">Android App</li>
            <li className="hover:underline">Users</li>
            <li className="hover:underline">Collections</li>
            <li className="hover:underline">Shopping</li>
            <li className="hover:underline">Today</li>
            <li className="hover:underline">Explore</li>
            <li className="hover:underline">Watch</li>
            <li className="hover:underline">Shop</li>
          </ul>
        </div>
      </section> 
    </>
  )
}

export default Home


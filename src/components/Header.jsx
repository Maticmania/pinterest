import React from "react";
import pinlogo from "../assets/Image/pinterest.png";
import { IoNotifications } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header w-full h-20 bg-slate-100 fixed z-10 flex justify-center items-center gap-2 min-[320px]:hidden xl:flex">
        <div className="left flex items-center gap-1">
          <NavLink to="/">
            <img
              src={pinlogo}
              alt="logo"
              className="w-16 p-2 cursor-pointer rounded-full hover:bg-gray-300"
            />
          </NavLink>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "p-3 text-white bg-black rounded-3xl"
                : "p-3 text-black transparent font-bold rounded-3xl"
            }
          >
            Home
          </NavLink>
          {/* <div className="relative group">
          <button className=" p-2 rounded-3xl flex items-center gap-1 font-bold">
            Create
            <span className="text-2xl">
              <RiArrowDownSLine />
            </span>
          </button>
          <div className="absolute w-44 h-auto bg-slate-200 -left-10 top-14 rounded-xl flex-col items-start justify-around p-1 hidden group-hover:flex transition-flex duration-300">
          <button className="p-2 hover:bg-gray-500 w-full text-left rounded-xl font-semibold">Create Pin Idea</button>
          <button className="p-2 hover:bg-gray-500 w-full text-left rounded-xl font-semibold">Create Pin </button>
          </div>
          </div> */}
          <NavLink
            to="/create"
            className={({ isActive }) =>
              isActive
                ? "p-3 text-white bg-black rounded-3xl"
                : "p-3 text-black transparent font-bold rounded-3xl"
            }
          >
            Create
          </NavLink>
        </div>
        <div className="middle flex relative group w-[80%]">
          <input
            type="text"
            className="w-full rounded-2xl bg-gray-200 py-3 border-none focus:outline-4 outline-none focus:border-none focus:outline-sky-200 hover:bg-gray-300"
            placeholder="Search"
          />
          <div className="absolute w-11/12 h-auto bg-slate-200 left-10 top-14 rounded-xl flex-col p-1 hidden group-hover:flex transition-opacity duration-300 py-3">
            <section className="p-3">
              <p className="text-xl">Ideas for you</p>
              <div className="grid grid-cols-3 py-2 gap-5">
                <div className="h-32 bg-gray-300 rounded-xl flex items-center gap-1">
                  <div className="h-full bg-gray-400 w-1/3 rounded-l-xl">
                    {/* Image here */}
                  </div>
                  <p className="w-2/4 h-5 bg-gray-400 rounded-lg"></p>
                </div>
                <div className="h-32 bg-gray-300 rounded-xl flex items-center gap-1">
                  <div className="h-full bg-gray-400 w-1/3 rounded-l-xl">
                    {/* Image here */}
                  </div>
                  <p className="w-2/4 h-5 bg-gray-400 rounded-lg"></p>
                </div>
                <div className="h-32 bg-gray-300 rounded-xl flex items-center gap-1">
                  <div className="h-full bg-gray-400 w-1/3 rounded-l-xl">
                    {/* Image here */}
                  </div>
                  <p className="w-2/4 h-5 bg-gray-400 rounded-lg"></p>
                </div>
                <div className="h-32 bg-gray-300 rounded-xl flex items-center gap-1">
                  <div className="h-full bg-gray-400 w-1/3 rounded-l-xl">
                    {/* Image here */}
                  </div>
                  <p className="w-2/4 h-5 bg-gray-400 rounded-lg"></p>
                </div>
                <div className="h-32 bg-gray-300 rounded-xl flex items-center gap-1">
                  <div className="h-full bg-gray-400 w-1/3 rounded-l-xl">
                    {/* Image here */}
                  </div>
                  <p className="w-2/4 h-5 bg-gray-400 rounded-lg"></p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="right flex items-center gap-1 ">
          <div className="relative notification">
            <button className="text-gray-500 font-bold text-2xl p-2 rounded-3xl hover:bg-gray-200 group">
              <IoNotifications />
              <span className="absolute -left-6 -bottom-8 text-sm px-2 py-1 rounded-lg bg-black text-white font-normal hidden group-hover:flex transition-opacity duration-300">
                Notification
              </span>
            </button>
          </div>
          <div className="message relative">
            <button className="text-gray-500 font-bold text-2xl p-2 rounded-3xl hover:bg-gray-200 group">
              <AiFillMessage />
              <span className="absolute -left-6 -bottom-8 text-sm px-2 py-1 rounded-lg bg-black text-white font-normal hidden group-hover:flex transition-opacity duration-300">
                Messages
              </span>
            </button>
          </div>
          <div className="User relative">
            <button className="text-gray-500 font-bold text-2xl p-2 rounded-3xl hover:bg-gray-200 group">
              <FaUserLarge />
              <span className="absolute w-24 -left-6 -bottom-8 text-sm px-2 py-1 rounded-lg bg-black text-white font-normal hidden group-hover:flex transition-opacity duration-300">
                Your profile
              </span>
            </button>
          </div>
          <div className="Arrow relative">
            <button className="text-gray-500 font-bold text-2xl p-2 rounded-3xl hover:bg-gray-200 group">
              <RiArrowDownSLine />
              <span className="absolute -left-32 top-full text-sm px-2 py-1 rounded-lg bg-black text-white font-normal hidden group-hover:flex transition-opacity duration-300">
                Account and more options
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="tablet flex w-full justify-center">
        <div className="mobile-header w-full fixed bottom-0 z-10 h-16 bg-slate-100 flex items-center justify-around md:bottom-2 md:w-2/5 md:rounded-full md:justify-evenly md:h-20 xl:hidden">
          <div className="home flex flex-col items-center md:g-0 gap-1">
            <p className="text-3xl ">
              <GoHomeFill />
            </p>
            <p className="text-sm font-semibold">Home</p>
          </div>
          <div className="home flex flex-col items-center gap-1 md:g-0">
            <p className="text-3xl text-gray-500">
              <FaSearch />
            </p>
            <p className="text-sm font-semibold">Search</p>
          </div>
          <div className="home flex flex-col items-center gap-1 md:g-0">
            <p className="text-3xl text-gray-500">
              <AiFillMessage />
            </p>
            <p className="text-sm font-semibold">Notifications</p>
          </div>
          <div className="home flex flex-col items-center gap-1 md:g-0">
            <p className="text-3xl text-gray-500">
              <FaUserLarge />
            </p>
            <p className="text-sm font-semibold">Saved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

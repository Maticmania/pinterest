import React from "react";
import Header from "../components/Header";
import { BsThreeDots } from "react-icons/bs";
import { RxShare2 } from "react-icons/rx";
import { FcLike } from "react-icons/fc";
import { GiRoyalLove } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { data } from "../db/data";
import Comment from "../components/Comment";

const Detail = () => {
  const { productId } = useParams();

  const product = data.find((p) => p.id === parseInt(productId));

  const { title, link, img, desc } = product;

  return (
    <>
      <Header />
      <div className="pindetails container mx-auto w-full flex items-center justify-center pt-24">
        <div className="details w-full xl:w-3/4 rounded-3xl bg-white shadow-2xl flex flex-col xl:flex-row h-auto">
          <div className="image w-full xl:w-1/2 bg-gray-50 rounded-t-3xl xl:rounded-l-3xl xl:rounded-t-none p-4">
            <img src={img} className="w-full h-auto rounded-2xl object-cover" alt={title} />
          </div>
          <section className="content w-full xl:w-1/2 rounded-b-3xl xl:rounded-r-3xl xl:rounded-b-none flex flex-col justify-between">
            <div className="w-full h-20 flex items-center justify-between px-5 shadow-sm">
              <div className="flex items-center text-2xl gap-5 font-bold">
                <p className="cursor-pointer">
                  <RxShare2 />
                </p>
                <p className="cursor-pointer">
                  <BsThreeDots />
                </p>
              </div>
              <button className="text-white bg-red-600 p-3 rounded-3xl px-5 hover:bg-red-700">
                Save
              </button>
            </div>
            <div className="w-full flex flex-1 items-center justify-center flex-col overflow-auto gap-2 px-5">
              <div className="description w-full">
                <p>{link}</p>
                <h2 className="pin-name font-extrabold text-3xl">{title}</h2>
                <p className="pin-desc">{desc}</p>
              </div>
              <div className="user flex items-center justify-between w-full">
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="text-xl p-2 px-4 rounded-full bg-yellow-400">
                    A
                  </p>
                  <div className="name">
                    <p className="username text-xl">Ali</p>
                    <p className="followers">19.2k followers</p>
                  </div>
                </div>
                <button className="bg-gray-300 p-2 px-3 rounded-full text-lg hover:bg-gray-400">
                  Follow
                </button>
              </div>
              <div className="comment w-full pt-5 max-h-60 xl:max-h-60 overflow-y-auto">
                <Comment product={product} />
              </div>
            </div>
            <div className="flex items-center justify-center min-h-[130px] h-auto flex-col border-t border-gray-300">
              <div className="flex items-center justify-between w-full px-5">
                <p className="text-xl font-semibold">2 Comments</p>
                <div className="flex items-center gap-5">
                  <p className="flex items-center gap-1 text-lg">
                    <FcLike />
                    17
                  </p>
                  <p className="p-2 text-2xl bg-gray-200 rounded-full">
                    <GiRoyalLove />
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full px-5 gap-2">
                <span className="text-xl py-3 px-5 rounded-full bg-green-500 font-extrabold text-white">
                  Q
                </span>
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="w-full py-3 rounded-full bg-gray-300 focus:bg-white border-1 focus:border-transparent focus:outline-none"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Detail;

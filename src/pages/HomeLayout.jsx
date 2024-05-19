import React from 'react'
import {data} from "../db/data";
import "../css/styles.css";
import { BsThreeDots } from "react-icons/bs";
import { RxShare2 } from "react-icons/rx";
import Header from '../components/Header';


const HomeLayout = () => {
    return (
      <div className="home">
        <Header/>
        <div className="gallery mx-auto min-[320px]:columns-2 sm:columns-2 md:columns-3 gap-x-4 lg:columns-3 xl:columns-5 2xl:columns-6 min-[1600px]:columns-[12] xl:pt-24 min-[320px]:py-2" style={{width:'98%'}}>
          {data.map((image, idx) => {
            return (
                <div
                key={idx}
                className="relative inline-block w-full my-1 cursor-zoom-in roun"
              >
                <img
                  src={image.img}
                  alt="monkey"
                  className="block w-full rounded-2xl hover:opacity-75 transition-opacity duration-300 "
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-2xl">
                  <button className='absolute text-white top-2 right-2 bg-red-600 p-1 rounded-2xl px-3 hover:bg-red-700' >Save</button>
                  <span className='absolute bg-white bottom-2 right-2 p-2 rounded-2xl cursor-pointer hover:bg-gray-300'><BsThreeDots /></span>
                  <span className='absolute bg-white bottom-2 right-12 p-2 rounded-2xl cursor-pointer hover:bg-gray-300'><RxShare2 /></span>
                </div>
              </div>
              
            );
          })}
        </div>
      </div>
    );
  }
export default HomeLayout


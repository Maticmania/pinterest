import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";


const LoginModal = ({ open, onClose, children }) => {
    return (
        // backdrop
        <div
          onClick={onClose}
          className={`
            fixed inset-0 flex justify-center items-center transition-colors
            ${open ? "visible bg-black/20" : "invisible"}
          `}
        >
          {/* modal */} 
          <div
            onClick={(e) => e.stopPropagation()}
            style={{height: '97vh'}}
            className={`
              bg-white rounded-xl shadow p-6 transition-all w-2/6 
              ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
            `}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-1 text-3xl text-gray-400 bg-white w-fit hover:bg-gray-50 hover:text-gray-600"
            >
              <IoIosCloseCircle/>
            </button>
            {children}
          </div>
        </div>
      )
}

export default LoginModal

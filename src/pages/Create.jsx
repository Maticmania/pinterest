import React, { useRef } from "react";
import Header from "../components/Header";
import CreatePin from "../components/CreatePin";

const Create = () => {
  const createPinRef = useRef(null);

  const handleSubmitClick = () => {
    if (createPinRef.current) {
      createPinRef.current.dispatchEvent(
        new Event("submit", { bubbles: true, cancelable: true })
      );
    }
  };

  return (
    <>
      <Header />
      <div className="h-auto xl:h-[600px] border-t border-gray-500 mt-8 xl:mt-[100px] flex flex-col xl:flex-row gap-2 container mx-auto">
        <div className="h-full border-gray-500 border-r w-full xl:w-[450px] space-y-4">
          {/* Create Control */}
          <div className="h-auto xl:h-[120px] border-b border-gray-400 flex flex-col justify-around">
            <h1 className="flex justify-between px-4 text-lg font-bold">
              Pin Drafts(1) <span className="">Arrow</span>
            </h1>
            <button className="bg-gray-400 py-2 mx-4 rounded-full">
              Create new
            </button>
          </div>
          {/* Draft Pins */}
          <div className="border-2 border-black h-auto xl:h-[90px] bg-gray-300 flex items-center px-2 gap-4 mx-2 rounded-xl">
            <img
              src=""
              alt="Pin draft"
              className="border-4 h-16 w-20 rounded-2xl"
            />
            <p>30 days until expiration</p>
          </div>
        </div>
        <div className="flex h-full w-full flex-col">
          <div className="border-gray-500 border-b h-auto xl:h-[80px] w-full flex items-center justify-between px-4">
            <p>Create Pin</p>
            <button
              className="text-white bg-red-600 p-3 rounded-3xl px-5 hover:bg-red-700"
              onClick={handleSubmitClick}
            >
              Publish
            </button>
          </div>
          {/* For Create Pin */}
          <div className="p-5 overflow-y-auto xl:px-24">
            <CreatePin ref={createPinRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;

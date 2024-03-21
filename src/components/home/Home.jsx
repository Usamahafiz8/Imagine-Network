import React from "react";
import { GoSearch } from "react-icons/go";

const Home = () => {
  return (
    <>
      <div className="text-white">
        <div className="bg-[#0c0b0d]">
          <div className=" w-[96%] pb-4 flex flex-col gap-4 mx-auto">
            <h1 className="text-[48px] w-[35%] mx-auto">Imagen Network</h1>
            <div className="w-[40%] mx-auto ">
              <span className="flex justify-between items-center px-4 w-[70%] py-2  mx-auto bg-[#0f0f11] border-2 border-gray-600 rounded-lg">
                <input
                  type="text"
                  className="bg-[#0f0f11] text-[24px] "
                  placeholder="Search"
                />
                <GoSearch fontSize="24px" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

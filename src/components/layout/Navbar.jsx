import React from "react";
// import logo from "../assets/png/imagen.png";
import darklogo from "../assets/png/863838-5.png";
import { IoHomeSharp } from "react-icons/io5";
import { FaClapperboard } from "react-icons/fa6";
import { FaEllo } from "react-icons/fa";
import { FaFireFlameSimple } from "react-icons/fa6";
import { MdExplore } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaFeatherAlt } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import WalletConnect from "../web3/ConnectWallet";

const Navbar = () => {
  return (
    <>
      <div className="w-[96%] flex justify-between mx-auto">
        <div>
          <img src={darklogo} width={60} height={60} alt="logo" />
        </div>
        <div className="flex items-center gap-4 text-[18px] text-gray-200">
          <div className="flex gap-2 items-center cursor-pointer">
            <span>
              <IoHomeSharp fontSize={24} />
            </span>
            <h1 className="bd">Home</h1>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <span>
              <FaClapperboard fontSize={20} />
            </span>
            <h1>Shorts</h1>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <span>
              <FaEllo fontSize={20} />
            </span>
            <h1>Reactions</h1>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <span>
              <FaFireFlameSimple fontSize={20} />
            </span>
            <h1>Hot!</h1>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <span>
              <MdExplore fontSize={20} />
            </span>
            <h1>Explore</h1>
          </div>
        </div>
        <div className="flex text-gray-200 gap-2 items-center">
          <div className="rounded-full p-2.5 bg-[#151419]">
            <FaSearch />
          </div>
          <div>
            <button className="flex items-center rounded-2xl bg-white text-black px-4 py-2 gap-1 text-[18px]">
              {/* <FaFeatherAlt /> Create */}
              <WalletConnect/>
            </button>
          </div>
          <div className="bg-[#151419] rounded-full p-2.5">
            <span className="">
              <CiCirclePlus fontSize={24} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

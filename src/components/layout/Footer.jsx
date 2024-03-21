import React from "react";
import { RiTelegramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Tooltip } from "@mui/material";

const Footer = () => {
  return (
    <div className="bg-[#030303]">
      <div className=" w-[96%] bg-[#151419]  rounded-xl mt-[30px] mb-[10px] px-10 pt-6 pb-4 mx-auto">
        <div className="flex w-[17%] mx-auto gap-4">
          <Tooltip title="Join us on Telegram!" placement="top">
            <span className="bg-transparent border border-gray-500 rounded-xl p-2 ">
              <RiTelegramLine
                fontSize="24px"
                style={{
                  color: "white",
                }}
              />
            </span>
          </Tooltip>
          <Tooltip title="Follow us on Twiter" placement="top">
            <span className="bg-transparent border border-gray-500 rounded-xl p-2 ">
              <FaTwitter
                fontSize="24px"
                style={{
                  color: "white",
                }}
              />
            </span>
          </Tooltip>
        </div>
        <div className="flex gap-40 pr-[196px]  mt-6 items-center w-[81%] mx-auto">
          <div className="text-white flex flex-col">
            <button>Send feedback</button>
            <button>Features</button>
          </div>
          <span className="borders"></span>
          <div>
            <h1 className="text-white">Get $IMAGE</h1>
            <h1 className="text-white">Use $IMAGE</h1>
          </div>
          <span className="borders"></span>
          <div className="text-white">
            <button>FAQ</button>
          </div>
        </div>
        <h1 className="text-white w-[24%] mt-8 mx-auto">
          2024 © Imagen AI | All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;

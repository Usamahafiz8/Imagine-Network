import React, { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoHomeSharp } from "react-icons/io5";
import { FaFireFlameSimple } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import Tags from "./Tags";
import PropTypes from "prop-types";

const Sidebar = ({ show, setShow }) => {
  const [showIcons, setShowIcons] = useState(true);
  Sidebar.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
  };
  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const toggleTags = () => {
    setShow(!show);
  };
  console.log(show);
  return (
    <>
      <div className="w-[5%]   bg-[#030303] h-screen  ">
        <div className="flex gap-8 ">
          <div className="text-white">
            {showIcons ? (
              <div className="py-2 px-6 " onClick={toggleIcons}>
                <FaGripLines fontSize="24px" />
              </div>
            ) : (
              <div className="py-2 px-6 " onClick={toggleIcons}>
                <RxCross1 fontSize="24px" />
              </div>
            )}
            <div className="flex gap-20 pt-24">
              <div className="icons ">
                <div className="flex flex-col gap-5 px-6 ">
                  <div>
                    <button onClick={toggleTags} className="icon-border py-2 ">
                      <IoHomeSharp fontSize="20px" />
                    </button>
                  </div>
                  <div>
                    <button className="icon-border py-2" onClick={toggleTags}>
                      <FaFireFlameSimple fontSize="20px" />
                    </button>
                  </div>
                  <div>
                    <button className="icon-border py-2" onClick={toggleTags}>
                      <FaNewspaper fontSize="20px" />
                    </button>
                  </div>
                  <div>
                    <button className="icon-border py-2" onClick={toggleTags}>
                      <FaVideo fontSize="20px" />
                    </button>
                  </div>
                  <div>
                    <button className="icon-border py-2" onClick={toggleTags}>
                      <FaImage fontSize="20px" />
                    </button>
                  </div>
                  <div>
                    <button className="icon-border py-2" onClick={toggleTags}>
                      <FaHashtag fontSize="20px" />
                    </button>
                  </div>
                  <div>
                    <button className="icon-border py-2" onClick={toggleTags}>
                      <FaUsers fontSize="20px" />
                    </button>
                  </div>
                </div>
                {/* --- */}
                <div className="flex flex-col gap-5 pt-20">
                  <div className="bg-[#151419] px-2 py-2 w-[35px]  h-[35px] mx-4 rounded-xl">
                    <FaUser />
                  </div>
                  <div className="flex flex-col gap-5 px-2 py-2 w-[35px] h-[70px] mx-4 bg-[#151419]  rounded-xl">
                    <FaSun />

                    <FaMoon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          {show && <Tags />}
        </div>

        {/* --- */}

        {/* <Tags /> */}
      </div>
    </>
  );
};

export default Sidebar;
{
  /* <div className="text-white  absolute   ">
{showIcons ? (
  <div className="py-4" onClick={toggleIcons}>
    <FaGripLines fontSize="24px" />
  </div>
) : (
  <div className="py-4" onClick={toggleIcons}>
    <RxCross1 fontSize="24px" />
  </div>
)}
<div className="flex gap-20 pt-24">
  <div className="icons">
    <div className="flex flex-col gap-10 ">
      <div>
        <IoHomeSharp fontSize="20px" />
      </div>
      <div>
        <FaFireFlameSimple fontSize="20px" />
      </div>
      <div>
        <FaNewspaper fontSize="20px" />
      </div>
      <div>
        <FaVideo fontSize="20px" />
      </div>
      <div>
        <FaImage fontSize="20px" />
      </div>
      <div>
        <FaHashtag fontSize="20px" />
      </div>
      <div>
        <FaUsers fontSize="20px" />
      </div>
    </div>
    <div className="flex flex-col gap-5 pt-20">
      <div>
        <FaUser />
      </div>
      <div>
        <FaSun />
      </div>
      <div>
        <FaMoon />
      </div>
    </div>
  </div>
</div>
</div> */
}

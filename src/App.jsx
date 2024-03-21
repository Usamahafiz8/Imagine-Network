import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Tags from "./components/sidebar/Tags";

const App = () => {
  const[show,setShow]=useState(false)
  return (
    <BrowserRouter>
      <div className="flex relative h-screen">
        {/* Sidebar */}
        {/* <div className="w-[5%]  bg-[#030303]">
        </div> */}
        <Sidebar show={show} setShow={setShow} />
        <div className="absolute bg-[#030303] left-[75px] z-50">
          <Tags show={show} setShow={setShow} />
        </div>

        {/* Main content area */}
        <div className="w-[95%]  ">
          {/* Navbar */}
          <div className="bg-[#030303]">
            <Navbar />
          </div>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

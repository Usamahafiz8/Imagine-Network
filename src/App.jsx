import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Tags from "./components/sidebar/Tags";
import HomePage from "./components/pages/home";
import LoginPage from "./components/pages/login";
import SignUp from "./components/pages/signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [show, setShow] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <BrowserRouter>
      {!isSmallScreen ? (
        <div className="lg:flex lg:relative h-screen">
          <div className="lg:w-[5%] bg-[#030303] h-screen lg:fixed">
            <Sidebar show={show} setShow={setShow} />
          </div>
          <div className="absolute bg-[#030303] left-[75px] z-50">
            <Tags show={show} setShow={setShow} />
          </div>

          <div className="w-[100%] lg:w-[95%]  absolute lg:right-0 ">
            <div className="bg-[#030303]">
              <Navbar />
            </div>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>

            <Footer />
          </div>
        </div>
      ) : (
        <div className="w-[100%]">
          <div className="bg-[#030303]">
            <Navbar />
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>

          <Footer />
        </div>
      )}
      <ToastContainer/>
      {/* <div className="lg:flex lg:relative h-screen">
        <div className=" hidden  lg:w-[5%] bg-[#030303] h-screen lg:fixed">
          <Sidebar show={show} setShow={setShow} />
        </div>
        <div className="absolute bg-[#030303] left-[75px] z-50">
          <Tags show={show} setShow={setShow} />
        </div>

        <div className="w-[100%] lg:w-[95%]  absolute lg:right-0 ">
          <div className="bg-[#030303]">
            <Navbar />
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>

          <Footer />
        </div>
      </div> */}
    </BrowserRouter>
  );
};

export default App;

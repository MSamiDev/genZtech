import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="sticky top-0 z-20 shadow-lg shadow-gray-600">
      <nav className="flex justify-between bg-black text-yellow-500 w-full sticky top-0 h-20 items-center z-10 text-2xl font-bold px-5">
        <h1 className="flex items-center">
          <a href="#Home">Gen Z Tech</a>
        </h1>

        <div className="hidden md:flex items-center h-full">
          <ul className="flex items-center h-full">
            <li className="p-4 h-full flex justify-center items-center hover:text-red-500 hover:underline duration-300 ease-in">
              <a href="/#Home">Home</a>
            </li>
            <li
              class=" p-4 h-full flex justify-center items-center relative dropbtn text-2xl border-none outline-none text-yellow-500   hover:text-red-500  hover:underline bg-transparent font-bold duration-300 ease-in delay m-0 cursor-pointer"
              onMouseEnter={() => {
                setShow(true);
              }}
              onMouseLeave={() => {
                setShow(false);
              }}
            >
              <a href="/#Overview">Course</a>
              <FaCaretDown />

              <div
                class={
                  show
                    ? "dropdown-content top-20  absolute bg-black  min-w-40 py-2 shadow-md z-10"
                    : "hidden"
                }
              >
                <a
                  class="block px-4 py-3 text-yellow-500 text-sm no-underline  hover:text-red-500  hover:underline "
                  href="/#Overview"
                >
                  DevOps Overview
                </a>
                <a
                  class="block px-4 py-3 text-yellow-500 text-sm no-underline  hover:text-red-500  hover:underline "
                  href="/#What"
                >
                  What is DevOps
                </a>
                <a
                  class="block px-4 py-3 text-yellow-500 text-sm no-underline  hover:text-red-500   hover:underline"
                  href="/#Why"
                >
                  Why DevOps
                </a>
              </div>
            </li>
            <li className="p-4 h-full flex justify-center items-center hover:text-red-500 hover:underline">
              <a href="/#AboutUs">About us</a>
            </li>
            <li className="p-4 h-full flex justify-center items-center hover:text-red-500 hover:underline">
              <a href="/#ContactUs">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          {showMenu ? (
            <FaTimes className="text-3xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-3xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden absolute top-20 right-4 bg-black min-w-40 py-2 shadow-md z-10">
            <ul className="flex flex-col items-center">
              <li className="p-4 w-full text-center hover:text-red-500 hover:underline">
                <a href="/#Home">Home</a>
              </li>
              <li className="p-4 w-full text-center hover:text-red-500 hover:underline">
                <a href="/#Overview">DevOps Overview</a>
              </li>
              <li className="p-4 w-full text-center hover:text-red-500 hover:underline">
                <a href="/#What">What is DevOps</a>
              </li>
              <li className="p-4 w-full text-center hover:text-red-500 hover:underline">
                <a href="/#Why">Why DevOps</a>
              </li>
              <li className="p-4 w-full text-center hover:text-red-500 hover:underline">
                <a href="/#AboutUs">About us</a>
              </li>
              <li className="p-4 w-full text-center hover:text-red-500 hover:underline">
                <a href="/#ContactUs">Contact us</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

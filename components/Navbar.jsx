import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navlinks } from "../constant";
import { LinkItem } from "../components";
import HamMenu from "./HamMenu";
import Modal from "./Modal";

const Navbar = () => {
  const navigate = useRouter();
  const [isHamOpen, setIsHamOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu === selectedMenu ? null : menu);
  };

  const handleItemClick = (menu, item) => {
    setSelectedMenu(null);
    navigate.push(`${menu.path}/${item.id}`);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-screen max-w-full font-extrabold">
      <div
        className={`bg1 px-6 md:px-8 lg:px-24  w-screen max-w-full fixed top-0 left-0  z-40 mx-auto p-5 flex items-center justify-between space-x-8`}
      >
        <div className="flex-grow md:flex-grow-0">
          <Link href="/" className="">
            <img
              src="/light-logo.png"
              className="w-20 lg:w-28 h-auto"
              alt="AgileLean logo"
            />
          </Link>
        </div>
        <div className=" hidden text-sm capitalize xl:inline-flex xl:space-x-8 2xl:space-x-20">
          {navlinks.map((item) => (
            <LinkItem
              key={item.name}
              item={item}
              setSelectedMenu={setSelectedMenu}
              selectedMenu={selectedMenu}
              isFooter={false}
            />
          ))}
          {/* <Link
            href="/blog"
            className="relative cursor-pointer flex items-center space-x-1"
          >
            <h1
              className={`text-white xl:text-base whitespace-nowrap text-sm hover:text-gray-300 `}
            >
              Blog
            </h1>
          </Link> */}
        </div>
        <div className="hidden xl:inline-flex">
          <button
            onClick={openModal}
            className="bg-white py-2 px-4 lg:py-4 lg:px-8 rounded-full cursor-pointer active:scale-90"
          >
            <h1 className="text-sm lg:text-base whitespace-nowrap">
              Book A Call
            </h1>
          </button>
        </div>
        <div
          onClick={() => {
            setIsHamOpen(!isHamOpen);
          }}
          className="xl:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <HamMenu show={isHamOpen} setShow={setIsHamOpen} />
      </div>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { navlinks } from "../constant";
import Link from "next/link";
import Modal from "./Modal";

const HamMenu = ({ show, setShow }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
    setShow(false);
  };

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu === selectedMenu ? null : menu);
  };

  const handleItemClick = (menu, item) => {
    setSelectedMenu(null);
    navigate.push(`${menu.path}/${item.id}`);
  };

  useEffect(() => {
    setIsBrowser(true);
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);
  const HamMenuContent = (
    <div>
      {show ? (
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          exit={{ x: 1000 }}
          transition={{ ease: "linear" }}
          className="overflow-clip fixed h-screen w-3/4 max-w-full bg-black1 z-50 top-[70px] p-8 right-0"
        >
          {/* Back Button */}
          <button onClick={() => setShow(false)}>
            <div className="flex text-white mb-24 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:-translate-x-2 transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              <p>Back</p>
            </div>
          </button>
          {/* Options div */}
          <div className="">
            {navlinks.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  if (selectedMenu === item.name) {
                    setSelectedMenu("");
                  } else {
                    setSelectedMenu(item.name);
                  }
                }}
                className="relative cursor-pointer border-b-[1px] border-gray-300 flex-col items-center"
              >
                <div className="flex-col items-center">
                  <div className="flex items-center space-x-2">
                    <h1
                      className={`text-white text-2xl ${
                        selectedMenu === item.name ? "text-gray-300" : ""
                      } `}
                    >
                      {item.name}
                    </h1>

                    <div
                      className={`text-white ${
                        selectedMenu === item.name
                          ? "rotate-180 text-gray-300"
                          : ""
                      } transition duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>

                  <motion.div
                    initial={{ height: "0%" }}
                    animate={{ height: "100%" }}
                    transition={{ ease: "linear" }}
                    exit={{ height: "0%" }}
                    className={`${
                      selectedMenu === item.name ? "inline-flex" : "hidden"
                    }`}
                  >
                    <div className="text-white">
                      {item.items.map((i, index) => (
                        <Link
                          href={`${item.path}/${i.id}`}
                          onClick={() => {
                            setShow(false);
                          }}
                          key={index}
                          className={`flex items-center space-x-2 px-5 p-2 group ${
                            index === item.items.length - 1
                              ? ""
                              : "border-b-[1px] border-gray-400"
                          }`}
                        >
                          <h1 className="whitespace-nowrap">{i.name}</h1>
                          <div className="group-hover:translate-x-3 transition duration-150">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
            <div className="lg:inline-flex pt-10">
              <button
                onClick={openModal}
                className="bg-white py-2 px-4 lg:py-4 lg:px-8 rounded-full cursor-pointer active:scale-90"
              >
                <h1 className="text-sm lg:text-base whitespace-nowrap">
                  Book A Call
                </h1>
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );

  if (isBrowser)
    return createPortal(HamMenuContent, document.getElementById("menu-root"));
  else return null;
};

export default HamMenu;

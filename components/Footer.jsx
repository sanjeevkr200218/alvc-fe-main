import React from "react";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import { navlinks } from "@/constant";
import { LinkItem } from ".";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu === selectedMenu ? null : menu);
  };
  return (
    <div className="max-w-full w-screen pb-4 md:pb-6 lg:pb-8 bg1 relative border-t-2 border-gray-500">
      <div
        className="container mx-auto text-white py-0 px-6
    xl:py-2 xl:w-full bg1"
      >
        <div
          className="flex justify-center flex-col
      xl:justify-around"
        >
          <div className="">
            <div
              className="flex justify-center flex-col lg:flex-row xl:flex-row items-center
           2md:justify-around lg:justify-around space-y-10  xl:justify-around my-2 xl:my-5"
            >
              <div className="flex justify-center space-y-3 flex-col items-center">
                <Link href="/">
                  <img
                    src="/light-logo.png"
                    className="w-[66px] md:w-[86px] xl:w-[102px] h-[28px] md:h-[35px] xl:h-[39px]
              object-contain"
                    alt="AgileLean logo"
                  />
                </Link>
                <div className="flex flex-col space-y-1 max-w-xs">
                  <p
                    className="text-[12px] md:text-[14px] xl:text-[16px]
               leading-[15px] md:leading-[20px] xl:leading-[25px] font-[400] text-center"
                  >
                    Agilean LLC
                  </p>
                  <p
                    className="text-[12px] md:text-[14px] xl:text-[16px]
               leading-[15px] md:leading-[20px] xl:leading-[25px] font-[400] text-center"
                  >
                    1299, 447 Broadway, 2nd Floor, New York, NY, New York, US,
                    10013
                  </p>
                  <a
                    href="mailto:startups@agilean.vc"
                    className="text-[12px] md:text-[14px] xl:text-[16px]
               leading-[15px] md:leading-[20px] xl:leading-[25px] font-[400] text-center"
                  >
                    startups@agilean.vc
                  </a>
                </div>
              </div>
              <div className="flex lg:pb-0 pb-10 2md:mt-[5rem] xl:mt-[5rem] xl:-ml-40">
                <div className=" flex flex-col text-black space-y-2 pr-10">
                  {navlinks.map((item) => (
                    <LinkItem
                      key={item.name}
                      item={item}
                      setSelectedMenu={setSelectedMenu}
                      selectedMenu={selectedMenu}
                      isFooter={true}
                    />
                  ))}
                </div>
                <ul
                  className="text-[12px] md:text[14px] xl:text-[16px]
               leading-[15px] md:leading-[20px] xl:leading-[25px]  font-[400]
               space-y-3"
                >
                  {/* <Link href="/blog">Blog</Link> */}

                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                  >
                    Contact
                  </li>
                  <li>
                    <div className="flex items-center">
                      <Link
                        href="https://www.linkedin.com/company/agileanvc/"
                        target="_blank"
                      >
                        <img
                          src="/linkedin.png"
                          className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
                          alt=""
                        />
                      </Link>
                      <Link
                        href="https://web.facebook.com/agileNlean"
                        target="_blank"
                      >
                        <img
                          src="/facebook.png"
                          className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
                          alt=""
                        />
                      </Link>
                    </div>
                  </li>

                  <li className="invisible">Validation Types</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p
                className="text-[12px] md:text-[16px] xl:text-[18px]  font-[400]
            leading-[15px] md:leading-[24px] xl:leading-[30px] "
              >
                2023, All rights reserved
              </p>
              <div
                className="flex space-x-2 underline text-[12px] md:text-[16px] xl:text-[18px]  font-[400]
            leading-[15px] md:leading-[24px] xl:leading-[30px]"
              >
                <Link href="/copyrightpolicy">Copyright Policy</Link>
                <Link href="/privacypolicy">Privacy Policy</Link>
                <Link href="/termsofuse">Terms of use</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default Footer;

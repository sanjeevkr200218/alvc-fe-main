import { useState } from "react";
import { bookItem } from "../data";
import Modal from "./Modal";

const Book = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className="bg-[#b0c4cd]
     text-black px-5 paddingb1"
    >
      <div className="flex flex-col items-center lg:space-y-5">
        <p className="uppercase h2 font-extrabold">Why choose us?</p>
        <h1 className="font1 font-bold text-gray-600">SaaS and ERP</h1>
        <p className="max-w-xl font-semibold text-gray-600 font1 text-center">
          Design, develop, and support complex, high performing SaaS
          applications
        </p>
        <p className="h3 font-extrabold">Starting at</p>
        <h2 className=" h2 font-extrabold underline text-center">1% Equity</h2>
        <p className="h4">*Per month with a 6 month commitment</p>
        <div className="pt-10 pb-10 flex flex-col md:flex-row xl:flex-row justify-around xl:items-center md:space-x-10 items-start">
          {bookItem.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 xl:pt-10  pt-5"
            >
              <img
                src={item.icon}
                className="  bg-[#111] rounded-full 
                h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] object-contain tablet_book-icons p-2"
                alt=""
              />
              <p className="font3 font-bold">{item.text}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="h-[37px] active:scale-90 md:h-[54px] xl:h-[84px] xl:my-16 mt-8 font-[Roboto] w-[152px] 
            md:w-[250px] xl:w-[574px] bg-[#111] xl:rounded-[18px] rounded-[8px] text-white 
            text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[28px] leading-[18.75px] md:leading-[24px] 
            xl:leading-[32.81px] font-[500]"
        >
          Book a call
        </button>
      </div>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default Book;

import React from "react";

const Card = (props) => {
  return (
    <div className="text-center max-w-xs md:max-w-sm lg:max-w-2xl h-[300px] flex flex-col justify-center items-center p-6 text-white rounded-xl overflow-clip bg-white bg-opacity-20 shadow ">
      <h5 className="mb-4 font-bold h4 underline text-white dark:text-white">
        {props.title}
      </h5>
      <p className="font4 text-white">{props.text}</p>
    </div>
  );
};

export default Card;

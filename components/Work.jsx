import Logo from "./Logo";
import { logos } from "../data";
import Marquee from "react-fast-marquee";
import { useState } from "react";

const Work = () => {
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  function sliceIntoTwoEqualHalves(arr) {
    const mid = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, mid);
    const secondHalf = arr.slice(mid);
    return [firstHalf, secondHalf];
  }
  sliceIntoTwoEqualHalves(logos)[0];
  return (
    <div className="h-full py-10 md:py-16 xl:py-20  bg-[#b0c4cd]">
      <h1
        className="text-center not-italic md:leading-[19px] xl:leading-[38px] text-[16px] 
        md:text-[24px]  xl:text-[32px] text-black  pt-2 xl:pt-2 pb-10 xl:pb-10 font-[600]"
      >
        We Work With
      </h1>
      <div className="w-screen relative z-10 pt-10 max-w-full">
        <div
          onMouseEnter={() => {
            setDescription1(description1);
          }}
          onMouseLeave={() => {
            setDescription1("");
          }}
          className={`${
            description1 !== "" ? "flex" : "hidden"
          } absolute text-sm z-20 left-[50%] -translate-x-[50%] text-white bg-black bg-opacity-60`}
        >
          {description1}
        </div>
        <Marquee pauseOnHover={true} direction={"left"}>
          {sliceIntoTwoEqualHalves(logos)[0].map((logo, index) => (
            <div className="px-5 lg:px-20" key={index}>
              <Logo
                title={logo.title}
                description={logo.description}
                imageUrl={logo.imageUrl}
                dimensions={logo.dimensions}
                setDescription={setDescription1}
              />
            </div>
          ))}
        </Marquee>
        <div className="pt-10 relative z-10">
          <div
            onMouseEnter={() => {
              setDescription2(description2);
            }}
            onMouseLeave={() => {
              setDescription2("");
            }}
            className={`${
              description2 !== "" ? "flex" : "hidden"
            } absolute text-sm z-20 left-[50%] -translate-x-[50%] text-white bg-black bg-opacity-60`}
          >
            {description2}
          </div>
          <Marquee pauseOnHover={true} direction={"right"}>
            {sliceIntoTwoEqualHalves(logos)[1].map((logo, index) => (
              <div className="px-5 lg:px-20" key={index}>
                <Logo
                  title={logo.title}
                  description={logo.description}
                  imageUrl={logo.imageUrl}
                  dimensions={logo.dimensions}
                  setDescription={setDescription2}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Work;

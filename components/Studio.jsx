import React from "react";
import { leftCardItem, rightCardItem, largeCardItem } from "../data";
import { LargeCard } from "../components";
import Break from "./Break";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Studio = () => {
  const items1 = [
    "Digitization and Automation",
    "Visibility and Predictability",
    "Finding cutting-edge ways",
    "Security and Transparency",
    "Security and Transparency",
    "New Approaches to Digitize and Automate Processes",
  ];

  return (
    <div className="relative w-screen max-w-full">
      <div className="absolute top-[12%] md:top-[9%] lg:top-[6%] bg-white bg-opacity-10 skew-y-12 h-56 w-screen max-w-full" />
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="h3 font-bold pb-10 md:pb-14 lg:pb-20">
            We are a startup studio providing:
          </h1>
          <div className="paddingb1 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
            {leftCardItem?.map((card, index) => (
              <div
                key={index}
                className="flex space-x-2 md:space-x-4 lg:space-x-6 items-center"
              >
                <img
                  src="/tick.svg"
                  className="h-8 lg:h-10 object-contain"
                  alt="tick"
                />
                <p
                  className="h4 text-center font-semibold
              py-5"
                >
                  {card.title}
                </p>
              </div>
            ))}

            {rightCardItem?.map((card, index) => (
              <div
                key={index}
                className="flex space-x-2 md:space-x-4 lg:space-x-6 items-center"
              >
                <img
                  src="/tick.svg"
                  className="h-8 lg:h-10  object-contain"
                  alt="tick"
                />
                <p
                  className="h4 text-center font-semibold
               py-5"
                >
                  {card.title}
                </p>
              </div>
            ))}
          </div>
          <Break />
          <div
            className="paddingt1 h-full xl:h-full  flex 
       px-6 md:px-0  flex-col md:flex-row xl:flex-row items-center xl:space-x-0 xl:md:space-x-6 xl:xl:space-x-16"
          >
            <div className="order-last pt-10 md:pt-0 2md:order-first xl:order-first">
              <img src="/disc.svg" className="image" alt="disc" />
            </div>
            <div className="textcontainer">
              <p className="font2 text-center">
                Against all odds: thoughts and observations from a permanent
                state of starting up. We build your startup product from zero to
                one. We bring the tech and product expertise early-stage
                founders need. We are your technical product team. We help get
                your startup from an idea into the market and beyond. We
                typically work with pre-seed and seed-funded businesses
                alongside founders.
              </p>
            </div>
          </div>
          <div className="paddingt1 paddingb1 lg:hidden">
            <Carousel
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              width={"75vw"}
              showStatus={false}
            >
              {largeCardItem.map((card, index) => (
                <div key={index} className="pb-20">
                  <LargeCard text={card.text} title={card.title} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="hidden lg:block paddingt1 paddingb1">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              width={"75vw"}
              showStatus={false}
            >
              <div className="flex items-center justify-center space-x-5">
                {largeCardItem
                  .map((card, index) => (
                    <div key={index} className="pb-20">
                      <LargeCard text={card.text} title={card.title} />
                    </div>
                  ))
                  .slice(0, 2)}
              </div>
              <div className="flex items-center justify-center space-x-5">
                {largeCardItem
                  .map((card, index) => (
                    <div key={index} className="pb-20">
                      <LargeCard text={card.text} title={card.title} />
                    </div>
                  ))
                  .slice(2, 4)}
              </div>
              <div className="flex items-center justify-center space-x-5">
                {largeCardItem
                  .map((card, index) => (
                    <div key={index} className="pb-20">
                      <LargeCard text={card.text} title={card.title} />
                    </div>
                  ))
                  .slice(4, 6)}
              </div>
            </Carousel>
          </div>
          <Break />
          <div
            className="flex paddingt1  px-6 md:px-0 items-center 
      flex-col md:flex-row xl:flex-row space-x-0 lg:space-x-20 xl:space-x-20 
      "
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="h3 font-bold text-center">
                We are investing time and money at a very early stage into ideas
                and founders to validate promising opportunities.
                <br /> Focus areas are (non-exclusive):
              </h1>
              <div className="flex flex-col lg:flex-row lg:space-x-20 translate-x-[4%] md:translate-x-[5%] lg:translate-x-[7%] xl:translate-x-[10%] space-y-2 lg:space-y-0 pt-20  items-left justify-center">
                <div className="flex flex-col space-y-2">
                  {items1
                    .map((list, index) => (
                      <div key={index} className="">
                        <div className="flex items-center space-x-4">
                          <img
                            src="/bullet.svg"
                            className="w-8 h-8 object-contain"
                            alt="bullet"
                          />
                          <p className="h4">{list}</p>
                        </div>
                      </div>
                    ))
                    .slice(0, 3)}
                </div>
                <div className="flex flex-col space-y-2">
                  {items1
                    .map((list, index) => (
                      <div key={index} className="">
                        <div className="flex items-center space-x-4">
                          <img
                            src="/bullet.svg"
                            className="w-8 h-8 object-contain"
                            alt="bullet"
                          />
                          <p className="h4">{list}</p>
                        </div>
                      </div>
                    ))
                    .slice(3)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="paddingt1">
        <Break />
      </div>
    </div>
  );
};

export default Studio;

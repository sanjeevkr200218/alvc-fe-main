import React from "react";
import { leftCardItem, rightCardItem, largeCardItem } from "../data";
import { LargeCard } from "../components";
import Break from "./Break";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Studio = () => {
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
                  className="h4 text-center font-bold
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
                  className="h4 text-center font-bold
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
              <img
                src="/Business-Plan.svg"
                className="image"
                alt="Personal Opinions"
              />
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
            <div className="textcontainer">
              <p className="font2 text-center">
                We keep iterating features to hit Product Market Fit. We
                continue pushing out one new release each month and have
                on-demand support for bugs and fixes. We partner with
                corporations to create a portfolio of diversified ventures in
                the most cost-efficient way. You bring deep industry knowledge
                and capital, and we provide the methods, processes, and talent
                to build future-proof businesses from the ground.
              </p>
            </div>
            <img src="/Pair-programming.svg" className="image" alt="" />
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

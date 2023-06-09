import React from "react";
import { helpItem } from "../../../data";
import AnimatedPage from "@/components/AnimatedPage.jsx";
import Layout from "@/components/Layout";
import Head from "next/head";

const HelpUs = ({ menu }) => {
  return (
    <>
      <Head>
        <title>Why Us?</title>
      </Head>
      <Layout>
        <div className="bg1 pt-40 w-screen max-w-full overflow-x-clip">
          <AnimatedPage>
            <div
              className="container mx-auto flex flex-col justify-center py-5 
    md:py-10 xl:py-20 pb-40"
            >
              <div>
                <div className="flex paddingb1">
                  <div className="px-6 2md:px-12 lg:px-12 xl:px-24 ">
                    <h2 className="h2 text-center font-semibold pb-4 text-white mb-2">
                      The most common pitfall in the death cycle are:
                    </h2>
                    <ul className="space-y-2 md:space-y-2 xl:space-y-12 md:mt-10">
                      {helpItem.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 xl:space-x-5"
                        >
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="h-[13.33px] md:h-[18px] xl:h-[30px] w-[13.33px] md:w-[18px] xl:w-[30px]"
                          />
                          <li className="text-white font2">{item.title}</li>
                        </div>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col items-center justify-around mt-5">
                    <img
                      src="/Light_Bulb.svg"
                      alt="light bulb"
                      className="h-[150px] md:h-[250px] xl:h-[383px] w-[150px] md:w-[220px] xl:w-[323px]"
                    />
                  </div>
                </div>
                <div className="my-10 p-10 bg-[#ffffff] bg-opacity-20 rounded-lg flex flex-col items-left justify-center xl:px-24">
                  <h2 className="h2 underline text-white font-semibold text-center uppercase  pb-20">
                    we help by
                  </h2>
                  <div className="flex flex-col space-y-10">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl">
                        Being your temp CTO and tech team
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        Establishing an exceptional engineering process
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        Building and maintaining your product
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className=" text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        Scoping and prototyping
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        Hiring and embedding talented people into your team
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        Product/Market Fit Pivot Pointing for early-stage
                        founders
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        Building and maintaining your product
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        Product/Market Fit Pivot Pointing for early-stage
                        founders
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        From web to mobile apps, we can build all the software
                        workflows you need to delight your customers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-10 p-10 bg-[#ffffff] bg-opacity-20 rounded-lg flex flex-col items-left justify-center xl:px-24">
                  <h2 className="h2 underline paddingt1 text-white font-semibold text-center uppercase  pb-20">
                    why prefer us?
                  </h2>
                  <div className="flex flex-col space-y-10">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl">
                        We are investor friendly
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        We don’t waste your money on consultancy slide decks
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        We partner with founders and their teams
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className=" text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        We create well-document,robust products
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        We build great technology products
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <img
                        src="/check-mark.svg"
                        alt=""
                        className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                      />
                      <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                        We assist in the transition to in-sourced teams
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-10 p-10 bg-[#ffffff] bg-opacity-20 rounded-lg flex flex-col items-left justify-center xl:px-24">
                <h2 className="h2 underline paddingt1 text-white font-semibold text-center uppercase  pb-20">
                  we ensure
                </h2>
                <div className="flex flex-col space-y-10">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/check-mark.svg"
                      alt=""
                      className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                    />
                    <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl">
                      Lightning fast iteration
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/check-mark.svg"
                      alt=""
                      className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                    />
                    <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                      Grow the company
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/check-mark.svg"
                      alt=""
                      className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                    />
                    <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                      Launch a fully functional product in weeks
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 ">
                    <img
                      src="/check-mark.svg"
                      alt=""
                      className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                    />
                    <p className=" text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                      Absurdly low cost
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 ">
                    <img
                      src="/check-mark.svg"
                      alt=""
                      className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                    />
                    <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                      Focus on strong soft skills
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 ">
                    <img
                      src="/check-mark.svg"
                      alt=""
                      className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                    />
                    <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                      Transparent pricing. Break the pre-series A cycle of death
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/check-mark.svg"
                      alt=""
                      className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[40px] mt-1"
                    />
                    <p className="text-xl text-white sm:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
                      Time for user feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedPage>
        </div>
      </Layout>
    </>
  );
};

export default HelpUs;

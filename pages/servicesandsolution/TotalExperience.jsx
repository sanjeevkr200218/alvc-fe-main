import React from "react";

import {
  totalExpCardItem,
  caseStudiesTotalExpItem,
  quoteTotalExpItem,
} from "../../data";
import { LargeCard } from "../../components";
import Layout from "@/components/Layout";
import AnimatedPage from "../../components/AnimatedPage.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Break from "@/components/Break";
import Head from "next/head";

const TotalExperience = () => {
  return (
    <>
      <Head>
        <title>Total Experience</title>
        <meta
          name="description"
          content="Total experience is a comprehensive customer experience
        management platform. It helps businesses improve customer
        satisfaction and loyalty by tracking and analyzing all
        touchpoints across the customer journey."
        />
      </Head>
      <Layout>
        <div className="bg1 px-5 paddingt1 paddingb1 w-screen max-w-full overflow-x-clip">
          <AnimatedPage>
            <div className="flex items-center flex-col justify-center text-white">
              <div className="flex flex-col justify-center items-center">
                <h1 className="h2 text-center font-bold">Total Experience</h1>
                <p className="font3 pt-8 max-w-6xl text-gray-400 text-center">
                  Total experience is a comprehensive customer experience
                  management platform. It helps businesses improve customer
                  satisfaction and loyalty by tracking and analyzing all
                  touchpoints across the customer journey.
                </p>
              </div>

              <div
                className="paddingt1 flex flex-col space-y-10 md:flex-row items-center justify-around 
              space-x-0 lg:space-x-20 xl:space-x-40 px-6 2md:px-12 lg:px-12"
              >
                <p className="font2 textcontainer">
                  With Total-experience, you can gather real-time customer
                  feedback, track customer behavior, and optimize the customer
                  experience. The platform includes advanced analytics and
                  reporting tools to help you identify trends and areas for
                  improvement. Total experience integrates with your existing
                  systems and can be customized to fit your unique business
                  needs
                </p>
                <img
                  src="/personal_opinions.svg"
                  className="image"
                  alt="personal opinions"
                />
              </div>
              <div
                className="paddingb1 flex space-y-10 paddingt1 flex-col md:flex-row items-center justify-around md:text-justify 
              space-x-0 lg:space-x-20 xl:space-x-40 px-6 lg:px-12 xl:px-20"
              >
                <img src="/feedback.svg" className="image" alt="feedback" />
                <p className="font2 textcontainer">
                  Total-experience is an all-in-one platform for managing
                  customer experience. With Total-experience, you can track and
                  analyze customer interactions across all channels, including
                  social media, email, and live chat. The platform provides a
                  holistic view of the customer journey, allowing you to
                  identify pain points and optimize the customer experience. It
                  also comes with a range of tools for personalizing
                  interactions, such as chatbots and targeted email campaigns
                </p>
              </div>
              <Break />

              <div className="paddingt1 paddingb1 flex flex-col items-center justify-around">
                <p className="font2 textcontainer pt-14 text-center">
                  The Total experience is a revolutionary new approach to
                  customer experience management that combines advanced
                  analytics, machine learning, and AI to provide a seamless,
                  personalized experience for every customer across all
                  touchpoints and channels. Some key applications of the
                  Total-experience include:
                </p>
                <div className="paddingt1 paddingb1 lg:hidden">
                  <Carousel
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    width={"75vw"}
                  >
                    {totalExpCardItem.map((card, index) => (
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
                      {totalExpCardItem
                        .map((card, index) => (
                          <div key={index} className="pb-20">
                            <LargeCard text={card.text} title={card.title} />
                          </div>
                        ))
                        .slice(0, 2)}
                    </div>
                    <div className="flex items-center justify-center space-x-5">
                      {totalExpCardItem
                        .map((card, index) => (
                          <div key={index} className="pb-20">
                            <LargeCard text={card.text} title={card.title} />
                          </div>
                        ))
                        .slice(2, 4)}
                    </div>
                  </Carousel>
                </div>
              </div>
              <Break />
              <div className="paddingt1 paddingb1 flex-col space-y-28 w-full  bg1">
                <h1 className="h2 font-bold capitalize text-center">
                  case studies
                </h1>

                <div className="flex justify-center items-center">
                  <div className="rounded-xl overflow-clip">
                    <Carousel
                      showStatus={false}
                      showThumbs={false}
                      autoPlay={true}
                      infiniteLoop={true}
                      width={"85vw"}
                    >
                      {caseStudiesTotalExpItem.map((item, index) => (
                        <div
                          key={index}
                          className="w-full flex items-center h-[400px] justify-center  text-white bg-white bg-opacity-20"
                        >
                          <div className="flex-col space-y-10 items-center">
                            <h1 className="font2 textcontainer capitalize px-10 font-semibold">
                              {item.source}
                            </h1>
                            <div className="">
                              <p className="font3 textcontainer px-10">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
              <div className="paddingb1">
                <Break />
              </div>
              <div
                className=" flex p-5 rounded-xl flex-col justify-around bg-white bg-opacity-20 text-white px-4 2md:px-6 xl:px-20 mt-14
            mb-8 h-[273px] xl:h-[551px] w-[327px] md:w-[600px] 2md:w-[800px] lg:w-[900px] xl:w-[1209px]"
              >
                {quoteTotalExpItem.map((quote, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img
                      src={quote.icon}
                      className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]"
                      alt=""
                    />
                    <div className="flex justify-between ">
                      <p className="font4">{quote.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font4 textcontainer text-gray-400 text-center">
                By using Total-experience, you can increase customer retention
                and drive revenue growth for your business
              </p>
            </div>
          </AnimatedPage>
        </div>
      </Layout>
    </>
  );
};

export default TotalExperience;

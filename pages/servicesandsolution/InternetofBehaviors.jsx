import React from "react";
import { caseStudiesItem, quoteItem } from "../../data";
import AnimatedPage from "../../components/AnimatedPage.jsx";
import Layout from "@/components/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Break from "@/components/Break";
import Head from "next/head";

const Internet = () => {
  return (
    <>
      <Head>
        <title>Internet of Behaviours</title>
        <meta
          name="description"
          content="The Internet of Behaviors is a revolutionary new technology that
        allows you to understand and predict the behavior of individuals
        and groups."
        />
      </Head>
      <Layout>
        <div className="bg1 px-5 paddingt1 paddingb1 w-screen max-w-full overflow-x-clip">
          <AnimatedPage>
            <div className="flex items-center flex-col justify-center text-white">
              <div className="flex flex-col justify-center items-center">
                <h1 className="h2 font-bold">Internet of Behaviours</h1>
                <p className="font3 max-w-6xl pt-8 text-gray-400 text-center">
                  The Internet of Behaviors is a revolutionary new technology
                  that allows you to understand and predict the behavior of
                  individuals and groups.
                </p>
              </div>

              <div
                className="paddingt1 flex flex-col space-y-10 md:flex-row items-center justify-around 
                space-x-0 lg:space-x-20 xl:space-x-40 "
              >
                <p className="font2 textcontainer">
                  With the Internet of Behaviors, you can gain valuable insights
                  into consumer behavior, employee productivity, and social
                  dynamics. Using advanced algorithms and machine learning
                  techniques, the Internet of Behaviors helps you make better
                  decisions and improve outcomes in various fields, including
                  marketing, HR, and social impact. It is easy to use and
                  integrates seamlessly with your existing systems, giving you a
                  powerful tool to drive growth and success.
                </p>
                <img
                  src="/detailed-analysis.svg"
                  className="image"
                  alt="Detailed Analysis"
                />
              </div>
              <div
                className="paddingb1 flex space-y-10 paddingt1 flex-col md:flex-row items-center justify-around md:text-justify 
                space-x-0 lg:space-x-20 xl:space-x-40 "
              >
                <img
                  src="/segment_analysis.svg"
                  className="image"
                  alt="segment analysis"
                />
                <p className="font2 textcontainer">
                  The Internet of Behaviors (IoB) is a revolutionary new
                  technology that allows companies to understand and predict
                  consumer behavior better. With the IoB, businesses can gather
                  real-time data on how consumers interact with their products
                  and services, giving them valuable insights into what works.
                  The IoB can also help companies personalize their marketing
                  efforts, targeting the right message to the right audience at
                  the right time.
                </p>
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
                      {caseStudiesItem.map((item, index) => (
                        <div
                          key={index}
                          className="w-full flex items-center h-[400px] justify-center text-white bg-white bg-opacity-20"
                        >
                          <div className="flex-col space-y-10 items-center">
                            <div className="">
                              <p className="font2 textcontainer px-10">
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
              <Break />
              <div
                className="paddingt1 flex flex-col space-y-10 md:flex-row items-center justify-around 
                space-x-0 lg:space-x-20 xl:space-x-40 "
              >
                <p className="font2 textcontainer">
                  By analyzing behavior patterns, the IoB can help businesses
                  identify trends and opportunities they may have otherwise
                  missed. The IoB is a powerful tool that can help businesses
                  improve their operations, increase efficiency, and boost their
                  bottom line. With the IoB, companies can gain a competitive
                  edge in today&apos;s fast-paced, data-driven market.
                </p>
                <img
                  src="/success_factors.svg"
                  className="image"
                  alt="Success Factor"
                />
              </div>
              <div className="paddingb1">
                <Break />
              </div>
              <div
                className="flex p-5 rounded-xl flex-col justify-around bg-white text-white bg-opacity-20  mt-14
              mb-8 h-[273px] xl:h-[551px] w-[327px] md:w-[600px] 2md:w-[800px] lg:w-[900px] xl:w-[1209px]"
              >
                {quoteItem.map((quote, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img
                      src={quote.icon}
                      className="h-[16px] md:h-[32px] xl:h-[51px] w-[16px] md:w-[32px] xl:w-[51px]"
                      alt=""
                    />
                    <div className="flex justify-between ">
                      <p className="font4">
                        {quote.text}
                        <span className="text-[#22d497]">
                          ({quote.author}).
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font4 textcontainer text-gray-400 text-center">
                Don&apos;t miss out on this cutting-edge technology – try the
                Internet of Behaviors today and see the difference it can make
                for your business or organization.
              </p>
            </div>
          </AnimatedPage>
        </div>
      </Layout>
    </>
  );
};

export default Internet;

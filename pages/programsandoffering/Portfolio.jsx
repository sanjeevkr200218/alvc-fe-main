import AnimatedPage from "@/components/AnimatedPage";
import Layout from "@/components/Layout";
import Progress from "@/components/Progress";
import React from "react";
import { portfolioCardItem, listItems } from "../../data";
import { CarouselList, LargeCard } from "../../components";
import Break from "@/components/Break";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Portfolio() {
  return (
    <>
      <Head>
        <title>Strategic portfolio diversidication</title>
        <meta
          name="description"
          content="Build your portfolio of ventures while sharing risks and rewards"
        />
      </Head>
      <Layout>
        <div className="bg1 text-white w-screen max-w-full overflow-x-clip">
          <AnimatedPage>
            <div className="px-5 flex pt-40 flex-col w-screen max-w-full items-center justify-center ">
              <h1 className="h2 font-bold pb-10 text-center">
                Build your portfolio of ventures while sharing risks and rewards
              </h1>
              <p className="font3 text-gray-400 max-w-6xl text-center">
                As serial entrepreneurs, collaborators, and facilitators, we
                bring everything you need to create successful businesses from
                scratch
              </p>
              <p className="font3 text-gray-400 max-w-6xl text-center">
                Our team understands how to deploy the venture studio model
                within enterprises in the leanest and most pragmatic way to
                drive strategic and financial impact.
              </p>
              <div className="pt-20">
                <Break />
              </div>
              <div
                className="paddingt1 flex flex-col space-y-10 md:flex-row items-center justify-around 
              space-x-0 lg:space-x-20 xl:space-x-40 px-6 2md:px-12 lg:px-12"
              >
                <p className="font2 textcontainer">
                  Either we are building your idea together, we team up to spin
                  out one of ours, or you are becoming a founder in one of our
                  studio collaborations with a corporation that enables you as a
                  founder to leverage the unfair advantages of our partner from
                  the pre-seed stage on
                </p>
                <img
                  src="/Business-support.svg"
                  className="image"
                  alt="business support"
                />
              </div>
              <h1 className="h3 paddingt1 pb-10 font-bold">
                What&apos;s the Process
              </h1>
              <Progress />
              <Break />
              <div className="flex flex-col justify-center items-center text-center space-y-8">
                <div className="pt-20">
                  <h1 className="h2 text-center font-bold text-white">
                    Who we are?
                  </h1>
                  <p className="pt-10 md:text-base lg:text-lg max-w-6xl">
                    We connect ideas, capital, resources, and talent to a
                    high-performing package partnering with founders to build
                    the best ideas into great companies. We will team up and
                    follow our proven, structured validation process testing
                    different ideas and models until we all see a fit. This is a
                    full-time activity, and you will benefit from world-class
                    technical expertise, functional experts, and entrepreneurs.
                  </p>
                </div>
                <div className="flex flex-col pt-20 lg:space-y-20">
                  <div className="flex items-center space-x-4 lg:space-x-10 xl:space-x-10">
                    <div className="flex justify-center relative items-center rounded">
                      <div className="flex items-center">
                        <img
                          src="/rectangle-left.svg"
                          className="w-[29.76px] xl:w-[62.22px] h-[10.78px] xl:h-[18.49px]"
                          alt=""
                        />
                        <img
                          src="/triangle-left.svg"
                          className="w-[21px] xl:w-[36px] h-[19.13px] xl:h-[40px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="h3 text-white">We are builders</div>
                  </div>
                  <div className="flex items-center space-x-4 lg:space-x-10 xl:space-x-10">
                    <div className="flex  justify-center items-center ">
                      <div className="flex items-center">
                        <img
                          src="/rectangle-left.svg"
                          className="w-[29.76px] xl:w-[62.22px] h-[10.78px] xl:h-[18.49px]"
                          alt=""
                        />
                        <img
                          src="/triangle-left.svg"
                          className="w-[21px] xl:w-[36px] h-[19.13px] xl:h-[40px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="h3 text-white">
                      Your co-founder with benefits
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 lg:space-x-10 xl:space-x-10">
                    <div className="flex justify-center items-center ">
                      <div className="flex items-center">
                        <img
                          src="/rectangle-left.svg"
                          className="w-[29.76px] xl:w-[62.22px] h-[10.78px] xl:h-[18.49px]"
                          alt=""
                        />
                        <img
                          src="/triangle-left.svg"
                          className="w-[21px] xl:w-[36px] h-[19.13px] xl:h-[40px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="h3 text-white max-w-sm text-left md:max-w-md">
                      Your sparring partner day and night. We have been in you
                      shoes.
                    </div>
                  </div>
                </div>
              </div>
              <div className="paddingt1 paddingb1 hidden lg:block">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  width={"75vw"}
                >
                  <div className="flex space-x-5 justify-center items-center">
                    {portfolioCardItem
                      .map((card, index) => (
                        <div key={index} className="pb-20">
                          <LargeCard text={card.text} title={card.title} />
                        </div>
                      ))
                      .slice(0, 2)}
                  </div>
                  {portfolioCardItem
                    .map((card, index) => (
                      <div key={index} className="pb-20">
                        <LargeCard text={card.text} title={card.title} />
                      </div>
                    ))
                    .slice(2)}
                </Carousel>
              </div>
              <div className="paddingt1 paddingb1 lg:hidden">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  width={"75vw"}
                >
                  {portfolioCardItem.map((card, index) => (
                    <div key={index} className="pb-20">
                      <LargeCard text={card.text} title={card.title} />
                    </div>
                  ))}
                </Carousel>
              </div>
              <Break />
              <div className="pt-20 paddingb1 paddingt1 flex justify-center space-y-14 items-center flex-col ">
                <h1 className="h2 font-bold text-center">Why choose us</h1>
                <CarouselList />
              </div>
              <Break />
              <div className="flex paddingt1 justify-between items-center flex-col 2md:px-12 paddingb1 paddingt1">
                <div className="flex justify-around items-center flex-col-reverse lg:flex-row">
                  <div className="lg:pr-28  lg:-mt-28 xl:mt-10">
                    <div className="flex">
                      <img
                        src="/dots.svg"
                        className="w-[51px] lg:w-[120px] xl:w-[148px] h-[51px] lg:h-[120px] xl:h-[148px]"
                        alt=""
                      />

                      <div className="lg:absolute xl:absolute mt-2 lg:mt-5 xl:mt-5 -ml-7 xl:ml-20">
                        <p className="h3 font-bold text-center">
                          Benefits of Choosing Us:
                        </p>
                      </div>
                    </div>
                    <div className="max-w-2xl">
                      <p className="font3 text-center">
                        You get total exposure to our methodology, playbooks,
                        experts, investors network, and resources to launch the
                        next market-leading company. This includes but is not
                        limited to the following:
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <img
                      src="/advantages-pana.svg"
                      className="h-[203px] lg:h-[320px] xl:h-[383px] w-[242px] lg:w-[350px] xl:w-[389px] "
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-6xl flex flex-col items-start justify-center space-y-10 paddingb1">
                {listItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-10 md:space-x-12 lg:space-x-14"
                  >
                    <div className="flex items-center">
                      <img
                        src="/rectangle-left.svg"
                        className="w-[29.76px] xl:w-[62.22px] h-[10.78px] xl:h-[18.49px]"
                        alt=""
                      />
                      <img
                        src="/triangle-left.svg"
                        className="w-[21px] xl:w-[36px] h-[19.13px] xl:h-[40px]"
                        alt=""
                      />
                    </div>
                    <p className="font2">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedPage>
        </div>
      </Layout>
    </>
  );
}

export default Portfolio;

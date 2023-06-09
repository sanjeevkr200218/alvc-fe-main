import {
  operationsItem,
  operationContent,
  caseStudiesOperationItem,
} from "../../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import AnimatedPage from "../../components/AnimatedPage.jsx";
import Layout from "@/components/Layout";

const AIEngineering = () => {
  return (
    <Layout>
      <div className="bg1 pt-40 w-screen max-w-full">
        <AnimatedPage>
          <div
            className="flex items-center flex-col justify-around md:space-y-8 lg:space-y-10 xl:space-y-6 
      lg:py-10 text-white"
          >
            <div className="px-6 lg:px-12">
              <h1
                className="h-[20px] md:h-[50px] xl:pb-14 text-center font-[700] text-[16px] md:text-[32px] lg:text-[40px] xl:text-[58px] 
              xl:leading-[72px] tracking-[-0.03em] mb-5 lg:mb-0 xl:mb-0"
              >
                Anywhere Operation
              </h1>
              <p
                className="text-[10px] md:text-[16px] xl:text-[24px] leading-[15px] md:leading-[20px] xl:leading-[30px] font-[400] 
              tracking-[-0.02em] text-[rgba(255,255,255,0.54)]
              w-[245px] md:w-full lg:w-[600px] xl:w-[752px] mb-8 text-center h-[45px] xl:h-[60px] xl:py-10"
              >
                Anywhere operations is a cloud-based software platform that
                allows businesses to manage their operations from anywhere,at
                any time. With Anywhere Operations,you can access real- time
                data on your business performance, track and manage your
                team&apos;s tasks and projects, and streamline your
                communication and collaboration efforts.
              </p>
            </div>

            <div
              className="flex flex-col md:flex-row items-center justify-around 
          space-x-0 lg:space-x-20 xl:space-x-40 px-6 2md:px-12 lg:px-12 py-10 xl:py-28 md:py-5"
            >
              <p
                className="font-[400] text-[10px] md:text-[16px]
              xl:text-[24px] text-left leading-[15px] md:leading-[20px] 
              xl:leading-[40px] h-[90px] md:h-[200px] xl:h-[280px] 
              w-full md:w-full lg:w-full xl:w-[599px] space-x-20 md:space-x-10 xl:space-x-40"
              >
                Our platform is designed to be user-friendly and intuitive, with
                a wide range of features and integrations to help you optimize
                your business operations. Some key benefits of using Anywhere
                Operations include increased productivity, improved efficiency,
                better decision-making, and reduced costs. Anywhere Operations
                is suitable for businesses of all sizes and industries, and our
                team of experts is available to help you get set up and get the
                most out of the platform.
              </p>
              <img
                src="/cloud_sync.svg"
                className="h-[159px] md:h-[180px] xl:h-[294px] w-full 
              md:w-full lg:w-full xl:w-[421px]
               mt-10 md:mt-0 xl:-mt-5
               "
                alt="Cloud Synchronous"
              />
            </div>
            <div
              className="flex flex-col md:flex-row items-center justify-around md:text-justify 
          space-x-0 lg:space-x-20 xl:space-x-40 pb-10 px-6 lg:px-12 xl:px-20"
            >
              <img
                src="/scrum_board.svg"
                className="h-[185px] md:h-[200px] xl:h-[384px] w-full 
              md:w-full lg:w-full xl:w-[453px] order-last md:order-first xl:order-first mt-10 md:mt-0 xl:mt-0"
                alt="Scrum board"
              />
              <p
                className="md:mt-5 font-[400]  text-[10px] md:text-[16px] xl:text-[24px] leading-[15px]  
              md:leading-[20px] lg:w-full xl:leading-[40px] h-[120px] md:h-[150px] xl:h-[360px] w-full 
              md:w-full xl:w-[599px]  2md:pr-6"
              >
                Through anywhere operations, you can improve productivity by
                streamlining communication and tasks with customizable
                workflows. You stay organized with the ability to track and
                manage projects, deadlines, and tasks. Anywhere Operations is
                secure, with data encryption and advanced security protocols to
                protect your business information. You can save time and money
                by reducing the need for physical office space and expensive
                hardware.
              </p>
            </div>
            <p
              className="font-[300] text-[11px] md:text-[16px] xl:text-[24px] leading-[15px] 
          md:leading-[20px] xl:leading-[40px] text-[#ffffff] text-center md:text-center 
          w-[301px] md:w-full xl:w-[1053px] h-[90px] md:h-[120px] xl:h-[160px] md:px-6 lg:px-12"
            >
              Get started quickly with an intuitive setup and user-friendly
              interface
            </p>

            {/* <div
                className="h-full md:h-full xl:h-full  text-black w-full xl:w-full bg-white py-0 xl:py-20
           px-6 2md:px-12 lg:px-12 md:px-6 pb-10 md:py-5"
              >
                <div className="flex justify-around flex-col  xl:flex-col ">
                  {engineeringItem.map((item, index) => (
                    <div key={index} className="">
                      <div className="flex justify-around items-center">
                        <div className={item.style}>
                          <img
                            src={item.icon}
                            className="h-[30px] xl:h-[68px] w-[30px] xl:w-[68px]"
                            alt={item.title}
                          />
                          <h1
                            className="text-[16px] md:text-[32px] lg:text-[48px] xl:text-[58px]  font-[700]
                 leading-[20px] md:leading-[40px] lg:leading-[48px] xl:leading-[72px] tracking-[-0.03em]
                  capitalize md:w-full"
                          >
                            {item.title}
                          </h1>
                        </div>
                        <div>
                          <h2
                            className="w-[158px] md:w-[360px] xl:w-[496px] h-[60px] md:h-[150px] 
                  xl:h-[240px] text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-left leading-[15px] 
                  md:leading-[20px] lg:leading-[28px] xl:leading-[40px] font-[400] "
                          >
                            {item.text}
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            <div className="py-5 px-10 flex flex-col items-center">
              <div className=" py-4 xl:py-10">
                <h1
                  className="h-[60px] md:h-[100px] xl:h-[180px] w-full md:w-full xl:w-[875px] font-[500] text-[12px] md:text-[16px] lg:text-[20px] xl:text-[32px] 
          leading-[15px] md:leading-[20px] lg:leading-[24px] xl:leading-[45px] "
                >
                  Anywhere Operations is a software solution that enables
                  companies to manage and optimize their operations across all
                  locations, whether in-house, remote or on the go. With
                  Anywhere Operations, companies can:
                </h1>
                <h1
                  className="h-full   font-[500] text-[12px] md:text-[18px] lg:text-[24px] xl:text-[32px] 
            leading-[15px] md:leading-[20px] lg:leading-[28px] xl:leading-[45px] text-center"
                >
                  More Features
                </h1>
              </div>
              <div className="max-w-6xl">
                {operationContent.map((item, index) => (
                  <div key={index} className="flex  py-3 px-6 items-center">
                    <div className="flex items-center -translate-y-6 pr-5 xl:pr-5">
                      <img
                        src={item.rectangleIcon}
                        className="w-[29.76px] xl:w-[62.22px] h-[10.78px] xl:h-[18.49px]"
                        alt=""
                      />
                      <img
                        src={item.triRightIcon}
                        className="w-[21px] xl:w-[36px] h-[19.13px] xl:h-[40px]"
                        alt=""
                      />
                    </div>
                    <p className={item.style}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-20 flex-col space-y-28 w-full bg1">
              <h1 className="font1 capitalize text-center">case studies</h1>
              <div className="flex justify-center items-center ">
                <Carousel autoPlay={true} infiniteLoop={true} width={"85vw"}>
                  {caseStudiesEngineeringItem.map((item, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center min-h-[300px] justify-center text-black bg-[#daf3ff] bg-opacity-80"
                    >
                      <div className="flex-col space-y-10 items-center">
                        <h1 className="font2 capitalize font-bold">
                          {item.source}
                        </h1>
                        <div className="">
                          <p className="font3 text-black">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </AnimatedPage>
      </div>
    </Layout>
  );
};

export default AIEngineering;

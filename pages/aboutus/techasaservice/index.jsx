import { Vision } from "@/components";
import AnimatedPage from "@/components/AnimatedPage";
import Layout from "@/components/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Head from "next/head";

function index() {
  return (
    <>
      <Head>
        <title>Tech as a Service</title>
      </Head>
      <Layout>
        <div className="bg1 paddingt1 text-white flex justify-center items-center flex-col paddingb1 w-screen max-w-full overflow-x-clip min-h-screen">
          <AnimatedPage>
            <div className="paddingb1 flex flex-col justify-center items-center">
              <h1 className="h2 font-bold pb-20 text-center">
                Tech as a Service
              </h1>
              <div className="md:hidden">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  width={"40vw"}
                >
                  <div className="flex justify-center items-center flex-col pb-20">
                    <div className="">
                      <p
                        className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                      >
                        In-House Development
                      </p>
                    </div>
                    <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center justify-between">
                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                        >
                          Visionary
                        </p>
                      </div>

                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                        >
                          Pragmatist
                        </p>
                      </div>

                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                        >
                          Makers
                        </p>
                      </div>
                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                        >
                          Tools
                        </p>
                      </div>

                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                        >
                          Connections
                        </p>
                      </div>

                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem]">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                        >
                          Boxes
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Second */}
                  <div className="flex justify-center items-center flex-col pb-20">
                    <div className="">
                      <p
                        className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                      >
                        Acquire Infrastructure
                      </p>
                    </div>
                    <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                        >
                          Visionary
                        </p>
                      </div>

                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                        >
                          Pragmatist
                        </p>
                      </div>

                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                        >
                          Makers
                        </p>
                      </div>
                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                        >
                          Tools
                        </p>
                      </div>

                      <div
                        className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                      >
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] font-semibold"
                        >
                          Infrastructure
                          <br /> as a Service
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Third */}
                  <div className="flex justify-center items-center flex-col pb-20">
                    <div className="">
                      <p
                        className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                      >
                        Acquire Platform
                      </p>
                    </div>
                    <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                        >
                          Visionary
                        </p>
                      </div>

                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                        >
                          Pragmatist
                        </p>
                      </div>

                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                        >
                          Makers
                        </p>
                      </div>

                      <div
                        className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                      >
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] font-semibold"
                        >
                          Platform
                          <br /> as a service
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Fourth */}
                  <div className="flex justify-center items-center flex-col pb-20">
                    <div className="">
                      <p
                        className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] text-[#cbcdd2] xl:leading-[28pxext-[#cbcdd2ext-center capitalize"
                      >
                        Acquire Software
                      </p>
                    </div>
                    <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                        >
                          Visionary
                        </p>
                      </div>

                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                        >
                          Pragmatist
                        </p>
                      </div>
                      <div
                        className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                      >
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                        text-[12px] lg:text-[16px] xl:text-[18px] font-semibold text-white"
                        >
                          Software
                          <br /> as a Service
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Fifth */}
                  <div className="flex justify-center items-center flex-col pb-20">
                    <div className="">
                      <p
                        className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                      >
                        Acquire technology
                      </p>
                    </div>
                    <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                        >
                          Visionary
                        </p>
                      </div>
                      <div
                        className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                      >
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] font-semibold text-white"
                        >
                          Technology
                          <br /> as a Service
                        </p>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
              {/* medium carouse; */}
              <div className="hidden md:block lg:hidden">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  width={"50vw"}
                >
                  <div className="flex justify-center items-center space-x-5">
                    <div className="flex justify-center items-center flex-col pb-20">
                      <div className="">
                        <p
                          className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                        >
                          In-House Development
                        </p>
                      </div>
                      <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center justify-between">
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                          >
                            Visionary
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Pragmatist
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Makers
                          </p>
                        </div>
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Tools
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Connections
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem]">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Boxes
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Second */}
                    <div className="flex justify-center items-center flex-col pb-20">
                      <div className="">
                        <p
                          className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                        >
                          Acquire Infrastructure
                        </p>
                      </div>
                      <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                          >
                            Visionary
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Pragmatist
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Makers
                          </p>
                        </div>
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Tools
                          </p>
                        </div>

                        <div
                          className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                        >
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] font-semibold"
                          >
                            Infrastructure
                            <br /> as a Service
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Third */}
                  <div className="flex justify-center items-center space-x-5">
                    <div className="flex justify-center items-center flex-col pb-20">
                      <div className="">
                        <p
                          className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                        >
                          Acquire Platform
                        </p>
                      </div>
                      <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                          >
                            Visionary
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Pragmatist
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Makers
                          </p>
                        </div>

                        <div
                          className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                        >
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] font-semibold"
                          >
                            Platform
                            <br /> as a service
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Fourth */}
                    <div className="flex justify-center items-center flex-col pb-20">
                      <div className="">
                        <p
                          className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] text-[#cbcdd2] xl:leading-[28pxext-[#cbcdd2ext-center capitalize"
                        >
                          Acquire Software
                        </p>
                      </div>
                      <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                          >
                            Visionary
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Pragmatist
                          </p>
                        </div>
                        <div
                          className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                        >
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                        text-[12px] lg:text-[16px] xl:text-[18px] font-semibold text-white"
                          >
                            Software
                            <br /> as a Service
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Fifth */}
                  <div className="flex justify-center items-center flex-col pb-20">
                    <div className="">
                      <p
                        className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                      >
                        Acquire technology
                      </p>
                    </div>
                    <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                      <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                        >
                          Visionary
                        </p>
                      </div>
                      <div
                        className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                      >
                        <p
                          className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] font-semibold text-white"
                        >
                          Technology
                          <br /> as a Service
                        </p>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
              {/* Large carousel */}
              <div className="hidden lg:block xl:hidden">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  width={"60vw"}
                >
                  <div className="flex justify-center items-center space-x-5">
                    <div className="flex justify-center items-center flex-col pb-20">
                      <div className="">
                        <p
                          className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                        >
                          In-House Development
                        </p>
                      </div>
                      <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col justify-between">
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                          >
                            Visionary
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Pragmatist
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Makers
                          </p>
                        </div>
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Tools
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Connections
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem]">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Boxes
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Second */}
                    <div className="flex justify-center items-center flex-col pb-20">
                      <div className="">
                        <p
                          className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                        >
                          Acquire Infrastructure
                        </p>
                      </div>
                      <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                          >
                            Visionary
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Pragmatist
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Makers
                          </p>
                        </div>
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Tools
                          </p>
                        </div>

                        <div
                          className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                        >
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] font-semibold"
                          >
                            Infrastructure
                            <br /> as a Service
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Third */}
                    <div className="flex justify-center items-center flex-col pb-20">
                      <div className="">
                        <p
                          className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                        >
                          Acquire Platform
                        </p>
                      </div>
                      <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                          >
                            Visionary
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Pragmatist
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Makers
                          </p>
                        </div>

                        <div
                          className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                        >
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] font-semibold"
                          >
                            Platform
                            <br /> as a service
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fourth */}
                  <div className="flex justify-center items-center space-x-5">
                    <div className="flex justify-center items-center flex-col pb-20">
                      <div className="">
                        <p
                          className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] text-[#cbcdd2] xl:leading-[28pxext-[#cbcdd2ext-center capitalize"
                        >
                          Acquire Software
                        </p>
                      </div>
                      <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                          >
                            Visionary
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Pragmatist
                          </p>
                        </div>
                        <div
                          className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                        >
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                        text-[12px] lg:text-[16px] xl:text-[18px] font-semibold text-white"
                          >
                            Software
                            <br /> as a Service
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fifth */}
                    <div className="flex justify-center items-center flex-col pb-20">
                      <div className="">
                        <p
                          className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                        >
                          Acquire technology
                        </p>
                      </div>
                      <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                          >
                            Visionary
                          </p>
                        </div>
                        <div
                          className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                        >
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] font-semibold text-white"
                          >
                            Technology
                            <br /> as a Service
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
              {/* xl carousel */}
              <div className="hidden xl:block">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  width={"100vw"}
                >
                  <div className="flex justify-center items-center space-x-5">
                    <div className="flex justify-center items-center flex-col pb-20">
                      <div className="">
                        <p
                          className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                        >
                          In-House Development
                        </p>
                      </div>
                      <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col justify-between">
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                          >
                            Visionary
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Pragmatist
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Makers
                          </p>
                        </div>
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Tools
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Connections
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem]">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Boxes
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Second */}
                    <div className="flex justify-center items-center flex-col pb-20">
                      <div className="">
                        <p
                          className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                        >
                          Acquire Infrastructure
                        </p>
                      </div>
                      <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                          >
                            Visionary
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Pragmatist
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Makers
                          </p>
                        </div>
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Tools
                          </p>
                        </div>

                        <div
                          className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                        >
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] font-semibold"
                          >
                            Infrastructure
                            <br /> as a Service
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Third */}
                    <div className="flex justify-center items-center flex-col pb-20">
                      <div className="">
                        <p
                          className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                        >
                          Acquire Platform
                        </p>
                      </div>
                      <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                          >
                            Visionary
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Pragmatist
                          </p>
                        </div>

                        <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                          >
                            Makers
                          </p>
                        </div>

                        <div
                          className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                        >
                          <p
                            className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] font-semibold"
                          >
                            Platform
                            <br /> as a service
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center space-x-5">
                      {/* Fourth */}
                      <div className="flex justify-center items-center flex-col pb-20">
                        <div className="">
                          <p
                            className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] text-[#cbcdd2] xl:leading-[28pxext-[#cbcdd2ext-center capitalize"
                          >
                            Acquire Software
                          </p>
                        </div>
                        <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                          <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                            <p
                              className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                            >
                              Visionary
                            </p>
                          </div>

                          <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                            <p
                              className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px]"
                            >
                              Pragmatist
                            </p>
                          </div>
                          <div
                            className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                          >
                            <p
                              className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                        text-[12px] lg:text-[16px] xl:text-[18px] font-semibold text-white"
                            >
                              Software
                              <br /> as a Service
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Fifth */}
                      <div className="flex justify-center items-center flex-col pb-20">
                        <div className="">
                          <p
                            className="text-[16px] md:text-[20px] 2md:text-[24px] xl:text-[24px] 
                w-full md:w-full 2md:w-[192px] xl:w-[192px] 2md:h-[100px] xl:h-[100px]   font-[800]  
                mb-4 leading-[21px] md:leading-[25px] 
                2md:leading-[28px] xl:leading-[28px] text-[#cbcdd2] text-center capitalize"
                          >
                            Acquire technology
                          </p>
                        </div>
                        <div className="h-[31.5rem] lg:h-[37.5rem] xl:h-[43.5rem] flex flex-col items-center">
                          <div className="bg-white bg-opacity-20 text-white rounded-lg flex justify-center items-center w-[6rem] h-[4rem] lg:h-[5rem] lg:w-[8rem] xl:w-[10rem] xl:h-[6rem] mb-6">
                            <p
                              className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] 
               "
                            >
                              Visionary
                            </p>
                          </div>
                          <div
                            className="flex rounded-lg  justify-center items-center bg-white bg-opacity-5 border-2 border-white text-white flex-grow w-[6rem]
lg:w-[8rem]
xl:w-[10rem]"
                          >
                            <p
                              className="leading-[16.39px] md:leading-[18px] 2md:leading-[21px] xl:leading-[21px] 
                text-[12px] lg:text-[16px] xl:text-[18px] font-semibold text-white"
                            >
                              Technology
                              <br /> as a Service
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
            <Vision />
          </AnimatedPage>
        </div>
      </Layout>
    </>
  );
}

export default index;

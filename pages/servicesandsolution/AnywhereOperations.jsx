import {
  operationsItem,
  operationContent,
  caseStudiesEngineeringItem,
} from "../../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import AnimatedPage from "../../components/AnimatedPage.jsx";
import Layout from "@/components/Layout";
import Break from "@/components/Break";
import Head from "next/head";

const AIEngineering = () => {
  return (
    <>
      <Head>
        <title>Anywhere Operation</title>
        <meta
          name="description"
          content="Anywhere operations is a cloud-based software platform that
                allows businesses to manage their operations from anywhere,at
                any time. With Anywhere Operations,you can access real- time
                data on your business performance, track and manage your
                team's tasks and projects, and streamline your
                communication and collaboration efforts."
        />
      </Head>
      <Layout>
        <div className="bg1 px-5 paddingt1 paddingb1 w-screen max-w-full overflow-x-clip">
          <AnimatedPage>
            <div className="flex items-center flex-col justify-center text-white">
              <div className="flex flex-col justify-center items-center">
                <h1 className="h2 text-center font-bold">Anywhere Operation</h1>
                <p className="font3 pt-8 max-w-6xl text-gray-400 text-center">
                  Anywhere operations is a cloud-based software platform that
                  allows businesses to manage their operations from anywhere,at
                  any time. With Anywhere Operations,you can access real- time
                  data on your business performance, track and manage your
                  team&apos;s tasks and projects, and streamline your
                  communication and collaboration efforts.
                </p>
              </div>

              <div
                className="paddingt1 flex flex-col space-y-10 md:flex-row items-center justify-around 
            space-x-0 lg:space-x-20 xl:space-x-40 px-6 2md:px-12 lg:px-12"
              >
                <p className="font2 textcontainer">
                  Our platform is designed to be user-friendly and intuitive,
                  with a wide range of features and integrations to help you
                  optimize your business operations. Some key benefits of using
                  Anywhere Operations include increased productivity, improved
                  efficiency, better decision-making, and reduced costs.
                  Anywhere Operations is suitable for businesses of all sizes
                  and industries, and our team of experts is available to help
                  you get set up and get the most out of the platform.
                </p>
                <img
                  src="/cloud_sync.svg"
                  className="image"
                  alt="cloud synchronous"
                />
              </div>
              <div
                className="paddingb1 flex space-y-10 paddingt1 flex-col md:flex-row items-center justify-around md:text-justify 
            space-x-0 lg:space-x-20 xl:space-x-40 px-6 lg:px-12 xl:px-20"
              >
                <img
                  src="/scrum_board.svg"
                  className="image"
                  alt="scrum board"
                />
                <p className="font2 textcontainer">
                  Through anywhere operations, you can improve productivity by
                  streamlining communication and tasks with customizable
                  workflows. You stay organized with the ability to track and
                  manage projects, deadlines, and tasks. Anywhere Operations is
                  secure, with data encryption and advanced security protocols
                  to protect your business information. You can save time and
                  money by reducing the need for physical office space and
                  expensive hardware.
                </p>
              </div>
              <p className="font3 paddingb1 text-gray-400 text-center">
                Get started quickly with an intuitive setup and user-friendly
                interface
              </p>
              <Break />
              <div className="paddingt1 paddingb1">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  width={"85vw"}
                >
                  {operationsItem.map((item, index) => (
                    <div
                      key={index}
                      className={`max-w-xl border-2 border-white rounded-xl mb-20 mx-auto text-center py-10 px-10 `}
                    >
                      <div className="flex items-center justify-center pb-5 md:pb-8 space-x-2 lg:pb-10">
                        <h1 className="h3 font-bold text-white capitalize">
                          {item.title}
                        </h1>
                        <div className="text-white">
                          <img
                            src={item.icon}
                            className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] lg:h-[40px] lg:w-[40px]"
                            alt={item.title}
                          />
                        </div>
                      </div>
                      <div>
                        <h2 className="h4 underline font-bold">{item.text}</h2>
                      </div>

                      {item.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-center text-center items-center mx-w-xl py-3 xl:py-5 "
                        >
                          <p className="font3 text-center">{item}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="flex flex-col items-center">
                <div className="">
                  <h1 className="font2 font-semibold max-w-6xl text-center">
                    Anywhere Operations is a software solution that enables
                    companies to manage and optimize their operations across all
                    locations, whether in-house, remote or on the go. With
                    Anywhere Operations, companies can:
                  </h1>
                </div>
              </div>

              <div className="paddingt1 paddingb1 w-screen max-w-full flex flex-col justify-center items-center space-y-8 lg:space-y-10">
                <div className="max-w-6xl flex flex-col items-start justify-center space-y-10">
                  {operationContent.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-10 md:space-x-12 lg:space-x-14"
                    >
                      <div className="flex items-center">
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
                      <p className="font2">{item.text}</p>
                    </div>
                  ))}
                </div>
                <p className="h4 font-semibold text-center text-gray-400 max-w-6xl paddingt1">
                  Give your business the power of flexibility and control with
                  Anywhere Operations – try it out today!
                </p>
              </div>
            </div>
            <Break />
            <div className="paddingt1 paddingb1 flex-col space-y-28 w-full  bg1">
              <h1 className="h2 font-bold text-white capitalize text-center">
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
                    {caseStudiesEngineeringItem.map((item, index) => (
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
          </AnimatedPage>
        </div>
      </Layout>
    </>
  );
};

export default AIEngineering;

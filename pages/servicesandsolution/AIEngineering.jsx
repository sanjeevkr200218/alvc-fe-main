import {
  engineeringContent,
  caseStudiesEngineeringItem,
  engineeringItem,
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
        <title>AI Engineering</title>
        <meta
          name="description"
          content="AI engineering is the design and development of artificial
                intelligence systems and solutions. It can be applied to a wide
                range of industries, including healthcare, finance, and
                transportation. It allows organizations to automate processes,
                improve decision-making, and increase efficiency."
        />
      </Head>
      <Layout>
        <div className="bg1 paddingt1 w-screen px-5 paddingb1 max-w-full overflow-x-clip">
          <AnimatedPage>
            <div className="flex items-center flex-col justify-center text-white">
              <div className="flex flex-col justify-center items-center">
                <h1 className="h2 text-center font-bold">AI Engineering</h1>
                <p className="font3 pt-8 max-w-6xl text-gray-400 text-center">
                  AI engineering is the design and development of artificial
                  intelligence systems and solutions. It can be applied to a
                  wide range of industries, including healthcare, finance, and
                  transportation. It allows organizations to automate processes,
                  improve decision-making, and increase efficiency.
                </p>
              </div>

              <div
                className="paddingt1 flex flex-col space-y-10 md:flex-row items-center justify-around 
        space-x-0 lg:space-x-20 xl:space-x-40 px-6 2md:px-12 lg:px-12"
              >
                <p className="font2 textcontainer">
                  AI engineering can help organizations gain a competitive edge
                  by leveraging the power of machine learning and data analysis.
                  It involves the use of programming languages such as Python,
                  as well as tools like TensorFlow and Keras. AI engineering
                  professionals are in high demand, with competitive salaries
                  and exciting career opportunities
                </p>
                <img
                  src="/Data-points-pana.svg"
                  className="image"
                  alt="data points pana"
                />
              </div>
              <div
                className="paddingb1 flex space-y-10 paddingt1 flex-col md:flex-row items-center justify-around md:text-justify 
        space-x-0 lg:space-x-20 xl:space-x-40 px-6 lg:px-12 xl:px-20"
              >
                <img src="/Programmer.svg" className="image" alt="Programmer" />
                <p className="font2 textcontainer">
                  AI engineering is the process of designing and building
                  artificial intelligence systems that can perform tasks that
                  typically require human-level intelligence. It involves a
                  combination of computer science, mathematics, and engineering
                  principles, as well as a deep understanding of how AI
                  algorithms work. With AI engineering, you can create
                  intelligent systems that can analyze data, make decisions, and
                  take actions in real-time.
                </p>
              </div>
              <p className="font3 paddingb1 text-gray-400 text-center">
                Investing in AI engineering can bring long-term benefits for
                organizations, including cost savings and improved customer
                satisfaction.
              </p>
              <Break />
              <div className="paddingt1 paddingb1">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  width={"85vw"}
                >
                  {engineeringItem.map((item, index) => (
                    <div
                      key={index}
                      className={`max-w-xl mx-auto border-2 border-white mb-20 rounded-xl text-center py-10 px-10`}
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
                        <h2 className="font3 text-center">{item.text}</h2>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className=" flex flex-col items-center">
                <div className="">
                  <h1 className="h2 font-bold max-w-6xl text-center">
                    More Features
                  </h1>
                </div>
              </div>

              <div className="pt-10 lg:pt-20 paddingb1 max-w-full flex flex-col justify-center items-center space-y-8 lg:space-y-10">
                <div className="max-w-6xl flex flex-col items-start justify-center space-y-10">
                  {engineeringContent.map((item, index) => (
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
                    autoPlay={true}
                    showThumbs={false}
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

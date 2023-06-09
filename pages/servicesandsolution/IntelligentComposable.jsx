import {
  intelligientItem,
  intelligentContent,
  caseStudiesIntelligentItem,
} from "../../data";
import AnimatedPage from "../../components/AnimatedPage.jsx";
import Layout from "@/components/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Break from "@/components/Break";
import Head from "next/head";

const Intelligent = () => {
  return (
    <>
      <Head>
        <title>Intelligent Composable Business</title>
        <meta
          name="description"
          content="Intelligent composable business is a revolutionary new way to
        manage and run your company. It uses advanced artificial
        intelligence to analyze and optimize all aspects of your
        business, from marketing and sales to operations and finance."
        />
      </Head>
      <Layout>
        <div className="bg1 px-5 paddingt1 paddingb1 w-screen max-w-full overflow-x-clip">
          <AnimatedPage>
            <div className="flex items-center flex-col justify-center text-white">
              <div className="flex flex-col justify-center items-center">
                <h1 className="h2 text-center font-bold">
                  Intelligent Composable Business
                </h1>
                <p className="font3 pt-8 max-w-6xl text-gray-400 text-center">
                  Intelligent composable business is a revolutionary new way to
                  manage and run your company. It uses advanced artificial
                  intelligence to analyze and optimize all aspects of your
                  business, from marketing and sales to operations and finance.
                </p>
              </div>

              <div
                className="paddingt1 flex flex-col space-y-10 md:flex-row items-center justify-around 
            space-x-0 lg:space-x-20 xl:space-x-40 px-6 2md:px-12 lg:px-12"
              >
                <p className="font2 textcontainer">
                  With intelligent composable business, you can quickly and
                  easily assemble the perfect team for any project, drawing on a
                  vast pool of talent from around the world. This innovative
                  approach allows you to focus on what you do best while the AI
                  handles all the tedious and time-consuming tasks. By using
                  intelligent composable business, you can increase efficiency,
                  reduce costs, and drive greater profits.
                </p>
                <img src="/community.svg" className="image" alt="community" />
              </div>
              <div
                className="paddingb1 flex space-y-10 paddingt1 flex-col md:flex-row items-center justify-around md:text-justify 
            space-x-0 lg:space-x-20 xl:space-x-40 px-6 lg:px-12 xl:px-20"
              >
                <img
                  src="/artificial_intelligence.svg"
                  className="image"
                  alt="artificial intelligence"
                />
                <p className="font2 textcontainer">
                  The Intelligent Composable Business is a new approach to
                  building and managing enterprises that leverages the latest
                  advances in artificial intelligence and automation. This
                  approach allows businesses to quickly and easily assemble and
                  disassemble various components, or &quot;microservices,&quot;
                  to create custom solutions that meet their specific needs.
                </p>
              </div>
              <p className="font3 paddingb1 text-gray-400 text-center">
                Don&apos;t waste more time and money on outdated business models
                - upgrade to intelligent composable business today and start
                seeing results immediately!
              </p>
              <Break />
              <div className="paddingt1 paddingb1">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  width={"85vw"}
                >
                  {intelligientItem.map((item, index) => (
                    <div
                      key={index}
                      className={`max-w-xl mx-auto border-2 border-white rounded-xl mb-20 text-center py-10 px-10`}
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
              <div className="flex flex-col items-center">
                <div className="">
                  <h1 className="font2 font-semibold max-w-6xl text-center">
                    Intelligent composable business is a revolutionary approach
                    to running a company. It combines the power of artificial
                    intelligence with a flexible and modular structure. This
                    allows businesses to adapt and evolve at a rapid pace,
                    staying ahead of the competition. With intelligent
                    composable business, you can:
                  </h1>
                </div>
              </div>

              <div className="paddingt1 paddingb1 w-screen max-w-full flex flex-col justify-center items-center space-y-8 lg:space-y-10">
                <div className="max-w-6xl flex flex-col items-start justify-start space-y-10">
                  {intelligentContent.map((item, index) => (
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
                  Don&apos;t get left behind in the digital age – upgrade to
                  intelligent composable business today!
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
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    width={"85vw"}
                    showStatus={false}
                  >
                    {caseStudiesIntelligentItem.map((item, index) => (
                      <div
                        key={index}
                        className="w-full flex items-center h-[400px] justify-center  text-white bg-white bg-opacity-20"
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

export default Intelligent;

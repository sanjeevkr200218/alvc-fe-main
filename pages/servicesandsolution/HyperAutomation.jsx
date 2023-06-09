import { HyperItem, hyperContent, caseStudiesHyperItem } from "../../data";
import AnimatedPage from "../../components/AnimatedPage.jsx";
import Layout from "@/components/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Break from "@/components/Break";
import Head from "next/head";

const HyperAutomation = () => {
  return (
    <>
      <Head>
        <title>Hyper Automation</title>
        <meta
          name="description"
          content="Hyper-Automation is the use of advanced technologies, including
          artificial intelligence (AI) and machine learning (ML), to
          automate processes and tasks. By automating routine tasks,
          hyper-automation can free up time and resources for more
          critical and strategic work."
        />
      </Head>
      <Layout>
        <div className="bg1 px-5 paddingt1 paddingb1 w-screen max-w-full overflow-x-clip">
          <AnimatedPage>
            <div className="flex items-center flex-col justify-center text-white">
              <div className="flex flex-col justify-center items-center">
                <h1 className="h2 text-center font-bold">Hyper Automation</h1>
                <p className="font3 pt-8 max-w-6xl text-gray-400 text-center">
                  Hyper-Automation is the use of advanced technologies,
                  including artificial intelligence (AI) and machine learning
                  (ML), to automate processes and tasks. By automating routine
                  tasks, hyper-automation can free up time and resources for
                  more critical and strategic work.
                </p>
              </div>

              <div
                className="paddingt1 flex flex-col space-y-10 md:flex-row items-center justify-around 
          space-x-0 lg:space-x-20 xl:space-x-40 px-6 2md:px-12 lg:px-12"
              >
                <p className="font2 textcontainer">
                  Hyper-automation can improve efficiency and accuracy, leading
                  to cost savings and increased productivity. With
                  hyper-automation, businesses can scale their operations more
                  efficiently and respond more quickly to changes in the market.
                  Hyper-automation can also help businesses to improve customer
                  experiences and increase customer satisfaction.
                </p>
                <img src="/Filter-bro.svg" className="image" alt="filter bro" />
              </div>
              <div
                className="paddingb1 flex space-y-10 paddingt1 flex-col md:flex-row items-center justify-around md:text-justify 
          space-x-0 lg:space-x-20 xl:space-x-40 px-6 lg:px-12 xl:px-20"
              >
                <img
                  src="/intelligence-amico.svg"
                  className="image"
                  alt="artificial intelligence"
                />
                <p className="font2 textcontainer">
                  Hyper-automation is a digital transformation strategy that
                  aims to automate as many business processes as possible. It
                  involves the use of advanced technologies such as artificial
                  intelligence, machine learning, and robotic process automation
                  to automate tasks and processes. By adopting hyper-automation,
                  businesses can reduce costs, improve efficiency, and increase
                  productivity.
                </p>
              </div>
              <p className="font3 paddingb1 text-gray-400 text-center">
                Implementing hyper-automation can be a complex process, but the
                benefits can be significant for businesses of all sizes and in a
                variety of industries.
              </p>
              <Break />
              <div className="paddingt1 paddingb1">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  width={"85vw"}
                >
                  {HyperItem.map((item, index) => (
                    <div
                      key={index}
                      className={`max-w-xl mx-auto text-center py-10 px-10 border-2 border-white mb-20 rounded-xl`}
                    >
                      <div className="flex items-center  justify-center pb-5 md:pb-8 space-x-2 lg:pb-10">
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
                    Hyper-automation is transforming the way businesses operate
                    and complete. By leveraging the full potential of automation
                    technologies, organizations can gain a significant
                    competitive advantage and drive growth.
                  </h1>
                </div>
              </div>

              <div className="paddingt1 paddingb1 w-screen max-w-full flex flex-col justify-center items-center space-y-8">
                <h1 className="h3 items-center font-bold">Examples</h1>
                <div className="max-w-6xl flex flex-col items-start justify-center space-y-10">
                  {hyperContent.map((item, index) => (
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
                  Are you ready to take your business to the next level with
                  hyper-automation? Our team of experts can help you design and
                  implement a hyper-automation strategy that fits your unique
                  needs and goals. Contact us today to learn more and schedule a
                  consultation.
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
                    {caseStudiesHyperItem.map((item, index) => (
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

export default HyperAutomation;

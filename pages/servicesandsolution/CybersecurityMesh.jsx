import {
  cybersecurityItem,
  cybersecurityContent,
  caseStudiesCybesecurityItem,
} from "../../data";
import AnimatedPage from "../../components/AnimatedPage.jsx";
import Layout from "@/components/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Break from "@/components/Break";
import Head from "next/head";

const Cybersecurity = () => {
  return (
    <>
      <Head>
        <title>Cybersecurity Mesh</title>
        <meta
          name="description"
          content="Cybersecurity mesh is a new and innovative approach to
        protecting your business from cyber threats. It works by
        creating a network of interconnected cybersecurity solutions
        that work together to provide comprehensive protection. With
        cybersecurity mesh, you can have peace of mind knowing that your
        critical assets are safeguarded against potential attacks."
        />
      </Head>
      <Layout>
        <div className="bg1 px-5 paddingt1 paddingb1 w-screen max-w-full overflow-x-clip">
          <AnimatedPage>
            <div className="flex items-center flex-col justify-center text-white">
              <div className="flex flex-col justify-center items-center">
                <h1 className="h2 text-center font-bold">Cybersecurity Mesh</h1>
                <p className="font3 pt-8 max-w-6xl text-gray-400 text-center">
                  Cybersecurity mesh is a new and innovative approach to
                  protecting your business from cyber threats. It works by
                  creating a network of interconnected cybersecurity solutions
                  that work together to provide comprehensive protection. With
                  cybersecurity mesh, you can have peace of mind knowing that
                  your critical assets are safeguarded against potential
                  attacks.
                </p>
              </div>

              <div
                className="paddingt1 flex flex-col space-y-10 md:flex-row items-center justify-around 
          space-x-0 lg:space-x-20 xl:space-x-40 px-6 2md:px-12 lg:px-12"
              >
                <p className="font2 textcontainer">
                  It can be implemented in various contexts, including in
                  business networks, government agencies, and critical
                  infrastructure systems. The mesh approach allows for real-time
                  monitoring and analysis of cyber activity, enabling quick and
                  effective responses to threats. Implementing a cybersecurity
                  mesh can help organizations meet regulatory and compliance
                  requirements and reduce the risk of data breaches and other
                  cyber attacks..
                </p>
                <img src="/security.svg" className="image" alt="security" />
              </div>
              <div
                className="paddingb1 flex space-y-10 paddingt1 flex-col md:flex-row items-center justify-around md:text-justify 
          space-x-0 lg:space-x-20 xl:space-x-40 px-6 lg:px-12 xl:px-20"
              >
                <img
                  src="/two_factor_authentication.svg"
                  className="image"
                  alt="two factor authentication"
                />
                <p className="font2 textcontainer">
                  One of the critical benefits of cybersecurity mesh is that it
                  can adapt and evolve as new threats emerge, ensuring that your
                  business is always protected. In addition, cybersecurity mesh
                  is designed to be easy to use and manage, allowing you to
                  focus on running your business without worrying about the
                  complexities of cybersecurity.
                </p>
              </div>
              <p className="font3 paddingb1 text-gray-400 text-center">
                Overall, cybersecurity mesh is a powerful and effective way to
                keep your business safe in today&apos;s increasingly connected
                and digitally-driven world.
              </p>
              <Break />
              <div className="paddingt1 paddingb1">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  width={"85vw"}
                >
                  {cybersecurityItem.map((item, index) => (
                    <div
                      key={index}
                      className={`max-w-xl border-2 border-white rounded-xl mb-20 mx-auto text-center py-10 px-10`}
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

              <div className="pt-10 lg:pt-20 paddingb1 w-screen max-w-full flex flex-col justify-center items-center space-y-8 lg:space-y-10">
                <div className="max-w-6xl flex flex-col items-start justify-center space-y-10">
                  {cybersecurityContent.map((item, index) => (
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
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    width={"85vw"}
                  >
                    {caseStudiesCybesecurityItem.map((item, index) => (
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

export default Cybersecurity;

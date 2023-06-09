import {
  privacyCardItem,
  privacyQuoteItem,
  privacyCaseStudiesItem,
} from "../../data";
import { LargeCard } from "../../components";
import AnimatedPage from "../../components/AnimatedPage.jsx";
import Layout from "@/components/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Break from "@/components/Break";
import Head from "next/head";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Enhancing Computation</title>
        <meta
          name="description"
          content="Privacy-enhancing computation (also known as secure multi-party
          computation) is a field of computer science that focuses on
          designing and implementing methods for multiple parties to
          jointly compute a function over their private inputs without
          revealing anything about the inputs to each other except for the
          output of the function."
        />
      </Head>
      <Layout>
        <div className="bg1 px-5 paddingt1 paddingb1 w-screen max-w-full overflow-x-clip">
          <AnimatedPage>
            <div className="flex items-center flex-col justify-center text-white">
              <div className="flex flex-col justify-center items-center">
                <h1 className="h2 text-center font-bold">
                  Privacy Enhancing Computation
                </h1>
                <p className="font3 pt-8 max-w-6xl text-gray-400 text-center">
                  Privacy-enhancing computation (also known as secure
                  multi-party computation) is a field of computer science that
                  focuses on designing and implementing methods for multiple
                  parties to jointly compute a function over their private
                  inputs without revealing anything about the inputs to each
                  other except for the output of the function.
                </p>
              </div>

              <div
                className="paddingt1 flex flex-col space-y-10 md:flex-row items-center justify-around 
            space-x-0 lg:space-x-20 xl:space-x-40 px-6 2md:px-12 lg:px-12"
              >
                <div className="">
                  <h1 className="h3 font-bold underline pb-3 md:pb-4 lg:pb-10">
                    Application
                  </h1>
                  <p className="font2 textcontainer">
                    Applications of privacy-enhancing computation include secure
                    online voting, secure auctions, and secure machine learning.
                    One example of an implementation of privacy-enhancing
                    computation is homomorphic encryption, which allows
                    computation to be performed directly on encrypted data
                    without the need to decrypt it first. Another example is
                    secure multiparty computation protocols such as SPDZ and
                    Fairplay, which allow multiple parties to compute functions
                    jointly over their private inputs without revealing them to
                    each other.
                  </p>
                </div>
                <img src="/securitya2rk.svg" className="image" alt="security" />
              </div>
              <div
                className="paddingb1 flex space-y-10 paddingt1 flex-col md:flex-row items-center justify-around md:text-justify 
            space-x-0 lg:space-x-20 xl:space-x-40 px-6 lg:px-12 xl:px-20"
              >
                <img src="/safe.svg" className="image" alt="safe" />
                <div className="">
                  <h1 className="h3 font-bold underline pb-3 md:pb-4 lg:pb-10">
                    Implementaion
                  </h1>
                  <p className="font2 textcontainer">
                    Privacy-enhancing computation (PEC) refers to a set of
                    technologies and techniques that enable individuals and
                    organizations to perform computations on sensitive data
                    without revealing the data itself to the computational
                    party. PEC has a wide range of implementations, including:
                  </p>
                </div>
              </div>
              <div className="paddingt1 paddingb1 lg:hidden">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  width={"75vw"}
                >
                  {privacyCardItem.map((card, index) => (
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
                    {privacyCardItem
                      .map((card, index) => (
                        <div key={index} className="pb-20">
                          <LargeCard text={card.text} title={card.title} />
                        </div>
                      ))
                      .slice(0, 2)}
                  </div>
                  <div className="flex items-center justify-center space-x-5">
                    {privacyCardItem
                      .map((card, index) => (
                        <div key={index} className="pb-20">
                          <LargeCard text={card.text} title={card.title} />
                        </div>
                      ))
                      .slice(2, 4)}
                  </div>
                  <div className="flex items-center justify-center space-x-5">
                    {privacyCardItem
                      .map((card, index) => (
                        <div key={index} className="pb-20">
                          <LargeCard text={card.text} title={card.title} />
                        </div>
                      ))
                      .slice(4, 6)}
                  </div>
                </Carousel>
              </div>
            </div>
            <Break />
            <div className="paddingt1 paddingb1 flex-col space-y-28 w-full bg1">
              <h1 className="h2 font-bold capitalize text-white text-center">
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
                    {privacyCaseStudiesItem.map((item, index) => (
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
            <div className="w-screen max-w-full flex items-center justify-center">
              <div
                className=" flex p-5 rounded-xl flex-col justify-around bg-white bg-opacity-20 text-white px-4 2md:px-6 xl:px-20 mt-14
            mb-8 h-[273px] xl:h-[551px] w-[327px] md:w-[600px] 2md:w-[800px] lg:w-[900px] xl:w-[1209px]"
              >
                {privacyQuoteItem.map((quote, index) => (
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
            </div>
          </AnimatedPage>
        </div>
      </Layout>
    </>
  );
};

export default Privacy;

import { AnimatedPage } from "@/components";
import Break from "@/components/Break";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

function index() {
  const listItems = [
    "Do we know?",
    "Compare to what?",
    "Comparing what with what?",
    "This is best, compare with what?",
    "That is small, compare with what?",
  ];
  const contentItems = [
    "Internet of Behaviors",
    "Total-experience",
    "Privacy-enhancing computation",
    "Distributed cloud",
    "Anywhere operations",
    "Cybersecurity mesh",
    "Intelligent composable business",
    "AI engineering",
    "Hyper Automation",
  ];
  return (
    <>
      <Head>
        <title>Our Approach</title>
      </Head>
      <Layout>
        <div className="bg1 w-screen max-w-full flex items-center justify-center paddingt1 paddingb1 overflow-x-clip text-white">
          <AnimatedPage>
            <div>
              <h1 className="h2 font-bold pb-20 text-center">Our Approach</h1>
              <div
                className="paddingb1 flex flex-col space-y-10 md:flex-row items-center justify-around 
        space-x-0 lg:space-x-20 xl:space-x-40 px-6 2md:px-12 lg:px-12"
              >
                <ul className="list-disc flex-col flex space-y-2 sm:space-y-3 md:space-y-6 lg:space-y-8">
                  {listItems.map((item, index) => (
                    <li key={index} className="font2">
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="font2 max-w-[25rem] lg:max-w-xl xl:max-w-3xl;">
                    To understand the difference, the similarity, the unique
                    selling proposition, and the real value addition, we must be
                    aware of trivial repetitive tasks versus critical thinking,
                    problem-solving, and strategic planning.
                  </p>
                </div>
              </div>
              <Break />
              <div className="paddingt1 flex flex-col justify-center items-center">
                <p className="font2 pb-20 max-w-md md:max-w-lg xl:max-w-6xl text-center">
                  I am not here to be a free coder, programmer, software
                  engineer, or mobile/web app developer, despite having more
                  than a decade of experience. I am here to make meaning of
                  information, communication, and mobile technologies for
                  impactful and sustainable development, education, economics,
                  and empowerment. Pure profitable business ventures are the
                  best state of educational and economic empowerment.
                </p>
                <p className="font2 max-w-md md:max-w-lg xl:max-w-6xl text-center">
                  I can be creative and innovative in challenging projects. In
                  the long run, I will vest my sweat to architect solutions,
                  systems, and ecosystems. I influence the use of Digital
                  Transformation to get 10x, 100x, and 1000x for providing
                  unparalleled opportunities for value with trust, transparency,
                  ethics, fairness, interpretability, and regulatory compliance.
                  I am interested in levering of:
                </p>
                <div className="pt-10 flex flex-col justify-center items-left space-y-4">
                  {contentItems.map((item, index) => (
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
                      <p className="font2">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="paddingt1 font2 max-w-md md:max-w-lg xl:max-w-6xl text-center">
                  Let&apos;s keep in touch if you think we may have some
                  synergy, potential collaboration opportunities or even if you
                  want to network and share experiences to learn and grow.
                  <br />I am always looking forward and upward.
                </p>
              </div>
            </div>
          </AnimatedPage>
        </div>
      </Layout>
    </>
  );
}

export default index;

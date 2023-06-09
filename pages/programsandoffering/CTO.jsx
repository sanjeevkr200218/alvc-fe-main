import { Card } from "../../components";
import { CTOItems } from "../../data";
import AnimatedPage from "../../components/AnimatedPage.jsx";
import Layout from "@/components/Layout";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CTO = () => {
  return (
    <>
      <Head>
        <title>CTO Offerings</title>
        <meta
          name="description"
          content="Interim CTOs are experienced technology executives who can step
          in temporarily to provide leadership and guidance to a
          company's technology team"
        />
      </Head>
      <Layout>
        <div className="bg1 w-screen flex flex-col justify-center items-center max-w-full overflow-x-clip">
          <AnimatedPage>
            <div className="flex paddingt1 paddingb1 items-center flex-col justify-center md:space-y-8 lg:space-y-10 xl:space-y-6  text-white">
              <div className="">
                <h1 className="h2 text-center font-bold">CTO Offerings</h1>
                <p className="p-10 max-w-6xl text-center font2 text-gray-400">
                  Interim CTOs are experienced technology executives who can
                  step in temporarily to provide leadership and guidance to a
                  company&apos;s technology team
                </p>
              </div>
              <div className="paddingt1 paddingb1">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  width={"75vw"}
                >
                  {CTOItems.map((card, index) => (
                    <div
                      key={index}
                      className="pb-20 flex justify-center items-center"
                    >
                      <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        text={card.text}
                        cName={card.cName}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <p className="font4 pt-20 max-w-6xl text-gray-400 text-center">
                Overall, these types of CTOs and tech leadership can provide
                valuable expertise and support to companies needing more
                resources or a full-time CTO or tech team. They can help with
                the development and implementation of technology strategies, the
                management of projects, and the oversight of technology
                operations.
              </p>
            </div>
          </AnimatedPage>
        </div>
      </Layout>
    </>
  );
};

export default CTO;

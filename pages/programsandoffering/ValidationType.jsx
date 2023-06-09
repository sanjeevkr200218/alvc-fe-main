import { validationItems } from "../../data";
import { Rectangle } from "../../components";
import AnimatedPage from "../../components/AnimatedPage.jsx";
import Layout from "@/components/Layout";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ValidationType = () => {
  return (
    <>
      <Head>
        <title>Validation Types</title>
      </Head>
      <Layout>
        <div className="bg1 paddingt1 paddingb1 w-screen max-w-full overflow-x-clip">
          <AnimatedPage>
            <div className="py-5 h-full px-8 2md:px-12 xl:py-10">
              <div className="flex justify-center items-center flex-col">
                <h1 className="h2 pb-20 font-bold text-center text-white">
                  Validation Types
                </h1>
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  width={"75vw"}
                >
                  {validationItems.map((card, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center mb-20 px-10"
                    >
                      <Rectangle
                        title={card.title}
                        text={card.text}
                        titleStyle="text-center font-semibold h3"
                        textStyle="text-center pt-2 md:pt-4 lg:pt-10 font3"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </AnimatedPage>
        </div>
      </Layout>
    </>
  );
};

export default ValidationType;

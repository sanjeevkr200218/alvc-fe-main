import React from "react";
import {
  Feature,
  Hero,
  Studio,
  Work,
  Service,
  Vision,
  Book,
  AnimatedPage,
} from "../components";

import Layout from "@/components/Layout";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>AgileLean</title>
        <meta
          name="description"
          content="We are a startup studio providing: Minimum Viable Product (MVP), Proof of Concept(POC), Case Studies, Prototype, Pilot Project, Feasibility Studies. We are your product engine, from Strategic Insights To Tactical
          Execution"
        />
      </Head>
      <Layout>
        <div className="bg1 pt-28 px-5 overflow-x-clip w-screen max-w-full">
          <div className="text-white mx-auto">
            <AnimatedPage>
              <div>
                <Hero />
                <Studio />
                <Feature />
                <Work />
                <Book />
              </div>
            </AnimatedPage>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;

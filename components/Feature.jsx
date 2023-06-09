import { featureItems } from "../data";
import List from "./List";

const Feature = () => {
  return (
    <div className="paddingt1 paddingb1 relative flex flex-col justify-center items-center bg1 w-screen max-w-full">
      <div className="absolute left-0 xl:-mb-10 hidden lg:block xl:block w-[534px] h-[448px] xl:mt-20">
        <img src="/left-circle.svg" alt="left line Circle" />
      </div>
      <div className="pb-10 lg:pb-20">
        <h1 className="h2 font-extrabold">Fractional Product Team</h1>
      </div>
      <p className="px-10 max-w-6xl text-center font2 text-gray-400 pb-20">
        We keep iterating features to hit Product Market Fit. We continue
        pushing out one new release each month and have on-demand support for
        bugs and fixes. We partner with corporations to create a portfolio of
        diversified ventures in the most cost-efficient way. You bring deep
        industry knowledge and capital, and we provide the methods, processes,
        and talent to build future-proof businesses from the ground.
      </p>
      <div className="px-8 lg:translate-x-36 lg:px-0">
        <List items={featureItems} />
      </div>
    </div>
  );
};

export default Feature;

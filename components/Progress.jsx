function Progress() {
  return (
    <div className="w-screen max-w-full relative pb-20">
      <div className="container mx-auto flex-col flex lg:flex-row items-center lg:space-y-0 space-y-10  justify-between">
        <div className="w-64  xl:w-80 xl:h-80 bg-white bg-opacity-20  relative h-64 border-2 rounded-full border-white flex justify-center items-center">
          <div className=" absolute text-center p-5 flex-col items-center justify-center">
            <h1 className="h3 underline pb-2 text-white items-center font-bold">
              Ideation
            </h1>
            <h2 className="font3 text-white max-w-md text-center">
              Founders bring their
              <br /> idea or get provided with a <br />
              robust business concept from our internal idea backlog
            </h2>
          </div>
        </div>
        <div className="w-64 xl:w-80 xl:h-80 bg-white bg-opacity-20  relative h-64 border-2 rounded-full border-white flex justify-center items-center">
          <div className=" absolute text-center p-5 flex-col items-center justify-center">
            <h1 className="h3 underline pb-2 text-white items-center font-bold">
              Validation
            </h1>
            <h2 className="font3 text-white max-w-md text-center">
              Measuring and validating the founder and the product-market fit,
              including desirability, feasibility, and viability.
            </h2>
          </div>
        </div>
        <div className="w-64 xl:w-80 xl:h-80 bg-white bg-opacity-20  relative h-64 border-2 rounded-full border-white flex justify-center items-center">
          <div className=" absolute text-center p-5 flex-col items-center justify-center">
            <h1 className="h3 underline pb-2 text-white items-center font-bold">
              Spin out <br />
              and creation
            </h1>
            <h2 className="font3 text-white max-w-md text-center">
              The founder team gets their independent New Co after successful
              validation, scope and build a market-ready & thoroughly tested MVP
            </h2>
          </div>
        </div>
        <div className="w-64 xl:w-80 xl:h-80 bg-white bg-opacity-20  relative h-64 border-2 rounded-full border-white flex justify-center items-center">
          <div className=" absolute text-center p-5 flex-col items-center justify-center">
            <h1 className="h3 underline pb-2 text-white items-center font-bold">
              Scale-Up
            </h1>
            <h2 className="font3 text-white max-w-md text-center">
              Our team is driving the growth and setting-up operations,
              marketing & sales, while founders can keep the focus on business
              building
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;

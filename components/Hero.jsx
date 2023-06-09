const Hero = () => {
  return (
    <div className="relative w-screen paddingb1 max-w-full bg1 ">
      <div className="flex justify-center mx-auto px-8 md:px-0 h-full">
        <div className="flex flex-col space-y-20 lg:flex-row lg:flex items-center lg:space-x-36 justify-center">
          <div className=" max-w-5xl">
            <div>
              <h1 className="h2 pb-20 font-extrabold font-roboto text-center">
                Being up-to-date is common;
                <br /> The competitive advantage is being up to-morrow.
              </h1>
            </div>
            <div>
              <p className="h3 text-bold text-center">
                We are your product engine, from Strategy To Execution
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-xs lg:translate-y-16">
            <img
              src="/game.svg"
              className="object-contain xl:max-w-[22rem]"
              alt="3d cubes"
            />
            <img
              src="/blur.png"
              className="object-contain xl:max-w-[22rem]"
              alt="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

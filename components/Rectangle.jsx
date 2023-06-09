const Rectangle = (props) => {
  return (
    <div className={props.style}>
      <div
        className="flex flex-col items-center justify-center h-[350px] xl:h-[371px] w-full  xl:w-[612px]  rounded-[24px]
              px-6 xl:px-[46px] py-10 xl:py-[35px] bg-white bg-opacity-20 text-white"
      >
        <h1 className="font-[600] text-[12px] sm:text-[22px]  md:text-[24px] lg:text-[28px] xl:text-[32px] md:text-center leading-[23px] md:leading-[28px] lg:leading-[32px] xl:leading-[38px]  xl:pb-4">
          {props.title}
        </h1>
        <p className="font-[400] text-[10px] sm:text-[18px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[19px] md:leading-[24px] xl:leading-[34px]">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Rectangle;

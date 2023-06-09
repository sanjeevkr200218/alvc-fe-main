const largeCard = (props) => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center">
      <div
        className="flex w-[270px] h-[270px] md:w-[270px] md:h-[270px] lg:w-[300px]  lg:h-[300px] justify-center items-center 
                  border-2 box-border border-b-8 rounded-xl text-center border-b-white flex-col"
      >
        <p className="h4 p-4">{props.text}</p>
      </div>

      <p className="text-center uppercase font-extrabold">{props.title}</p>
    </div>
  );
};

export default largeCard;

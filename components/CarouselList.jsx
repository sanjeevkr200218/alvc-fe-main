import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { carouselItem } from "../data";

const CarouselList = () => {
  return (
    <div className="overflow-clip rounded-xl">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        width={"85vw"}
        showStatus={false}
      >
        {carouselItem.map((item, index) => (
          <div
            key={index}
            className="w-full flex-col items-center min-h-[300px] justify-center text-white bg-white bg-opacity-20"
          >
            <div className="pb-10">
              <img
                src={item.imageUrl}
                className="w-[91.5px] z-10 lg:w-[244px] h-[77.62px] lg:h-[100px]"
                alt=""
              />
            </div>
            <div className=" flex justify-center flex-grow space-y-10 items-center">
              <p className="font3 textcontainer z-20 px-5">{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselList;

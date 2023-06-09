import { useRef, useEffect } from "react";
import Link from "next/link";

const LinkItem = ({ isFooter, selectedMenu, setSelectedMenu, item }) => {
  const divRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current.contains(event.target)) {
        // Click event occurred outside the div
      } else {
        setSelectedMenu("");
      }
      // setSelectedMenu("");
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setSelectedMenu]);

  const onClickHandler = () => {
    setSelectedMenu(item.name);
  };

  return (
    <div>
      <div
        ref={divRef}
        onClick={onClickHandler}
        className="relative cursor-pointer flex items-center space-x-1"
      >
        <h1
          className={`text-white whitespace-nowrap  hover:text-gray-300 ${
            selectedMenu === item.name ? "text-gray-300" : ""
          } ${
            isFooter === true
              ? "text-[12px] md:text-[14px] xl:text-[16px] leading-[15px] md:leading-[20px] xl:leading-[25px] font-[400] space-y-3}"
              : "text-sm xl:text-base"
          }`}
        >
          {item.name}
        </h1>
        <div
          className={`text-white  ${
            isFooter === true
              ? `-rotate-90 ${
                  selectedMenu === item.name
                    ? "translate-x-2 text-gray-300"
                    : ""
                }`
              : `${
                  selectedMenu === item.name ? "rotate-180 text-gray-300" : ""
                }`
          } transition duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div
          className={`${
            selectedMenu === item.name ? "inline-flex" : "hidden"
          } z-50 border-[1px] border-gray-400 shadow-xl absolute ${
            isFooter === true
              ? "right-0 translate-x-[100%] -translate-y-10"
              : "top-[60px]"
          }  bg-opacity-90 rounded-xl min-w-28 bg-white`}
        >
          <div className="flex-col space-y-2">
            {item.items.map((i, index) => (
              <Link
                href={`${item.path}/${i.id}`}
                key={i.id}
                className={`flex items-center space-x-2 px-5 ${
                  isFooter === true ? "px-1" : "px-5"
                } p-2 group ${
                  index === item.items.length - 1
                    ? ""
                    : "border-b-[1px] border-gray-400"
                } ${
                  isFooter === true
                    ? "text-[12px] md:text-[14px] xl:text-[16px] leading-[15px] md:leading-[20px] xl:leading-[25px] font-[400] space-y-3}"
                    : ""
                }`}
              >
                <h1 className="whitespace-nowrap">{i.name}</h1>
                <div className="group-hover:translate-x-3 transition duration-150">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkItem;

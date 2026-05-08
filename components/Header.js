import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="py-2 shadow-[0_0px_8px_rgba(0,0,0,0.25)]">
      <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between xl:px-0 px-[20px]">
        <div className="">
          <img className="w-[150px]" src={LOGO_URL}></img>
        </div>
        {console.log("re-rendering Header Component")}
        <nav
          className={`duration-300 md:w-auto w-[80%] md:h-auto h-screen md:p-0 p-3 md:bg-transparent bg-[#4d879d] md:static fixed top-0 ${isOpen ? "left-0" : "left-[-100%]"} z-9`}
        >
          <ul className="flex md:flex-row flex-col gap-7 justify-between">
            <li>
              <a href="" className=" text-[17px] font-jost">
                Home
              </a>
            </li>
            <li>
              <a href="" className=" text-[17px] font-jost">
                About
              </a>
            </li>
            <li>
              <a href="" className=" text-[17px] font-jost">
                Cart
              </a>
            </li>
            <li>
              <a href="" className=" text-[17px] font-jost">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden block text-2xl cursor-pointer z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i> // close icon
          ) : (
            <i className="fa-solid fa-bars"></i> // menu icon
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

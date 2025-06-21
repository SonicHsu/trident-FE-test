import { useState, useRef, useEffect } from "react";
import menuIcon from "../assets/menu-icon-hamburger.svg";
import cancelIcon from "../assets/menu-icon-cancel.svg";
import NavButton from "./NavButton";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");
  const navRef = useRef(null);

  const navButtonOption = [
    "白頭翁的特性",
    "白頭翁的故事",
    "白頭翁的美照",
    "白頭翁的危機",
  ];

  const handleMenuOpenButton = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className="bg-white relative lg:w-[365px]">
      <div className="h-[72px] flex justify-between items-center space-x-6 lg:space-x-0 p-6 lg:p-0 lg:mt-12">
        <button
          className="flex lg:hidden w-[40px] h-[40px] cursor-pointer"
          onClick={handleMenuOpenButton}
        >
          {isMenuOpen ? <img src={cancelIcon} alt="menu" className=" bg-white" /> : <img src={menuIcon} alt="menu" className=" bg-white" />}
          
        </button>
        <div className="flex-grow flex justify-center items-center h-[40px] lg:h-[80px] bg-white ">
          <h1 className="font-bold text-lg lg:text-3xl  text-center">
            白頭翁不吃小米
          </h1>
        </div>

        <button className="lg:absolute flex w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] lg:right-0 lg:translate-x-1/2 lg:z-50">
          <div className="w-full h-full bg-white rounded-full [filter:drop-shadow(0_0_6px_rgba(0,0,0,0.25))] flex items-center justify-center">
            <div className="">
                <div className="relative w-[43px] h-[40px] scale-50 lg:scale-100 ">
                 <div className="absolute inset-0 bg-[#535353]  rounded-[80%_40%_60%_0%] z-10"></div>
                 <div className="absolute inset-0 top-2 bottom-2 bg-white rounded-[70%_30%_50%_0%] z-20"></div>
                 <div className="absolute top-4 right-2 w-2 h-2 bg-[#535353] rounded-full z-30"></div>
                 <div className="absolute top-3.5  right-0 w-3 h-[7px] translate-x-[87.5%] bg-[#535353] rounded-[0%_100%_0%_0%] z-30 rotate-[-10deg] origin-left"></div>
            </div>
            </div>
          </div>
        </button>
      </div>

      <div className="mt-12 hidden lg:flex">
        <ul className="w-full space-y-1">
          {navButtonOption.map((label) => (
            <NavButton
              key={label}
              label={label}
              setSelectedLabel={setSelectedLabel}
              selected={selectedLabel === label}
            />
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <div className="z-50 absolute h-[217px] top-full left-0 w-full bg-white  flex items-center [filter:drop-shadow(0_0_20px_rgba(0,0,0,0.08))]">
          <ul className="w-full space-y-1">
            {navButtonOption.map((label) => (
              <NavButton
                key={label}
                label={label}
                setSelectedLabel={setSelectedLabel}
                selected={selectedLabel === label}
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

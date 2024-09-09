import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { BsSuitcaseLg } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { GiOpenedFoodCan } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa"; 
import { FaShoppingCart } from "react-icons/fa";
// import logo from "../assets/logo.png"

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links=[
    {
      icon:<BsSuitcaseLg size={20} className="mt-[3px]"/>,
      name:"Swiggy Corporate",
    },
    {
      icon:<FiSearch size={20} className="mt-[2px]"/>,
      name:"Search",
    },
    {
      icon:<BiSolidOffer size={22} className="mt-[2px]"/>,
      name:"Offers",
      sup:"NEW",
    },
    {
      icon:<GiOpenedFoodCan size={20} className="mt-[2px]"/>,
      name:"Help",
    },
    {
      icon:<FaRegUser size={18} className="mt-[2px]"/>,
      name:"Sign In",
    },
    {
      icon:<FaShoppingCart size={20} className="mt-[2px]"/>,
      name:"Cart",
      sup:"(0)",
    },
    
  ]


  return (
    <>
      {/* toggle with other botton */}
      <div
        className="black-overlay w-full h-full fixed duration-500 z-50 "
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[570px] bg-white h-full absolute duration-[400ms] z-50 "
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>

      {/* Header part */}
      <header className="sticky top-0 bg-white z-10 p-3 shadow-md ">
        <div className="max-w-[1200px] mx-auto  flex items-center justify-between ">
          
          <div className="flex items-center gap-7">
          <div className="w-[60px]">
            <img src="./Images/logo.png" alt="logo" width={"100%"} />
          </div>

            <h1 className="font-bold text-[13px]  underline underline-offset-8 decoration-[1.5px] text-[#424549] hover:text-[#FF661E] ">
              Other{""}
              <RxCaretDown
                onClick={showSideMenu}
                size={25} 
                className="inline text-2xl font-[700] text-[#FF661E] cursor-pointer"
              />
            </h1>
          </div>

          <nav className="">
            <ul className="hidden md:flex gap-8 items-center text-[16px] font-semibold text-[#424549] ">
              {
                links.map(
                  (links, index)=>{
                    return (
                    <li key={index} className="flex items-center  gap-2 cursor-pointer hover:text-[#FF661E]" >
                      {/* <BsSuitcaseLg size={20} className="mt-1"/> */}
                      {links.icon}
                      {links.name}
                      <sup className="text-[9px] font-[700] text-yellow-500">{links.sup}</sup>
                      </li>
                      )
                  }
                )
              }
              
              
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router";
import Menu from "../../utils/Menu";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";


const Navigation = () => {

  let [isToggle,setIsToggle] = useState(false);

  let handleToggle = () => {
    setIsToggle(!isToggle);
  }

  return (
    <div className="border-b border-b-black/10 px-5 lg:px-0 ">
      <div className="grid grid-cols-5 container py-3 lg:py-2 relative ">
        <div className="lg:col-span-1 col-span-2">
          <Link to="/">
            <img className="invert lg:w-2/3 w-[80%] " src="/images/logo.webp" alt="" />
          </Link>
        </div>
        <div className="hidden col-span-2 lg:flex items-center justify-center">
          <Menu />
        </div>
        <div className="hidden col-span-2 gap-[24px]  lg:flex items-center justify-end">

          <form action="" className="flex items-center relative text-black/50">
            <input className="bg-[#F5F5F5] focus:outline-none rounded py-[10px] ps-[20px] pe-10 inline-block" type="text" placeholder="What are you looking for?" />
            <span className="absolute right-3 text-black"><IoSearch /></span>
          </form>

          <ul className="flex gap-5">
            <li> <span className="text-xl cursor-pointer"><FaRegHeart /></span> </li>
            <li> <span className="text-xl cursor-pointer"><IoCartOutline /></span> </li>
          </ul>

        </div>


        {/* mobile menu */}
        <div className="absolute right-0 top-[50%] -translate-[50%] text-xl cursor-pointer lg:hidden" onClick={handleToggle}><RiMenu4Fill /></div>
        {/* mobile menu end */}
      </div>


          

      {/* mobile device side bar */}
      <div className={`h-screen transition duration-500 ${isToggle ? 'translate-x-0' : '-translate-x-full'} lg:hidden bg-black/50 w-full absolute left-0 top-0`}>
        <div className="bg-white max-w-[60%] h-full p-5">
          <Menu />
        </div>

        <span className="bg-white w-[40px] h-[40px] absolute right-3 top-3 flex items-center justify-center text-xl rounded cursor-pointer" onClick={handleToggle}><MdOutlineClose /></span>
      </div>
      {/* mobile device side bar end  */}


    </div>
  );
};

export default Navigation;

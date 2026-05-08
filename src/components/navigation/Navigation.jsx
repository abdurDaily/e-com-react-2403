import React, { useState } from "react";
import { Link } from "react-router";
import Menu from "../../utils/Menu";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { categories } from "../../data/category";
import { IoIosArrowDown } from "react-icons/io";

const Navigation = () => {
  let [isToggle, setIsToggle] = useState(false);
  let [openCategory, setOpenCategory] = useState(null);

  let handleToggle = () => {
    setIsToggle(!isToggle);
  };

  let [menuVisible, setMenuVisible] = useState("menu");

  return (
    <div className="border-b border-b-black/10 px-5 lg:px-0 ">
      <div className="grid grid-cols-5 container py-3 lg:py-2 relative ">
        <div className="lg:col-span-1 col-span-2">
          <Link to="/">
            <img
              className="invert lg:w-2/3 w-[80%] "
              src="/images/logo.webp"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden col-span-2 lg:flex items-center justify-center">
          <Menu />
        </div>
        <div className="hidden col-span-2 gap-[24px]  lg:flex items-center justify-end">
          <form action="" className="flex items-center relative text-black/50">
            <input
              className="bg-[#F5F5F5] focus:outline-none rounded py-[10px] ps-[20px] pe-10 inline-block"
              type="text"
              placeholder="What are you looking for?"
            />
            <span className="absolute right-3 text-black">
              <IoSearch />
            </span>
          </form>

          <ul className="flex gap-5">
            <li>
              {" "}
              <span className="text-xl cursor-pointer">
                <FaRegHeart />
              </span>{" "}
            </li>
            <li>
              {" "}
              <span className="text-xl cursor-pointer">
                <IoCartOutline />
              </span>{" "}
            </li>
          </ul>
        </div>

        {/* mobile menu */}
        <div
          className="absolute right-0 top-[50%] -translate-[50%] text-xl cursor-pointer lg:hidden"
          onClick={handleToggle}
        >
          <RiMenu4Fill />
        </div>
        {/* mobile menu end */}
      </div>

      {/* mobile device side bar */}
      <div
        className={`h-screen  transition duration-500 ${isToggle ? "translate-x-0" : "-translate-x-full"} lg:hidden bg-black/50 w-full absolute left-0 top-0`}
      >
        <div className="bg-white max-w-[60%] h-full p-5">
          <div className="mb-5 flex gap-4">
            <button
              onClick={() => setMenuVisible("menu")}
              className={`border ${menuVisible == "menu" ? "bg-black text-white" : ""} border-black px-5 py-2 cursor-pointer hover:bg-black hover:text-white`}
            >
              Menus
            </button>
            <button
              onClick={() => setMenuVisible("categories")}
              className={`border ${menuVisible == "categories" ? "bg-black text-white" : ""} border-black px-5 py-2 cursor-pointer hover:bg-black hover:text-white`}
            >
              Categories
            </button>
          </div>

          {menuVisible == "menu" && <Menu />}
          {menuVisible == "categories" && (
            <ul>
              {categories.map((el, index) => {
                let hasSubMenu =
                  Array.isArray(el.subMenu) ;
                return (
                  <li key={index} className="py-2 border-b border-b-gray-300">
                    {hasSubMenu ? (
                      <button
                        type="button"
                        className="w-full flex items-center relative text-left cursor-pointer"
                        onClick={() =>
                          setOpenCategory(openCategory === index ? null : index)
                        }
                      >
                        {el.title}
                        <span
                          className={`absolute right-0 transition-transform duration-300 ${openCategory === index ? "rotate-180" : "rotate-0"}`}
                        >
                          <IoIosArrowDown />
                        </span>
                      </button>
                    ) : (
                      <Link
                        className="flex items-center relative"
                        to="/category"
                        state={{ category: el.title }}
                      >
                        {el.title}
                      </Link>
                    )}

                    {hasSubMenu && (
                      <ul
                        className={`overflow-hidden transition-all duration-300 ${openCategory === index ? "max-h-auto opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                      >
                        {el.subMenu.map((subEl, subIndex) => {
                          return (
                            <li
                              key={subIndex}
                              className="py-2 border-b border-b-gray-300 ms-4"
                            >
                              <Link
                                to="/category/subcategory"
                                state={{
                                  category: el.title,
                                  subCategory: subEl,
                                }}
                              >
                                {subEl}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <span
          className="bg-white w-[40px] h-[40px] absolute right-3 top-3 flex items-center justify-center text-xl rounded cursor-pointer"
          onClick={handleToggle}
        >
          <MdOutlineClose />
        </span>
      </div>
      {/* mobile device side bar end  */}
    </div>
  );
};

export default Navigation;

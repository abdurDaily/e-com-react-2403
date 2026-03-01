import React from "react";
import { Link } from "react-router";
import Dropdown from "../../utils/Dropdown";

const Header = () => {
  return (
    <div className="bg-black hidden lg:block">
        <div className=" relative container">
          <h4 className="leading-[150%] font-normal text-[14px] text-white py-[12px] text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link className="font-semibold ms-4 underline" to="/test">ShopNow</Link>
          </h4>
         <div className=" absolute right-0 top-1/2 -translate-[50%] "> <Dropdown  /></div>
        </div>
    </div>
  );
};

export default Header;

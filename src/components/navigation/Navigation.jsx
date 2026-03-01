import React from "react";
import { Link } from "react-router";
import Menu from "../../utils/Menu";

const Navigation = () => {
  return (
    <div className="border-b border-b-black/10">
      <div className="grid grid-cols-5 container py-2 ">
        <div className="col-span-1">
            <Link to="/">
              <img className="invert w-2/3" src="/images/logo.webp" alt="" />
            </Link>
        </div>
        <div className="col-span-2 flex items-center justify-center">

            <Menu />

        </div>
        <div className="col-span-2">icons</div>
      </div>
    </div>
  );
};

export default Navigation;

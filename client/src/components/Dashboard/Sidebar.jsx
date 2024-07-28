import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Sidebar = ({ data }) => {
  return (
    <div className="bg-zinc-800 rounded py-4 flex flex-col items-center justify-between h-[95%]">
      <div className="flex items-center flex-col justify-center h-auto ">
        <img src={data.avatar} alt="avatar" className="h-[10vh]" />
        <p className="mt-3 text-xl text-zinc-100 font semibolde">anurag</p>
        <p className="mt-1 text-normal text-zinc-300 ">
          "anurag@12345gmail.com"
        </p>
        <div className="w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block"></div>
      </div>

      <div className="w-full flex-col items-start justify-start h-[50%] hidden lg:flex">
        <Link
          to="/profile"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Profile
        </Link>

        <Link
          to="/dashboard/products"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-30"
        >
          All Products
        </Link>
        <Link
          to="/profile/users"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-30"
        >
          All Users
        </Link>
        <Link
          to="/profile/distributers"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-30"
        >
          All Distributers
        </Link>
        <Link
          to="/profile/distributers-request"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-30"
        >
          Distributers Request
        </Link>
      </div>
      <button className="bg-zinc-900 w-3/6 lg:w-full mt-4 lg:mt-0 text-white flex font-semibold items-center justify-center py-2 rounded hover:bg-white hover:text-zinc-800">
        Log Out <FaArrowRightFromBracket className="ms-4" />
      </button>
    </div>
  );
};

export default Sidebar;

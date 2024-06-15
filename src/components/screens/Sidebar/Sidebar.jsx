import React from "react";
import Image from "../../common/Image";
import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className=" p-3 h-full overflow-y-scroll bg-primaryBG no-scrollbar">
      <Image src={logo} className={"w-[120px] h-[120px] mx-auto"} />

      <ul className="mt-10">
        <li>
          <NavLink
            className={({ isActive }) =>
              ` ${
                isActive ? " bg-white text-black" : "text-white"
              } block py-2 px-3 border-l-[5px] border-white rounded-r-[15px] font-semibold text-[8px] sm:text-base md:text-[18px] lg:text-lg 2xl:text-2xl mb-5`
            }
            to={"/"}
          >
            Students
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              ` ${
                isActive ? " bg-white text-black" : "text-white"
              } block py-2 px-3 border-l-[5px] border-white rounded-r-[15px] font-semibold   text-[8px] sm:text-base md:text-[18px] lg:text-lg 2xl:text-2xl mb-5`
            }
            to={"/add"}
          >
            Add New
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className={({ isActive }) =>
              ` ${
                isActive ? " bg-white text-black" : "text-white"
              } block py-2 px-3 border-l-[5px] border-white rounded-r-[15px] font-semibold  text-[8px] sm:text-base md:text-[18px] lg:text-lg 2xl:text-2xl mb-5`
            }
            to={"/search"}
          >
            Search Student
          </NavLink>
        </li> */}
      </ul>
    </section>
  );
};

export default Sidebar;

import React from "react";
import Flex from "../common/Flex";
import Sidebar from "../screens/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <Flex className={" w-full h-screen bg-gray-300"}>
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12">
        <Outlet />
      </div>
    </Flex>
  );
};

export default Rootlayout;

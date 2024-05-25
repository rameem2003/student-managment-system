import React from "react";
import Flex from "../components/common/Flex";
import Sidebar from "../components/screens/Sidebar/Sidebar";
import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <Flex className={" w-full h-screen bg-gray-300"}>
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12">
        <Header />
        <Outlet />
      </div>
    </Flex>
  );
};

export default Rootlayout;

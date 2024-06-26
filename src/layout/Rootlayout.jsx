import React from "react";
import Flex from "../components/common/Flex";
import Sidebar from "../components/screens/Sidebar/Sidebar";
import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <Flex className={" w-full min-h-screen bg-gray-300"}>
      <div className="w-3/12 lg:w-2/12">
        <Sidebar />
      </div>
      <div className="w-9/12 lg:w-10/12 h-screen overflow-y-scroll no-scrollbar">
        <Header />
        <section className=" mt-3 px-2">
          <Outlet />
        </section>
      </div>
    </Flex>
  );
};

export default Rootlayout;

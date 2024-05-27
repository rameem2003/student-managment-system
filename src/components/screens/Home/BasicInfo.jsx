import React from "react";
import Flex from "../../common/Flex";

const BasicInfo = ({ data }) => {
  return (
    <Flex className={" flex items-center gap-5"}>
      <Flex className="w-2/12 h-[200px] items-center justify-center flex-col gap-3 rounded-lg bg-primaryBG">
        <h3 className=" font-sans font-semibold text-6xl text-white">
          {data.length < 10 ? `0${data.length}` : data.length}
        </h3>

        <p className=" font-sans font-normal text-2xl text-white">
          Total Students
        </p>
      </Flex>

      <Flex className="w-2/12 h-[200px] items-center justify-center flex-col gap-3 rounded-lg bg-primaryBG">
        <h3 className=" font-sans font-semibold text-6xl text-white">
          {data.length < 10 ? `0${data.length}` : data.length}
        </h3>

        <p className=" font-sans font-normal text-2xl text-white">
          Male Students
        </p>
      </Flex>
    </Flex>
  );
};

export default BasicInfo;

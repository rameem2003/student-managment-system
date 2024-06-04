import React from "react";
import Flex from "../../common/Flex";

const BasicInfo = ({ data }) => {
  const male = data.filter((student) => student.gender == "male");
  const female = data.filter((student) => student.gender == "female");

  return (
    <Flex className={" flex items-center gap-5"}>
      <Flex className="w-2/12 h-[120px] lg:h-[170px] 2xl:h-[200px] items-center justify-center flex-col gap-3 rounded-lg bg-primaryBG">
        <h3 className=" font-sans font-semibold text-[8px] sm:text-base md:text-[25px] lg:text-2xl xl:text-4xl 2xl:text-6xl text-white">
          {data.length < 10 ? `0${data.length}` : data.length}
        </h3>

        <p className=" font-sans font-normal text-[8px] sm:text-base  lg:text-xl xl:text-2xl text-white">
          Total Students
        </p>
      </Flex>

      <Flex className="w-2/12 h-[120px] lg:h-[170px] 2xl:h-[200px] items-center justify-center flex-col gap-3 rounded-lg bg-primaryBG">
        <h3 className=" font-sans font-semibold text-[8px] sm:text-base md:text-[25px] lg:text-2xl xl:text-4xl 2xl:text-6xl text-white">
          {male.length < 10 ? `0${male.length}` : male.length}
        </h3>

        <p className=" font-sans font-normal text-[8px] sm:text-base lg:text-xl xl:text-2xl text-white">
          Male Students
        </p>
      </Flex>
      <Flex className="w-2/12 h-[120px] lg:h-[170px] 2xl:h-[200px] items-center justify-center flex-col gap-3 rounded-lg bg-primaryBG">
        <h3 className=" font-sans font-semibold text-[8px] sm:text-base md:text-[25px] lg:text-2xl xl:text-4xl 2xl:text-6xl text-white">
          {female.length < 10 ? `0${female.length}` : female.length}
        </h3>

        <p className=" font-sans font-normal text-[8px] sm:text-base lg:text-xl xl:text-2xl text-white">
          Female Students
        </p>
      </Flex>
    </Flex>
  );
};

export default BasicInfo;

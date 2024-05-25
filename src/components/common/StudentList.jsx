import React from "react";
import Flex from "./Flex";
import Image from "./Image";
/**
 * This Component for displaing student info in list view
 */
const StudentList = ({ studentInfo }) => {
  return (
    <Flex
      className={
        "items-center justify-between p-3 rounded-lg bg-white hover:bg-primaryBG group mb-5 cursor-pointer"
      }
    >
      <Flex className={"items-center gap-4"}>
        <div className="w-[50px] h-[60px]">
          <Image
            className={"w-full object-cover"}
            src={studentInfo.studentImage}
          />
        </div>

        <div>
          <h1 className=" font-sans font-semibold text-xl text-black group-hover:text-white">
            {studentInfo.studentNameEnglish}
          </h1>

          <p className=" font-sans font-normal text-lg text-black group-hover:text-white">
            {" "}
            Diploma Board Roll: {studentInfo.diplomaBoardRoll}
          </p>
        </div>
      </Flex>
    </Flex>
  );
};

export default StudentList;

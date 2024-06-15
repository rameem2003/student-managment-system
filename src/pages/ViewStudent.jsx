import React, { useEffect, useState } from "react";
import Flex from "../components/common/Flex";
import Image from "../components/common/Image";
import { useParams } from "react-router-dom";
import axios from "axios";
import DeletePopup from "../components/common/DeletePopup";

const ViewStudent = () => {
  const { roll } = useParams();
  const [student, setStudent] = useState({});

  const fetchStudent = () => {
    axios
      .get(import.meta.env.VITE_API_URL + "/" + roll)
      .then((data) => setStudent(data.data));
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  console.log(student);
  return (
    <main className="py-2">
      <section>
        <Flex className="items-center gap-5 justify-between">
          <div className="w-2/12">
            <Image
              src={student.studentImage}
              className="w-[200px] h-[200px] rounded-xl"
            />
          </div>
          <div className="w-10/12">
            <h2 className=" font-sans font-bold text-[12px] sm:text-base md:text-[18px] lg:text-lg xl:text-2xl 2xl:text-4xl mb-4">
              {student.studentNameBangla}
            </h2>
            <h2 className=" font-sans font-bold text-[12px] sm:text-base md:text-[18px] lg:text-lg xl:text-2xl 2xl:text-4xl mb-4">
              {student.studentNameEnglish}
            </h2>
            <Flex className="items-center gap-5 mb-4">
              <p className=" font-sans font-medium text-[8px] sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Board Roll: {student.diplomaBoardRoll}
              </p>
              <p className=" font-sans font-medium text-[8px] sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Board Registration: {student.diplomaBoardReg}
              </p>
            </Flex>
            <Flex className="items-center gap-5 mb-4">
              <p className=" capitalize font-sans font-medium text-[8px] sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Gender: {student.gender}
              </p>
              <p className=" font-sans font-medium text-[8px] sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Date of Birth: {student.dob}
              </p>
              <p className=" font-sans font-medium text-[8px] sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Email: {student.email}
              </p>
            </Flex>
          </div>
        </Flex>

        <Flex className=" items-center gap-5 mt-5">
          <Flex className="w-2/12 h-[120px] lg:h-[170px] 2xl:h-[200px] items-center justify-center flex-col gap-3 rounded-lg bg-primaryBG">
            <h3 className=" font-sans font-semibold text-[8px] sm:text-base md:text-[25px] lg:text-2xl xl:text-4xl 2xl:text-6xl text-white">
              {student.bloodGroup}
            </h3>

            <p className=" font-sans font-normal text-[8px] sm:text-base  lg:text-xl xl:text-2xl text-white">
              Blood Group
            </p>
          </Flex>

          <Flex className="w-2/12 h-[120px] lg:h-[170px] 2xl:h-[200px] items-center justify-center flex-col gap-3 rounded-lg bg-primaryBG">
            <h3 className=" font-sans font-semibold text-[8px] sm:text-base md:text-[25px] lg:text-2xl xl:text-4xl 2xl:text-6xl text-white">
              {student.sscGroup}
            </h3>

            <p className=" font-sans font-normal text-[8px] sm:text-base  lg:text-xl xl:text-2xl text-white">
              SSC Group
            </p>
          </Flex>
          <Flex className="w-2/12 h-[120px] lg:h-[170px] 2xl:h-[200px] items-center justify-center flex-col gap-3 rounded-lg bg-primaryBG">
            <h3 className=" font-sans font-semibold text-[8px] sm:text-base md:text-[25px] lg:text-2xl xl:text-4xl 2xl:text-6xl text-white">
              GPA {student.sscResult}
            </h3>

            <p className=" font-sans font-normal text-[8px] sm:text-base  lg:text-xl xl:text-2xl text-white">
              SSC Result
            </p>
          </Flex>
        </Flex>
      </section>
    </main>
  );
};

export default ViewStudent;

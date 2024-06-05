import React, { useEffect, useState } from "react";
import Flex from "../components/common/Flex";
import { useParams } from "react-router-dom";
import axios from "axios";
import Image from "../components/common/Image";

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
        <Flex className="items-center justify-between">
          <div className="w-2/12">
            <Image
              src={student.studentImage}
              className="w-[200px] h-[200px] rounded-xl"
            />
          </div>
          <div className="w-10/12">
            <h2 className=" font-sans font-bold text-4xl mb-4">
              {student.studentNameBangla}
            </h2>
            <h2 className=" font-sans font-bold text-4xl mb-4">
              {student.studentNameEnglish}
            </h2>
            <Flex className="items-center gap-5 mb-4">
              <p className=" font-sans font-medium text-2xl">
                Board Roll: {student.diplomaBoardRoll}
              </p>
              <p className=" font-sans font-medium text-2xl">
                Board Registration: {student.diplomaBoardReg}
              </p>
            </Flex>
            <Flex className="items-center gap-5 mb-4">
              <p className=" font-sans font-medium text-2xl">
                Date of Birth: {student.dob}
              </p>
              <p className=" font-sans font-medium text-2xl">
                Email: {student.email}
              </p>
            </Flex>
          </div>
        </Flex>
      </section>
    </main>
  );
};

export default ViewStudent;

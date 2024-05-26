import React, { useEffect } from "react";
import Flex from "./Flex";
import axios from "axios";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { studentReducer } from "../../redux/features/allstudents";

const Header = () => {
  const disatch = useDispatch(); // sent all students fata to main redux
  const data = useSelector((state) => state.allStudents.students); // get all students
  /**
   * Store all students info into the main redux store
   * for global
   */

  useEffect(() => {
    const fetchStudents = () => {
      axios
        .get(import.meta.env.VITE_API_URL)
        .then((data) => disatch(studentReducer(data.data)));
    };

    fetchStudents();
  }, []);

  return (
    <header className=" bg-primaryBG p-3">
      <Flex className=" items-center justify-between">
        <h1 className=" font-sans font-semibold text-2xl text-white">
          ISTT Diploma Batch 2019 - 20 Student Info
        </h1>

        <Flex className={" items-center gap-5"}>
          <h2 className=" font-sans font-semibold text-2xl text-white">
            Total Students :{" "}
            {data.length < 10 ? `0${data.length}` : data.length}
          </h2>

          <FaUserCircle className=" text-2xl text-white cursor-pointer" />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Flex from "../components/common/Flex";
import StudentListView from "../components/common/StudentListView";
import Loading from "../components/common/Loading";
import BasicInfo from "../components/screens/Home/BasicInfo";
import { useDispatch, useSelector } from "react-redux";
import { studentReducer } from "../redux/features/allstudents";
import { MdOutlineWindow } from "react-icons/md";
import { FaSearch, FaThList } from "react-icons/fa";

const Home = () => {
  const disatch = useDispatch();
  let data = useSelector((state) => state.allStudents.students); // get all students
  const [search, setSearch] = useState([]); // state for filtering student by many criteria by default it will store all information

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

  /**
   * function for search input (search by roll number)
   * It will happen when user type any number
   */

  useEffect(() => {
    setSearch(data);
  }, [data]);
  const handleSearch = (e) => {
    if (e.target.value == "") {
      setSearch(data);
    } else {
      let searchResult = data.filter((searchStudent) =>
        searchStudent.diplomaBoardRoll
          .toString()
          .includes(e.target.value.toString())
      );

      setSearch(searchResult);
    }
  };

  return (
    <main>
      <BasicInfo data={data} />
      <Flex className={"items-center justify-between my-5"}>
        <Flex className={"gap-5"}>
          <div className="w-[40px] h-[40px] bg-white flex items-center justify-center cursor-pointer">
            <MdOutlineWindow className="text-[30px]" />
          </div>
          <div className="w-[40px] h-[40px] bg-white flex items-center justify-center cursor-pointer">
            <FaThList className="text-[24px]" />
          </div>
        </Flex>

        <Flex>
          <div className=" relative">
            <input
              onChange={handleSearch}
              className=" outline-none py-[12px] px-3 w-[400px] font-sans font-normal text-base"
              type="text"
              name=""
              id=""
              placeholder="Search Student By Roll"
            />

            <FaSearch className=" absolute top-[50%] translate-y-[-50%] right-2 text-[20px]" />
          </div>
        </Flex>
      </Flex>

      <div className="">
        {data.length == 0 ? (
          <Loading />
        ) : (
          <>
            {search.length == 0 ? (
              <h1 className=" font-sans font-semibold text-2xl text-red-500 text-center">
                Student Not Found
              </h1>
            ) : (
              <div>
                <StudentListView students={search} itemsPerPage={5} />
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Home;

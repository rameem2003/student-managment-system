import React, { useEffect, useState } from "react";
import Flex from "../components/common/Flex";
import StudentListView from "../components/common/StudentListView";
import { useSelector } from "react-redux";
import { MdOutlineWindow } from "react-icons/md";
import { FaSearch, FaThList } from "react-icons/fa";
import Loading from "../components/common/Loading";

const Home = () => {
  let data = useSelector((state) => state.allStudents.students); // get all students
  const [search, setSearch] = useState([]); // state for filtering student by many criteria by default it will store all information

  useEffect(() => {
    setSearch(data);
  }, [data]);

  /**
   * function for search input (search by roll number)
   * It will happen when user type any number
   */
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
    <main className="px-2">
      <Flex className={" flex items-center my-5 gap-5"}>
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
              <StudentListView students={search} />
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Home;

import React from "react";
import StudentListView from "../components/common/StudentListView";
import { useSelector } from "react-redux";

const Home = () => {
  let data = useSelector((state) => state.allStudents.students);
  return (
    <main className="px-2">
      <StudentListView students={data} />
    </main>
  );
};

export default Home;

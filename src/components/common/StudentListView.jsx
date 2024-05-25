import React from "react";
import StudentList from "./StudentList";

/**
 * This Component for displaing all students info in list view
 */

const StudentListView = ({ students }) => {
  // student sorting by diploma roll number
  let sortedStudents = [...students].sort(
    (a, b) => a.diplomaBoardRoll - b.diplomaBoardRoll
  );

  return (
    <section>
      {sortedStudents.map((studentInfo, i) => (
        <StudentList key={i} studentInfo={studentInfo} />
      ))}
    </section>
  );
};

export default StudentListView;

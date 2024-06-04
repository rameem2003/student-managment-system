import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import StudentList from "./StudentList";
import Flex from "./Flex";

/**
 * This Component for displaing all students info in list view
 */

const StudentListView = ({ students, itemsPerPage }) => {
  // student sorting by diploma roll number
  let sortedStudents = [...students].sort(
    (a, b) => a.diplomaBoardRoll - b.diplomaBoardRoll
  );

  function Items({ currentItems }) {
    return (
      <>
        <section>
          {currentItems &&
            currentItems.map((studentInfo, i) => (
              <StudentList key={i} studentInfo={studentInfo} />
            ))}
        </section>
      </>
    );
  }

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = sortedStudents.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(sortedStudents.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % sortedStudents.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <Flex>
        <ReactPaginate
          pageClassName=" h-[40px] w-[40px] border-[1px] border-blue-500 flex items-center justify-center text-xl text-black rounded-full"
          activeClassName="bg-primaryBG text-white"
          previousClassName=" h-[40px] w-[40px] flex items-center justify-center text-xl text-white rounded-full bg-primaryBG"
          previousLabel="<"
          className=" flex items-center gap-5"
          breakLabel="..."
          nextLabel=">"
          nextClassName="h-[40px] w-[40px] flex items-center justify-center text-xl text-white rounded-full bg-primaryBG"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
        />
      </Flex>
    </>
  );
};

export default StudentListView;

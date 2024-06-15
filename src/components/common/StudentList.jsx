import React, { useState } from "react";
import Flex from "./Flex";
import Image from "./Image";
import { GrView } from "react-icons/gr";
import { MdModeEditOutline } from "react-icons/md";
import { PiTrashSimpleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import DeletePopup from "./DeletePopup";
import { ToastContainer } from "react-toastify";
/**
 * This Component for displaing student info in list view
 */
const StudentList = ({ studentInfo }) => {
  const navigate = useNavigate();

  const [popup, setPopup] = useState(false);

  const handleDelete = (data) => {
    setPopup(true);
  };
  return (
    <>
      <ToastContainer />
      {popup && (
        <DeletePopup popup={popup} setPopup={setPopup} student={studentInfo} />
      )}
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

        <Flex className={"items-center justify-end gap-5"}>
          <GrView
            onClick={() => navigate(`/student/${studentInfo.diplomaBoardRoll}`)}
            className=" text-2xl text-black cursor-pointer group-hover:text-white"
          />
          <MdModeEditOutline className=" text-2xl text-black cursor-pointer group-hover:text-white" />
          <PiTrashSimpleFill
            onClick={() => handleDelete(studentInfo)}
            className=" text-2xl text-black cursor-pointer group-hover:text-white"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default StudentList;

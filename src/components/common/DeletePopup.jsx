import React from "react";
import Flex from "./Flex";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DeletePopup = ({ student, setPopup, popup }) => {
  const navigate = useNavigate();
  const deleteStudent = async () => {
    try {
      await axios
        .delete(import.meta.env.VITE_API_URL + "/" + student.diplomaBoardRoll)
        .then((res) => {
          toast.success(`${res.data.msg}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          setTimeout(() => {
            navigate("/");
            setPopup(false);
          }, 2000);
        });
    } catch (error) {
      // console.log(error.response.data.msg);
      toast.success(`${error.response.data.msg}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // setPopup(false);

      setTimeout(() => {
        setPopup(false);
      }, 2000);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className={` w-full h-screen bg-white/20 fixed top-0 left-0`}>
        <div className=" w-[500px] p-5 rounded-lg bg-primaryBG fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          <h1 className=" font-sans font-extrabold text-4xl text-white mb-5">
            Are You Sure ?
          </h1>
          <h1 className=" font-sans font-medium text-xl text-white ">
            You want to delete {student.studentNameEnglish}?
          </h1>

          <Flex className="items-center justify-between mt-5 gap-5">
            <button
              onClick={deleteStudent}
              className="w-1/2 text-center rounded-lg py-3 font-sans font-semibold text-2xl text-white bg-red-500 active:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={() => setPopup(false)}
              className="w-1/2 text-center rounded-lg py-3 font-sans font-semibold text-2xl text-white bg-green-500 active:bg-green-600"
            >
              Back
            </button>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default DeletePopup;

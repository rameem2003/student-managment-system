import React, { useEffect, useRef, useState } from "react";
import Input from "../components/common/Input";
import Flex from "../components/common/Flex";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { genderData } from "../constant/genderdata";

const AddStudent = () => {
  const navigate = useNavigate("");
  const genderRef = useRef();
  const [genderDropDown, setGenderDropDown] = useState(false);
  const [nameB, setNameB] = useState("");
  const [nameE, setNameE] = useState("");
  const [gender, setGender] = useState("");
  const [img, setImg] = useState("");
  const [dob, setDOB] = useState("");
  const [blood, setBlood] = useState("");
  const [email, setEmail] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [department, setDepartment] = useState("");
  const [boardRoll, setBoardRoll] = useState("");
  const [boardReg, setBoardReg] = useState("");
  const [session, setSession] = useState("");
  const [sscGroup, setSSCGroup] = useState("");
  const [sscGPA, setSSCGPA] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(0);

    let newStudent = {
      studentNameBangla: nameB,
      studentNameEnglish: nameE,
      status: true,
      gender: gender,
      department: department,
      diplomaBoardRoll: boardRoll,
      diplomaBoardReg: boardReg,
      studentImage: img,
      fathersName: fatherName,
      mothersName: motherName,
      session: session,
      bloodGroup: blood,
      sscGroup: sscGroup,
      sscResult: sscGPA,
      dob: dob,
      email: email,
    };

    try {
      await axios
        .post(import.meta.env.VITE_API_URL, newStudent, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.msg == "Student Already Available") {
            toast.warning("Student Already Exist", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.success("Student Added Successful", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        })
        .finally(() => {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        });
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    console.log(newStudent);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      genderRef.current.contains(e.target)
        ? setGenderDropDown(true)
        : setGenderDropDown(false);
    });
  }, []);
  return (
    <section>
      <ToastContainer />
      <h1 className=" font-sans font-bold text-4xl text-black">
        Add New Student
      </h1>

      <form action="" className="w-full" onSubmit={handleSubmit}>
        <Flex className={"gap-3 mb-4"}>
          <Input
            onChange={(e) => setNameB(e.target.value)}
            className={"w-1/3"}
            htmlFor={"name_in_bangla"}
            label={"Name in Bangla"}
          />
          <Input
            onChange={(e) => setNameE(e.target.value)}
            className={"w-1/3"}
            htmlFor={"name_in_english"}
            label={"Name in English"}
          />
          <Input
            onChange={(e) => setBlood(e.target.value)}
            className={"w-1/3"}
            htmlFor={"blodd"}
            label={"Blood Group"}
          />
        </Flex>

        <Flex className={"gap-3 mb-4"}>
          <Input
            onChange={(e) => setImg(e.target.value)}
            className={"w-1/4"}
            htmlFor={"img"}
            label={"Photo Link"}
          />
          <div ref={genderRef} className="w-1/4 relative">
            <Input
              value={gender}
              // onChange={(e) => setGender(e.target.value)}

              className={"w-full"}
              htmlFor={"gender"}
              label={"Gender"}
            />

            {genderDropDown && (
              <div className="bg-white w-full z-50  top-[80px] left-0 rounded-lg absolute">
                {genderData.map((data, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      setGender(data);
                    }}
                    className=" capitalize cursor-pointer py-2 px-3 rounded-md font-sans font-semibold text-lg hover:bg-primaryBG hover:text-white"
                  >
                    {data}
                  </p>
                ))}
              </div>
            )}
          </div>
          <Input
            onChange={(e) => setFatherName(e.target.value)}
            className={"w-1/4"}
            htmlFor={"father_Name"}
            label={"Father's Name (Bangla)"}
          />
          <Input
            onChange={(e) => setMotherName(e.target.value)}
            className={"w-1/4"}
            htmlFor={"mother_name"}
            label={"Mother Name (Bangla)"}
          />
        </Flex>

        <Flex className={"gap-3 mb-4"}>
          <Input
            onChange={(e) => setDOB(e.target.value)}
            className={"w-1/2"}
            htmlFor={"dob"}
            label={"Date of Birth (DD - MM - YYYY)"}
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className={"w-1/2"}
            htmlFor={"email"}
            label={"Student Email"}
          />
        </Flex>

        <Flex className={"gap-3 mb-4"}>
          <Input
            onChange={(e) => setDepartment(e.target.value)}
            className={"w-1/2"}
            htmlFor={"departmane"}
            label={"Enter Department"}
          />
          <Input
            onChange={(e) => setBoardRoll(e.target.value)}
            className={"w-1/2"}
            htmlFor={"roll"}
            label={"Board Roll"}
          />
        </Flex>

        <Flex className={"gap-3 mb-4"}>
          <Input
            onChange={(e) => setBoardReg(e.target.value)}
            className={"w-1/2"}
            htmlFor={"reg"}
            label={"Board Registration Number"}
          />
          <Input
            onChange={(e) => setSession(e.target.value)}
            className={"w-1/2"}
            htmlFor={"session"}
            label={"Diploma Session"}
          />
        </Flex>

        <Flex className={"gap-3 mb-4"}>
          <Input
            onChange={(e) => setSSCGroup(e.target.value)}
            className={"w-1/2"}
            htmlFor={"group"}
            label={"SSC Group (Bangla)"}
          />
          <Input
            onChange={(e) => setSSCGPA(e.target.value)}
            className={"w-1/2"}
            htmlFor={"gpa"}
            label={"SSC GPA"}
          />
        </Flex>

        <button
          type="submit"
          className=" mt-5 w-full px-2 py-3 rounded-xl bg-blue-500 font-sans font-semibold text-xl text-white"
        >
          Upload Data
        </button>
      </form>
    </section>
  );
};

export default AddStudent;

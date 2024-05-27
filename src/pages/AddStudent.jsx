import React, { useState } from "react";
import Input from "../components/common/Input";
import Flex from "../components/common/Flex";
import axios from "axios";

const AddStudent = () => {
  const [nameB, setNameB] = useState("");
  const [nameE, setNameE] = useState("");
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
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }

    // console.log(newStudent);
  };
  return (
    <section>
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
            className={"w-1/3"}
            htmlFor={"img"}
            label={"Photo Link"}
          />
          <Input
            onChange={(e) => setFatherName(e.target.value)}
            className={"w-1/3"}
            htmlFor={"father_Name"}
            label={"Father's Name (Bangla)"}
          />
          <Input
            onChange={(e) => setMotherName(e.target.value)}
            className={"w-1/3"}
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
            label={"SSC Group"}
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

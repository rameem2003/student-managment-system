import React, { useEffect, useRef, useState } from "react";
import Input from "../components/common/Input";
import Flex from "../components/common/Flex";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { genderData } from "./../constant/genderdata";
import { bloodGroup } from "../constant/bloodgroup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateStudent = () => {
  const location = useLocation();
  const [student, setStudent] = useState(location.state);

  // navigation instance
  const navigate = useNavigate();

  // all refarences
  const genderRef = useRef();
  const bloodRef = useRef();
  const [loading, setLoading] = useState(true);
  const [genderDropDown, setGenderDropDown] = useState(false);
  const [bloodDropDown, setBloodDropDown] = useState(false);

  // student data states
  const [nameB, setNameB] = useState(student.studentNameBangla);

  const [nameE, setNameE] = useState(student.studentNameEnglish);
  const [gender, setGender] = useState(student.gender);
  const [img, setImg] = useState(student.studentImage);
  const [dob, setDOB] = useState(student.dob);
  const [blood, setBlood] = useState(student.bloodGroup);
  const [email, setEmail] = useState(student.email);
  const [fatherName, setFatherName] = useState(student.fathersName);
  const [motherName, setMotherName] = useState(student.mothersName);
  const [department, setDepartment] = useState(student.department);
  const [boardRoll, setBoardRoll] = useState(student.diplomaBoardRoll);
  const [boardReg, setBoardReg] = useState(student.diplomaBoardReg);
  const [session, setSession] = useState(student.session);
  const [sscGroup, setSSCGroup] = useState(student.sscGroup);
  const [sscGPA, setSSCGPA] = useState(student.sscResult);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      genderRef.current.contains(e.target)
        ? setGenderDropDown(true)
        : setGenderDropDown(false);
      bloodRef.current.contains(e.target)
        ? setBloodDropDown(true)
        : setBloodDropDown(false);
    });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let updatedStudent = {
      nameB,
      nameE,
      gender,
      img,
      dob,
      blood,
      email,
      fatherName,
      motherName,
      department,
      boardRoll,
      boardReg,
      session,
      sscGroup,
      sscGPA,
    };

    console.log(updatedStudent);
  };

  return (
    <section>
      <>
        <ToastContainer />
        <h1 className=" font-sans font-bold text-4xl text-black">
          Update Student
        </h1>

        <form action="" className="w-full" onSubmit={handleUpdate}>
          <Flex className={"gap-3 mb-4"}>
            <Input
              defaultValue={nameB}
              onChange={(e) => setNameB(e.target.value)}
              className={"w-1/3"}
              htmlFor={"name_in_bangla"}
              label={"Name in Bangla"}
            />
            <Input
              defaultValue={nameE}
              onChange={(e) => setNameE(e.target.value)}
              className={"w-1/3"}
              htmlFor={"name_in_english"}
              label={"Name in English"}
            />
            <div ref={bloodRef} className="w-1/3 relative">
              <Input
                defaultValue={student.bloodGroup}
                value={blood}
                // onChange={(e) => setBlood(e.target.value)}
                className={"w-full"}
                htmlFor={"blodd"}
                label={"Blood Group"}
                autoComplete={"off"}
              />

              {bloodDropDown && (
                <div className="bg-white w-full z-50  top-[80px] left-0 rounded-lg absolute">
                  {bloodGroup.map((data, i) => (
                    <p
                      key={i}
                      onClick={() => {
                        setBlood(data);
                      }}
                      className=" capitalize cursor-pointer py-2 px-3 rounded-md font-sans font-semibold text-lg hover:bg-primaryBG hover:text-white"
                    >
                      {data}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </Flex>

          <Flex className={"gap-3 mb-4"}>
            <Input
              defaultValue={img}
              onChange={(e) => setImg(e.target.value)}
              className={"w-1/4"}
              htmlFor={"img"}
              label={"Photo Link"}
            />
            <div ref={genderRef} className="w-1/4 relative">
              <Input
                value={gender}
                //   defaultValue={student.gender}
                onChange={(e) => setGender(e.target.value)}
                className={"w-full"}
                htmlFor={"gender"}
                label={"Gender"}
                autoComplete={"off"}
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
              defaultValue={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              className={"w-1/4"}
              htmlFor={"father_Name"}
              label={"Father's Name (Bangla)"}
            />
            <Input
              defaultValue={motherName}
              onChange={(e) => setMotherName(e.target.value)}
              className={"w-1/4"}
              htmlFor={"mother_name"}
              label={"Mother Name (Bangla)"}
            />
          </Flex>

          <Flex className={"gap-3 mb-4"}>
            <Input
              defaultValue={dob}
              onChange={(e) => setDOB(e.target.value)}
              className={"w-1/2"}
              htmlFor={"dob"}
              label={"Date of Birth (DD - MM - YYYY)"}
            />
            <Input
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
              className={"w-1/2"}
              htmlFor={"email"}
              label={"Student Email"}
            />
          </Flex>

          <Flex className={"gap-3 mb-4"}>
            <Input
              defaultValue={department}
              onChange={(e) => setDepartment(e.target.value)}
              className={"w-1/2"}
              htmlFor={"departmane"}
              label={"Enter Department"}
            />
            <Input
              defaultValue={boardRoll}
              onChange={(e) => setBoardRoll(e.target.value)}
              className={"w-1/2"}
              htmlFor={"roll"}
              label={"Board Roll"}
            />
          </Flex>

          <Flex className={"gap-3 mb-4"}>
            <Input
              defaultValue={boardReg}
              onChange={(e) => setBoardReg(e.target.value)}
              className={"w-1/2"}
              htmlFor={"reg"}
              label={"Board Registration Number"}
            />
            <Input
              defaultValue={session}
              onChange={(e) => setSession(e.target.value)}
              className={"w-1/2"}
              htmlFor={"session"}
              label={"Diploma Session"}
            />
          </Flex>

          <Flex className={"gap-3 mb-4"}>
            <Input
              defaultValue={sscGroup}
              onChange={(e) => setSSCGroup(e.target.value)}
              className={"w-1/2"}
              htmlFor={"group"}
              label={"SSC Group (Bangla)"}
            />
            <Input
              defaultValue={sscGPA}
              onChange={(e) => setSSCGPA(e.target.value)}
              className={"w-1/2"}
              htmlFor={"gpa"}
              label={"SSC GPA"}
            />
          </Flex>

          <button
            type="submit"
            className=" mt-5 w-full px-2 py-3 rounded-xl bg-orange-500 font-sans font-semibold text-xl text-white"
          >
            Update Student
          </button>
        </form>
      </>
    </section>
  );
};

export default UpdateStudent;

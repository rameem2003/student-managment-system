import React, { useEffect, useRef, useState } from "react";
import Input from "../components/common/Input";
import Flex from "../components/common/Flex";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { genderData } from "./../constant/genderdata";
import { bloodGroup } from "../constant/bloodgroup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/common/Loading";

const UpdateStudent = () => {
  const { roll } = useParams(); // get the roll number from searchbar
  const [student, setStudent] = useState({});
  console.log(student);
  const navigate = useNavigate();
  const genderRef = useRef();
  const bloodRef = useRef();
  const [loading, setLoading] = useState(true);
  const [genderDropDown, setGenderDropDown] = useState(false);
  const [bloodDropDown, setBloodDropDown] = useState(false);
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

  console.log(student);

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

  /**
   * Get the student info from the parameter of browser
   */
  const fetchStudent = () => {
    axios.get(import.meta.env.VITE_API_URL + "/" + roll).then((data) => {
      setStudent(data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    console.log(nameB);
  };

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer />
          <h1 className=" font-sans font-bold text-4xl text-black">
            Update Student
          </h1>

          <form action="" className="w-full" onSubmit={handleUpdate}>
            <Flex className={"gap-3 mb-4"}>
              <Input
                defaultValue={student.studentNameBangla}
                onInput={(e) => setNameB(student.studentNameBangla)}
                onChange={(e) => setNameB(e.target.value)}
                className={"w-1/3"}
                htmlFor={"name_in_bangla"}
                label={"Name in Bangla"}
              />
              <Input
                defaultValue={student.studentNameEnglish}
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
                onChange={(e) => setImg(e.target.value)}
                className={"w-1/4"}
                htmlFor={"img"}
                label={"Photo Link"}
              />
              <div ref={genderRef} className="w-1/4 relative">
                <Input
                  value={gender}
                  //   defaultValue={student.gender}
                  // onChange={(e) => setGender(e.target.value)}

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
              className=" mt-5 w-full px-2 py-3 rounded-xl bg-orange-500 font-sans font-semibold text-xl text-white"
            >
              Update Student
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default UpdateStudent;

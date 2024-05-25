import { configureStore } from "@reduxjs/toolkit";
import allStudents from "../features/allstudents";

export default configureStore({
  reducer: {
    allStudents: allStudents,
  },
});

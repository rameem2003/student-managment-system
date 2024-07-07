import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import Rootlayout from "./layout/Rootlayout";
import ViewStudent from "./pages/ViewStudent";
import UpdateStudent from "./pages/UpdateStudent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="/add" element={<AddStudent />} />
      <Route path="/update/" element={<UpdateStudent />} />
      <Route path="/student/:roll" element={<ViewStudent />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

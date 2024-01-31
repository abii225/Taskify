import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Undefined from "../Pages/Undefined";
import Homepage from "../Pages/Homepage";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";

const Allroutes: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<Undefined />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;

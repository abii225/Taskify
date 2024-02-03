import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Undefined from "../Pages/Undefined";
import Homepage from "../Pages/Homepage";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "../Components/ResetPassword";

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
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/reset" element={<ResetPassword />}></Route>
        <Route path="*" element={<Undefined />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {HomeScene} from "scenes";
import { switchRoutes } from "./routes";

export const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path="*" element={<Navigate to="/" />} />      
      </Routes>
    </Router>
  );
};
import React from "react";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

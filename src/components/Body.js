import React from "react";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;

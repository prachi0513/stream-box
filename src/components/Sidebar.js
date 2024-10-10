import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  //if (!isMenuOpen) return null or you can do below.;

  return (
    <>
      {isMenuOpen && (
        <div className="w-48 bg-black text-white mt-2 mx-2 pl-4">
          <div className="my-4 mx-2">
            <ul className="my-2">Home</ul>
            <ul className="my-2">Shorts</ul>
            <ul className="my-2">Subscription</ul>
            <ul className="my-2">Youtube Music</ul>
          </div>

          <div className="my-2 mx-2">
            <ul className="text-xl font-bold">You</ul>
            <ul className="my-2">Your Channel</ul>
            <ul className="my-2">History</ul>
            <ul className="my-2">Playulsts</ul>
            <ul className="my-2">Your Video</ul>
          </div>

          <div className="my-2 mx-2">
            <ul className="text-xl font-bold">Watch later</ul>
            <ul className="my-2">Your Channel</ul>
            <ul className="my-2">History</ul>
            <ul className="my-2">Playulsts</ul>
            <ul className="my-2">Your Video</ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

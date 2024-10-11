import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleIsMenuOpen } from "../Redux/appSlice";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constant";

const Head = () => {
  const disptach = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    //Debouncing
    const timer = setTimeout(() => {
      getYoutubeSearchSuggestion();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleSideMenu = () => {
    disptach(toggleIsMenuOpen());
  };

  const getYoutubeSearchSuggestion = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  return (
    <div className="flex justify-between shadow-md bg-black">
      <div className="flex">
        <img
          onClick={toggleSideMenu}
          className="w-8 h-8 my-4 mx-2 cursor-pointer"
          alt="hamburgur"
          src="data:image/png;base64,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"
        />

        <img
          alt="logo"
          className="m-1 w-32 h-14"
          src="./logo.png"
          onClick={() => (window.location.href = "/")}
        />
      </div>

      <div className="flex justify-center w-full">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/2 bg-black my-4 border rounded-l-full p-2 px-8 border-gray-600 text-white"
          placeholder="Search"
        />
        <button className="border my-4 rounded-e-full px-4 border-gray-600">
          🔍
        </button>
      </div>

      <div className="">
        <img
          className="w-8 h-8 my-4  rounded-full mx-8"
          alt="user"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Head;
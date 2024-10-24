import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleIsMenuOpen } from "../Redux/appSlice";
import {
  api_key,
  HAMBURGUR,
  LOGO,
  USER_AVAATAR,
  YOUTUBE_SUGGESTIONS_API,
} from "../utils/constant";
import { useSelector } from "react-redux";
import { addCacheResults } from "../Redux/searchSlice";

const Head = () => {
  const disptach = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //Debouncing
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getYoutubeSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleSideMenu = () => {
    disptach(toggleIsMenuOpen());
  };

  const getYoutubeSearchSuggestion = async () => {
    // console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    disptach(
      addCacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSuggestionClick = async (sugg) => {
    setSearchQuery(sugg);
    setShowSuggestion(false);
  };

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     navigate(`/results?search_query=${searchQuery}`);
  //   }
  // };

  return (
    <div className="flex justify-between shadow-md bg-black fixed top-0 left-0 right-0">
      <div className="flex">
        <img
          onClick={toggleSideMenu}
          className="w-8 h-8 my-4 mx-2 cursor-pointer"
          alt="hamburgur"
          src={HAMBURGUR}
        />

        <img
          alt="logo"
          className="mx-2 w-32 h-20"
          src={LOGO}
          onClick={() => (window.location.href = "/")}
        />
      </div>

      <div className="w-full relative">
        <div className="flex justify-center w-full relative">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 bg-black my-4 border rounded-l-full p-2 px-8 border-gray-600 text-white"
            placeholder="Search"
            onFocus={() => setShowSuggestion(true)}
            onBlur={() =>
              setTimeout(() => {
                setShowSuggestion(false);
              }, 100)
            }
          />

          {searchQuery && (
            <button
              className="absolute right-[28%] top-[50%] transform -translate-y-1/2 text-white px-2 focus:outline-none"
              onClick={() => setSearchQuery("")}
            >
              ✕
            </button>
          )}

          <button className="border my-4 rounded-e-full px-4 border-gray-600">
            🔍
          </button>
        </div>

        {showSuggestion && suggestion.length > 0 && (
          <div className="text-white bg-[#212121] p-4 w-1/2 absolute flex left-1/2 transform -translate-x-1/2 -mt-2 rounded-lg">
            <ul className="w-full">
              {suggestion.map((sugg) => {
                return (
                  <li
                    className="hover:bg-[#383838] w-full p-2 m-0 cursor-pointer"
                    key={sugg}
                    onClick={() => {
                      handleSuggestionClick(sugg);
                    }}
                  >
                    {sugg}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="">
        <img
          className="w-8 h-8 my-4  rounded-full mx-8"
          alt="user"
          src={USER_AVAATAR}
        />
      </div>
    </div>
  );
};

export default Head;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";
import CommentContainer from "./CommentList";

const WatchPage = () => {
  const disptach = useDispatch();
  const [searhParams] = useSearchParams();
  console.log(searhParams.get("v"));
  useEffect(() => {
    disptach(closeMenu());
  }, []);

  return (
    <div className="text-white  w-full h-full rounded-lg mt-12 flex flex-col">
      <iframe
        className="ml-24 mt-8 rounded-xl"
        width="920"
        height="520"
        src={
          "https://www.youtube.com/embed/" +
          searhParams.get("v") +
          "?autoplay=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="w-full h-full">
        <h1 className="ml-24 mt-6 font-bold">Comments</h1>
        <div>
          <CommentContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;

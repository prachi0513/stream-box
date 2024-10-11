import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Redux/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const disptach = useDispatch();
  const [searhParams] = useSearchParams();
  console.log(searhParams.get("v"));
  useEffect(() => {
    disptach(closeMenu());
  }, []);

  return (
    <div className="text-white  w-full h-full rounded-lg">
      <iframe
        className="ml-20 mt-8 rounded-xl"
        width="920"
        height="520"
        src={"https://www.youtube.com/embed/" + searhParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;

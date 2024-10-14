import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Redux/appSlice";
import { useSearchParams } from "react-router-dom";
import { api_key } from "../utils/constant";
import { dateInFormat } from "../utils/helpers";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const disptach = useDispatch();
  const [videoInfo, setVideoInfo] = useState({});
  const [expand, setExpand] = useState(false);
  const [videoId, setVideoId] = useState("0");
  const [searhParams] = useSearchParams();
  console.log(searhParams.get("v"));

  useEffect(() => {
    disptach(closeMenu());
    VideoDetailsApi();
    SuggestedVideos();
  }, []);

  const VideoDetailsApi = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${searhParams.get(
        "v"
      )}&key=${api_key}`
    );

    const json = await data.json();
    setVideoInfo(json?.items[0]);
    //console.log(json?.items[0]);
  };

  const SuggestedVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${searhParams.get(
        "v"
      )}&type=video&key=${api_key}`
    );

    const json = data.json();
    console.log(json);
  };

  return (
    <div className="text-white w-full rounded-lg mt-16 flex flex-col">
      <div className="flex justify-between">
        <iframe
          className="ml-32 mt-8 rounded-2xl bg-red mr-0"
          width="920"
          height="520"
          src={
            "https://www.youtube.com/embed/" +
            searhParams.get("v") +
            "?autoplay=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="w-1/3">
          <LiveChat />
        </div>
      </div>

      <div>
        <p className="font-bold ml-24 my-6 text-xl">
          {videoInfo?.snippet?.localized?.title}
        </p>
      </div>

      <div className="bg-[#272829] ml-24 max-w-[950px] rounded-lg p-4 m-2">
        <div className="flex">
          <p className="font-bold">{videoInfo?.statistics?.viewCount} views </p>
          <p className="font-bold mx-2">
            {dateInFormat(videoInfo?.snippet?.publishedAt)}
          </p>
        </div>

        {expand ? (
          <p>{videoInfo?.snippet?.localized?.description}</p>
        ) : (
          <p>{videoInfo?.snippet?.localized?.description.slice(0, 100)}</p>
        )}
        {
          <button className="font-bold" onClick={() => setExpand(!expand)}>
            {expand ? "show less" : "...more"}
          </button>
        }
      </div>
    </div>
  );
};

export default WatchPage;

{
  /* commenting out this , only for learning n nesyed comment */
}
{
  /* <div className="w-full h-full">
        <h1 className="ml-24 mt-6 font-bold">Comments</h1>
        <div>
          <CommentContainer />
        </div>
      </div> */
}

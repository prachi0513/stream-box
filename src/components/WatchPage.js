import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Redux/appSlice";
import { useSearchParams } from "react-router-dom";
import { api_key } from "../utils/constant";
import { dateInFormat, formatNumber } from "../utils/helpers";
import LiveChat from "./LiveChat";
import CommentContainer from "./CommentList";

const WatchPage = () => {
  const disptach = useDispatch();
  const [videoInfo, setVideoInfo] = useState({});
  const [channelID, setChannelID] = useState("");
  const [channelInfo, setChannelInfo] = useState({});
  const [expand, setExpand] = useState(false);
  const [searhParams] = useSearchParams();

  useEffect(() => {
    disptach(closeMenu());
    VideoDetailsApi();
  }, []);

  useEffect(() => {
    if (channelID) {
      ChannelDetailsApi();
    }
  }, [channelID]);

  const VideoDetailsApi = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${searhParams.get(
        "v"
      )}&key=${api_key}`
    );
    const json = await data.json();
    setVideoInfo(json?.items[0]);
    setChannelID(json?.items[0]?.snippet?.channelId);
  };

  const ChannelDetailsApi = async () => {
    const data = await fetch(
      ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelID}&key=${api_key}`
    );
    const json = await data.json();
    setChannelInfo(json?.items[0]);
  };

  return (
    <div className="text-white w-full rounded-lg mt-16 flex flex-col">
      <div className="flex justify-between flex-col md:flex-row">
        <iframe
          className="mx-auto mt-8 rounded-2xl bg-black border border-gray-800 mr-0 w-full max-w-[920px] h-[520px] sm:h-[400px] md:h-[520px]"
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

      <div className="md:mx-48">
        <p className="font-bold mx-4 my-6 text-xl">
          {videoInfo?.snippet?.localized?.title}
        </p>
      </div>

      <div className="flex md:mx-48 mb-2">
        <img
          src={channelInfo?.snippet?.thumbnails?.default.url}
          className="w-12 h-12 mx-4 rounded-full"
          alt="channel-banner"
        />
        <div className="mx-4">
          <p className="mx-2 align-middle cursor-pointer">
            {videoInfo?.snippet?.channelTitle}
          </p>
          <p className="mx-2">
            {formatNumber(channelInfo?.statistics?.subscriberCount)} Subscribers
          </p>
        </div>
      </div>

      <div className="bg-[#272829] mx-4 md:mx-48 max-w-[950px] rounded-lg p-4 m-2">
        <div className="flex flex-col md:flex-row">
          <p className="font-bold">
            {formatNumber(videoInfo?.statistics?.viewCount)} views
          </p>
          <p className="font-bold mx-2">
            {dateInFormat(videoInfo?.snippet?.publishedAt)}
          </p>
        </div>

        {expand ? (
          <p>{videoInfo?.snippet?.localized?.description}</p>
        ) : (
          <p>{videoInfo?.snippet?.localized?.description.slice(0, 100)}...</p>
        )}

        <button
          className="font-bold text-blue-500 hover:underline mt-2"
          onClick={() => setExpand(!expand)}
        >
          {expand ? "show less" : "...more"}
        </button>
      </div>

      <div className="bg-gray-800 mx-4 md:mx-48 max-w-[950px] rounded-lg p-4 m-2">
        <h1 className="ml-24 mt-6 font-bold">Comments</h1>
        <div>
          <CommentContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;

{
  /* commenting out this , only for learning n nested comment */
}
{
  /* */
}

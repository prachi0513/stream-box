import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_LIST } from "../utils/constant";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideoList();
  }, []);

  const getVideoList = async () => {
    const data = await fetch(YOUTUBE_POPULAR_LIST);
    const json = await data.json();
    setVideos(json.items);
  };

  if (!Array.isArray(videos) || videos.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex-1 flex flex-wrap justify-start mt-8 md:flex-row flex-col overflow-hidden">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;

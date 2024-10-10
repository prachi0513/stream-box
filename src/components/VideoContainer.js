import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_LIST } from "../utils/constant";
import { VideoCard } from "./VideoCard";

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

  return (
    <div className="flex-1 flex flex-wrap justify-start">
      {videos.map((video) => {
        return <VideoCard key={video.id} info={video} />;
      })}
    </div>
  );
};

export default VideoContainer;

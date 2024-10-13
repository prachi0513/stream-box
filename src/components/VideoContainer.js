import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_LIST } from "../utils/constant";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

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
    <div className="flex-1 flex flex-wrap justify-start mt-14">
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

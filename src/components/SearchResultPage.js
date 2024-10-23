import React, { useEffect, useState } from "react";
import { api_key } from "../utils/constant";
import { Link, useSearchParams } from "react-router-dom";
import { VideoCard } from "./VideoCard";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");

  const [resultVideos, setResultVideo] = useState([]);

  useEffect(() => {
    fetchSearchVideo();
  }, [searchQuery]);

  const fetchSearchVideo = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${api_key}`
    );
    const json = await data.json();
    console.log("searched results", json.items);
    setResultVideo(json.items);
  };

  if (!setResultVideo) return;

  return (
    <div className="text-white mt-20">
      <div>
        {resultVideos.map((element) => {
          return (
            <div>
              <Link
                to={"/watch?v=" + element.id.videoId}
                key={element.id.videoId}
              >
                {element.snippet.title}
                <VideoCard info={element} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultPage;

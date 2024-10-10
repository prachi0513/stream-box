import React from "react";

export const VideoCard = ({ info }) => {
  //console.log(info);

  const { thumbnails, channelTitle, title } = info.snippet;
  const { viewCount } = info.statistics;
  return (
    <div className="m-2 text-white">
      <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-lg" />
      <p className="w-80 font-bold mt-2 text-sm">{title}</p>
      <p className="">{channelTitle}</p>
      <p>{viewCount} views</p>
    </div>
  );
};

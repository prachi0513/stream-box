import React from "react";
import { formatNumber } from "../utils/helpers";

export const VideoCard = ({ info }) => {
  const { thumbnails, channelTitle, title } = info.snippet;

  return (
    <div className="m-2 text-white cursor-pointer">
      <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-lg" />
      <p className="w-80 font-bold mt-2 text-sm">{title}</p>
      <p className="">{channelTitle}</p>
      <p>
        {info.statistics ? formatNumber(info.statistics.viewCount) : ""} views
      </p>
    </div>
  );
};

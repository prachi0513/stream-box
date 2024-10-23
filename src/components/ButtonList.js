import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const listButton = [
    "All",
    "Music",
    "News",
    "Podcast",
    "Video",
    "Playlist",
    "Technology",
  ];
  return (
    <div className="flex mt-24">
      {listButton.map((btn) => {
        return <Button key={btn} name={btn} />;
      })}
    </div>
  );
};

export default ButtonList;

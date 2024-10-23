import React from "react";
import { USER_AVAATAR } from "../utils/constant";

const LiveChatMessage = ({ name, message }) => {
  return (
    <div>
      <div className="flex items-center">
        <img
          className="w-8 h-8 my-4 rounded-full mx-4"
          alt="user"
          src={USER_AVAATAR}
        />
        <span className="font-bold mx-2">{name}</span>
        <span className="mx-2">{message}</span>
      </div>
    </div>
  );
};

export default LiveChatMessage;

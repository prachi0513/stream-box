import React, { useEffect } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch } from "react-redux";
import { addComments } from "../Redux/chatSlice";
import { useSelector } from "react-redux";
import { generateRandomComment, generateRandomName } from "../utils/helpers";
import { useRef } from "react";
import { toggleLiveChat } from "../Redux/chatSlice";

const LiveChat = () => {
  const disptach = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const userMessage = useRef(null);
  const showChat = useSelector((store) => store.chat.showLiveChat);

  useEffect(() => {
    const intv = setInterval(() => {
      disptach(
        addComments({
          name: generateRandomName(),
          message: generateRandomComment(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(intv);
    };
  });

  const handleAddComment = () => {
    disptach(
      addComments({
        name: generateRandomName(),
        message: userMessage.current.value,
      })
    );
    userMessage.current.value = "";
  };

  return (
    <>
      {showChat ? (
        <div className="mt-8 border-white border w-[500px] rounded-lg mx-2">
          <div className="p-2 border-t-0 rounded-t-lg border flex justify-between">
            <p>Live chat</p>
            <button
              onClick={() => {
                disptach(toggleLiveChat());
              }}
            >
              ❌
            </button>
          </div>

          <div className="overflow-y-scroll h-[450px] flex flex-col-reverse">
            {messages.map((mes, index) => {
              return (
                <LiveChatMessage
                  key={index}
                  name={mes.name}
                  message={mes.message}
                />
              );
            })}
          </div>
          <div className="flex justify-between text-white border border-white ">
            <input
              ref={userMessage}
              className="w-full bg-black p-2"
              placeholder="type your comment.."
            />
            <button onClick={handleAddComment}>⬆️</button>
          </div>
        </div>
      ) : (
        <div
          className="mt-8 border-white border w-[500px] p-2 mx-2 text-center rounded-full"
          onClick={() => {
            disptach(toggleLiveChat());
          }}
        >
          Show chat
        </div>
      )}
    </>
  );
};

export default LiveChat;

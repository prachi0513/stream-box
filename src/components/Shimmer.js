import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-start mt-14">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-64 h-44 bg-gray-200 m-4 rounded-lg animate-pulse"
          >
            <div className="bg-gray-300 h-36 rounded-t-lg"></div>
            <div className="my-4">
              <div className="h-4 bg-gray-300 mb-2 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

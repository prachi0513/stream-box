import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-[#3F3F3F] m-2 px-5 py-1 rounded-lg text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;

import React, { useRef, useState } from "react";

const Demo = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);

  return (
    <div className="text-white mt-24 w-96 h-96 p-4 m-4 border-white border">
      <div>
        <button
          className="bg-green-900 p-2 rounded-lg"
          onClick={() => {
            x = x + 1;
            console.log("x =", x);
          }}
        >
          Increase x
        </button>
        <h1>x = {x}</h1>
      </div>

      <div className="mt-7">
        <button
          className="bg-green-900 p-2 rounded-lg"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase y
        </button>
        <h1>y = {y}</h1>
      </div>

      <div className="mt-7">
        <button
          className="bg-green-900 p-2 rounded-lg"
          onClick={() => {
            z.current = z.current + 1;
            console.log("z = ", z.current);
          }}
        >
          Increase z
        </button>
        <h1>z = {z.current}</h1>
      </div>
    </div>
  );
};

export default Demo;

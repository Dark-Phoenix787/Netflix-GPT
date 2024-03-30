import React from "react";

const Titlecontmain = (title) => {
  // console.log(title);
  return (
    <div className=" absolute w-[100%] aspect-video overflow-x-hidden text-white bg-gradient-to-r from-black pt-96 pl-16 ">
      <h1 className="text-5xl font-bold mb-4">{title.title.title}</h1>
      <p className="w-1/3 text-sm">{title.title.description}</p>
      <div className="mt-4">
        <button className="px-5 py-2 bg-white text-black text-lg font-semibold rounded-md mr-2 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="px-4 py-2 bg-gray-500 text-lg font-semibold rounded-md bg-opacity-50 text-white">
          More info
        </button>
      </div>
    </div>
  );
};

export default Titlecontmain;

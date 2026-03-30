import React from "react";

function Switch({ isActive, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`w-20 h-10 rounded-full cursor-pointer relative  px-1 transition-all duration-300 shadow-inner ${isActive ? "bg-red-700" : "bg-neutral-400"}`}
    >
      <div
        className={`w-8 h-8 rounded-3xl absolute top-1 duration-300 bg-white ${isActive ? "transform translate-x-10" : "translate-0"}`}
      ></div>
    </button>
  );
}

export default Switch;

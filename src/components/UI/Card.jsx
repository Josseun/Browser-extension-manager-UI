import React from "react";
import Switch from "./Switch";

function Card({ name, description, logo, isActive, onToggle, rmExtensions }) {
  return (
    <div className="w-full max-w-500 h-50 dark:bg-neutral-800 bg-neutral-50  rounded-3xl flex flex-col justify-center gap-10 px-3 items-center">
      <div className="flex gap-2">
        <img className="w-12 h-11" src={logo} alt="" />
        <div>
          <p className="font-fam-bold text-lg dark:text-neutral-100">{name}</p>
          <p className="font-fam-primary text-[14px] dark:text-neutral-100">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <button
          onClick={rmExtensions}
          className="flex justify-center items-center px-3 border-neutral-400 font-fam-secondary border rounded-full w-full max-w-25 text-sm cursor-pointer dark:text-neutral-50"
        >
          Remove
        </button>
        <Switch isActive={isActive} onToggle={onToggle} />
      </div>
    </div>
  );
}

export default Card;

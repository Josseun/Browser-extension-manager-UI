import React from "react";
import Card from "./UI/Card";
import Data from "../../data.json";
import { useState } from "react";
import { useEffect } from "react";

function Body() {
  const [filter, setFilter] = useState("all");

  const [extension, setExtension] = useState(() => {
    const saved = localStorage.getItem("extensions");
    return saved ? JSON.parse(saved) : Data;
  });

  useEffect(() => {
    if (!localStorage.getItem("extensions")) {
      setExtension(Data);
    }
  }, []);

  const filterExtensions = extension.filter((ext) => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return ext;
  });

  const rmExtensions = (name) => {
    setExtension((prev) => prev.filter((ext) => ext.name !== name));
  };

  const toggleExtensions = (name) => {
    setExtension((prev) => {
      const updated = prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext,
      );
      localStorage.setItem("extensions", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto ">
      <section className="flex flex-col lg:flex lg:flex-row md:flex gap-3 justify-between  items-center w-full max-w-400 mt-10 px-5">
        <div className="text-3xl lg:text-3xl font-fam-bold text-primary dark:text-neutral-50 cursor-pointer">
          Extensions List
        </div>

        <div className="flex items-center gap-3 font-fam-secondary text-sm lg:text-base">
          <button
            onClick={() => setFilter("all")}
            className={`w-17 flex justify-center shadow-2xs items-center py-2 rounded-4xl cursor-pointer
      ${
        filter === "all"
          ? "bg-red-600 text-white"
          : "bg-neutral-0 text-primary dark:bg-neutral-700 dark:text-neutral-50"
      }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("active")}
            className={`w-20 flex justify-center items-center py-2 rounded-4xl shadow-2xs cursor-pointer
      ${
        filter === "active"
          ? "bg-red-600 text-white"
          : "bg-neutral-0 text-primary dark:bg-neutral-700 dark:text-neutral-50"
      }`}
          >
            Active
          </button>

          <button
            onClick={() => setFilter("inactive")}
            className={`w-25 py-2 flex justify-center items-center rounded-4xl shadow-2xs cursor-pointer
      ${
        filter === "inactive"
          ? "bg-red-600 text-white"
          : "bg-neutral-0 text-primary dark:bg-neutral-700 dark:text-neutral-50"
      }`}
          >
            Inactive
          </button>
        </div>
      </section>
      <section className="w-full  h-full flex items-center justify-center px-5 mt-10">
        <div className="w-full max-w-300 h-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filterExtensions.map((data) => {
            return (
              <Card
                key={data.name}
                name={data.name}
                description={data.description}
                logo={data.logo}
                isActive={data.isActive}
                rmExtensions={() => rmExtensions(data.name)}
                onToggle={() => toggleExtensions(data.name)}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Body;

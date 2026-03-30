import { useEffect } from "react";
import { useState } from "react";

function useDarkmode() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("darkMode", next);
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  return { darkMode, toggleDarkMode };
}

export default useDarkmode;

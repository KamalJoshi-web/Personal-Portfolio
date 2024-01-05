import React, { useEffect, useState } from "react";
import { CgSun, CgMoon } from "react-icons/cg";

const ThemeSwitcher = ({ className = "" }) => {
  const [theme, setTheme] = useState(true);
  //   Theme Mode
  const handleTheme = () => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setTheme(!theme);
  };
  //   After refresh
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme(false);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Color gradient

  return (
    <div
      className={`cursor-pointer absolute bottom-[40%]  left-[98%]  ${className}`}
      onClick={handleTheme}
    >
      {!theme ? (
        <CgSun size={23} className={"text-Turquoise"} />
      ) : (
        <CgMoon size={23} className={"text-RoyalBlue"} />
      )}
    </div>
  );
};

export default ThemeSwitcher;

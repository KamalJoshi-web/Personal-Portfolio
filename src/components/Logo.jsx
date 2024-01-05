import React from "react";
import { ThemeSwitcher } from "../components/index";

const Logo = ({ white, theme }) => {
  return (
    <div className=" relative">
      <h1
        className={`font-notoJP font-extrabold text-3xl 
         text-transparent  bg-clip-text bg-gradient-to-r from-Turquoise to-RoyalBlue
          dark:from-RoyalBlue dark:to-Turquoise
      ${white && "text-white"}`}
      >
        <span className="italic">Ka</span>m<span className="italic">al.</span>
      </h1>
      {theme && <ThemeSwitcher />}
    </div>
  );
};

export default Logo;

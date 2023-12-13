import React from "react";
import style from "./Toggler.module.scss";

export default function Toggler({ darkMode, handleClick }) {
  return (
    <div className={style.togglerContainer}>
      <div className={style.toggler}>
        {darkMode ? (
          <span onClick={handleClick} aria-label="Full Moon">
            click me! 🌕
          </span>
        ) : (
          <span onClick={handleClick} aria-label="New Moon">
            click me! 🌑
          </span>
        )}
      </div>
    </div>
  );
}

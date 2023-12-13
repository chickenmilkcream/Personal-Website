import React from "react";
import me from "../../images/me.png";
import style from "./Header.module.scss";

function Header() {
  return (
    <div className={style.profile}>
      <div className={style.photo}>
        <img src={me} alt="Profile of Amy Peng" />
      </div>
      <div className={style.info}>
        <h1>Amy Peng</h1>
        <p>Software Developer</p>
        <ul>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li> * </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

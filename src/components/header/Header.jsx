import React from "react";
import me1 from "../../images/me1.png";
import me2 from "../../images/me2.png";
import style from "./Header.module.scss";

function Header() {
  return (
    <div className={style.profile}>
      <div className={style.photo}>
        <a>
          <img src={me1} alt="Profile of Amy Peng" />
          <img src={me2} alt="Profile of Amy Peng" />
        </a>
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

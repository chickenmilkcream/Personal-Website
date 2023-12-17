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
        <span>
          <a
            href="https://drive.google.com/file/d/1Mlh_uOJewq69PD0j0phzaHYeESdeNff0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </span>
      </div>
    </div>
  );
}

export default Header;
